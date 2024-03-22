import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell, TextField, IconButton, Typography, Select, MenuItem } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const RouteTable = () => {
  const [data, setData] = useState([]);
  const [newRoute, setNewRoute] = useState({
    countryId: '',
    name: '',
    travelPrice: ''
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchCountries();
  }, []);
  
  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://localhost:59312/api/country');
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:59312/api/route');
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

  const saveChanges = async (route) => {
    try {
      if (route) {
        await axios.put(`https://localhost:59312/api/route`, route);
        console.log('Changes saved successfully!');
        toast.success('Changes saved successfully!');
      }
    } catch (error) {
      console.error('Error saving changes:', error);
      toast.error('Error saving changes!');
    }
  };
  
  const deleteRow = async (route) => {
    try {
      confirmAlert({
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this route?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
              await axios.delete(`https://localhost:59312/api/route/${route.id}`);
              console.log('Route deleted successfully!');
              toast.success('Route deleted successfully!');
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
      console.error('Error deleting route:', error);
      toast.error('Error deleting route!');
    }
  };

  const handleNewRouteChange = (event) => {
    const { name, value } = event.target;
    setNewRoute((prevCountry) => ({ ...prevCountry, [name]: value }));
  };

  const createRoute = async () => {
    try {
      await axios.post('https://localhost:59312/api/route', newRoute)
      console.log('Route created successfully!');
      setNewRoute({
        countryId: '',
        name: '',
        travelPrice: ''
      });
      fetchData();
      toast.success('Route created successfully!');
    } catch (error) {
      console.error('Error creating route:', error);
      toast.error('Error creating route!');
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
      Маршруты
    </Typography>
    <div style={
        {
            width: "70%"
        }
    }>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>Страна</TableCell>
            <TableCell>Название маршрута</TableCell>
            <TableCell>Цена путевки, руб.</TableCell>
            <TableCell>Продано путевок</TableCell>
            <TableCell>Итого, руб.</TableCell>
            <TableCell>Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
                <TableCell>
  <Select
    name="countryId"
    value={item.countryId}
    onChange={(event) => handleInputChange(event, index)}
  >
    {countries.map((country) => (
      <MenuItem key={country.id} value={country.id}>
        {country.name}
      </MenuItem>
    ))}
  </Select>
</TableCell>
              <TableCell>
                <TextField
                  name="name"
                  value={item.name}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="travelPrice"
                  value={item.travelPrice}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="salesNumber"
                  value={item.sales.length}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="totalAmount"
                  value={item.sales.length * item.travelPrice}
                  InputProps={{
                    readOnly: true,
                  }}
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
  <Select
    name="countryId"
    value={newRoute.countryId}
    onChange={handleNewRouteChange}
  >
    {countries.map((country) => (
      <MenuItem key={country.id} value={country.id}>
        {country.name}
      </MenuItem>
    ))}
  </Select>
</TableCell>
            <TableCell>
              <TextField
                name="name"
                value={newRoute.name}
                onChange={handleNewRouteChange}
              />
            </TableCell>
            <TableCell>
              <TextField
                name="travelPrice"
                value={newRoute.travelPrice}
                onChange={handleNewRouteChange}
              />
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <IconButton color="primary" onClick={createRoute}>
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

export default RouteTable;