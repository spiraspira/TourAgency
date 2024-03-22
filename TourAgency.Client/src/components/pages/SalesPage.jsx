import React from 'react';

import Footer from '../header/Footer';
import SaleTable from './tables/SaleTable';
import Header from '../header/Header';

const SalesPage = () => {
  return (
    <div>
      <Header />  
      <SaleTable />
      <Footer />
    </div>
  );
};

export default SalesPage;