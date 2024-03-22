import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell, TextField, IconButton, Typography, Select, MenuItem } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { format } from 'date-fns';

const SaleTable = () => {
  const [data, setData] = useState([]);
  const [newSale, setNewSale] = useState({
    routeId: '',
    travelPurpose: '',
    sellDate: ''
  });
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchRoutes();
  }, []);
  
  const fetchRoutes = async () => {
    try {
      const response = await axios.get('https://localhost:59312/api/route');
      setRoutes(response.data);
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:59312/api/sale');
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

  const saveChanges = async (sale) => {
    try {
      if (sale) {
        await axios.put(`https://localhost:59312/api/sale`, sale);
        console.log('Changes saved successfully!');
        toast.success('Changes saved successfully!');
      }
    } catch (error) {
      console.error('Error saving changes:', error);
      toast.error('Error saving changes!');
    }
  };
  
  const deleteRow = async (sale) => {
    try {
      confirmAlert({
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this sale?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
              await axios.delete(`https://localhost:59312/api/sale/${sale.id}`);
              console.log('Sale deleted successfully!');
              toast.success('Sale deleted successfully!');
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
      console.error('Error deleting sale:', error);
      toast.error('Error deleting sale!');
    }
  };

  const handleNewSaleChange = (event) => {
    const { name, value } = event.target;
    setNewSale((prevSale) => ({ ...prevSale, [name]: value }));
    setNewSale((prevSlae) => ({ ...prevSlae, sellDate: new Date()}));
  };

  const createSale = async () => {
    try {
      await axios.post('https://localhost:59312/api/sale', newSale)
      console.log('Sale created successfully!');
      setNewSale({
        routeId: '',
        travelPurpose: '',
        sellDate: ''
      });
      fetchData();
      toast.success('Sale created successfully!');
    } catch (error) {
      console.error('Error creating sale:', error);
      toast.error('Error creating sale!');
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
      Продажи
    </Typography>
    <div style={
        {
            width: "70%"
        }
    }>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>Маршрут</TableCell>
            <TableCell>Цель поездки</TableCell>
            <TableCell>Дата продажи</TableCell>
            <TableCell>Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
                <TableCell>
  <Select
    name="routeId"
    value={item.routeId}
    onChange={(event) => handleInputChange(event, index)}
  >
    {routes.map((route) => (
      <MenuItem key={route.id} value={route.id}>
        {route.country.name + " | " + route.name}
      </MenuItem>
    ))}
  </Select>
</TableCell>
              <TableCell>
                <TextField
                  name="travelPurpose"
                  value={item.travelPurpose}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </TableCell>
              <TableCell>
  <TextField
    name="sellDate"
    value={format(new Date(), 'yyyy-MM-dd')}
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
    name="routeId"
    value={newSale.routeId}
    onChange={handleNewSaleChange}
  >
    {routes.map((route) => (
      <MenuItem key={route.id} value={route.id}>
        {route.country.name + " | " + route.name}
      </MenuItem>
    ))}
  </Select>
</TableCell>
            <TableCell>
              <TextField
                name="travelPurpose"
                value={newSale.travelPurpose}
                onChange={handleNewSaleChange}
              />
            </TableCell>
            <TableCell>
  <TextField
    name="sellDate"
    value={format(new Date(), 'yyyy-MM-dd')}
    InputProps={{
      readOnly: true,
    }}
  />
</TableCell>
            <TableCell>
              <IconButton color="primary" onClick={createSale}>
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

export default SaleTable;