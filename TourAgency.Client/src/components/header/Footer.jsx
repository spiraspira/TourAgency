import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '20vh',
    backgroundColor: '#1C3988'
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    </div>
  );
};

export default Footer;