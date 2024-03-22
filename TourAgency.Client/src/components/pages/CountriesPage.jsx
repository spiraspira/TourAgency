import React from 'react';

import Footer from '../header/Footer';
import Header from '../header/Header';
import CountryTable from './tables/CountryTable';

const CountriesPage = () => {
  return (
    <div>
      <Header />  
      <CountryTable />
      <Footer />
    </div>
  );
};

export default CountriesPage;