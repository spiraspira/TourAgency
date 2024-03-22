import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell, TextField, IconButton, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const CountryTable = () => {
  const [data, setData] = useState([]);
  const [newCountry, setNewCountry] = useState({
    id: '',
    name: '',
    visaPrice: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:59312/api/country');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], [name]: value };
    setData(updatedData);
  };

  const saveChanges = async (country) => {
    try {
      if (country) {
        await axios.put(`https://localhost:59312/api/country`, country);
        console.log('Changes saved successfully!');
        toast.success('Changes saved successfully!');
      }
    } catch (error) {
      console.error('Error saving changes:', error);
      toast.error('Error saving changes!');
    }
  };
  
  const deleteRow = async (country) => {
    try {
      confirmAlert({
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this country?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
              await axios.delete(`https://localhost:59312/api/country/${country.id}`);
              console.log('Country deleted successfully!');
              toast.success('Country deleted successfully!');
              fetchData();
            }
          },
          {
            label: 'No',
            onClick: () => {
              // Do nothing if the user clicks "No"
            }
          }
        ]
      });
    } catch (error) {
      console.error('Error deleting country:', error);
      toast.error('Error deleting country!');
    }
  };

  const handleNewCountryChange = (event) => {
    const { name, value } = event.target;
    setNewCountry((prevCountry) => ({ ...prevCountry, [name]: value }));
  };

  const createCountry = async () => {
    try {
      await axios.post('https://localhost:59312/api/country', newCountry)
      console.log('Country created successfully!');
      setNewCountry({
        id: '',
        name: '',
        visaPrice: ''
      });
      fetchData();
      toast.success('Country created successfully!');
    } catch (error) {
      console.error('Error creating country:', error);
      toast.error('Error creating country!');
    }
  };

  return (
    <div style={
        {
            width: "100%",
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    }>
        <Typography variant="h4" component="h1" gutterBottom>
      Страны
    </Typography>
    <div style={
        {
            width: "70%"
        }
    }>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название страны</TableCell>
            <TableCell>Стоимость визы, руб.</TableCell>
            <TableCell>Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>
                <TextField
                  name="name"
                  value={item.name}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="visaPrice"
                  value={item.visaPrice}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </TableCell>
              <TableCell>
              <IconButton color="primary" onClick={() => {
  saveChanges(item);
}}>
  <SaveIcon />
</IconButton>

<IconButton color="secondary" onClick={() => {
  deleteRow(item);
}}>
  <DeleteIcon />
</IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <TextField
                name="name"
                value={newCountry.name}
                onChange={handleNewCountryChange}
              />
            </TableCell>
            <TableCell>
              <TextField
                name="visaPrice"
                value={newCountry.visaPrice}
                onChange={handleNewCountryChange}
              />
            </TableCell>
            <TableCell>
              <IconButton color="primary" onClick={createCountry}>
                <SaveIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div>
      {/* ... */}
      <ToastContainer />
    </div>
    </div>
    </div>
  );
};

export default CountryTable;