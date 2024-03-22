import React from 'react';

import Footer from '../header/Footer';
import RouteTable from './tables/RouteTable';
import Header from '../header/Header';

const RoutesPage = () => {
  return (
    <div>
      <Header />  
      <RouteTable />
      <Footer />
    </div>
  );
};

export default RoutesPage;