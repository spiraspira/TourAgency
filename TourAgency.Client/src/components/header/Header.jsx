import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" elevation={0} style={{ backgroundColor: "#F8F8F8",  fontFamily: "'Helvetica', 'Arial', sans-serif" }}>
      <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
        <div>
          <Button variant="text" color="inherit"
          onClick={() => {
            navigate("/countries");
            window.location.reload()
          }}
          style={{
            color: 'black',
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
            color: 'black',
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
            color: 'black',
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

export default Header;