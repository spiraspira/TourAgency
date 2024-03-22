import React from 'react';
import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

  return (
    <AppBar position="static" elevation={0} style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: "20vh", backgroundColor: "#1C3988",  fontFamily: "'Helvetica', 'Arial', sans-serif" }}>
      <Toolbar style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
        <div>
          <Button variant="text" color="inherit"
          onClick={() => {
            navigate("/countries");
            window.location.reload()
          }}
          style={{
            color: 'white',
            fontSize: '15pt',
            textTransform: 'none',
            fontFamily: "'Helvetica', 'Arial', sans-serif"
          }}  >
            Страны
          </Button>

          <Button variant="text" color="inherit"
          onClick={() => {
            navigate("/routes");
            window.location.reload()
          }}
          style={{
            color: 'white',
            fontSize: '15pt',
            fontFamily: "'Helvetica', 'Arial', sans-serif",
            textTransform: 'none',
          }} >
            Маршруты
          </Button>

          <Button variant="text" color="inherit"
          onClick={() => {
            navigate("/sales");
            window.location.reload()
          }}
          style={{
            color: 'white',
            fontSize: '15pt',
            textTransform: 'none',
            fontFamily: "'Helvetica', 'Arial', sans-serif"
          }} >
            Продажи
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;