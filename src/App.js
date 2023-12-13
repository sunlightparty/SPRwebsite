import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Homepage from './components/Homepage';
import Contact from './components/Contact'
import Layout from './components/Layout';
import ErrorPage from './components/errorPage.js'
import ProdPage from './components/ProdPage.js';
import ProdPageCaps from './components/ProdPageCaps.js'
import Mulprods from './components/Mulprods.js';

function App() {
  const helmetContext = {};
  return (
         <div className="App">
        <Helmet>
        <title>Sunlight Party Rental</title>
        <meta name="description" content="Most affordable party supplies in the Bay Area. 11-7 Mon-Fri. Locations in Richmond and Albany"/>
        </Helmet>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='products/:id' element={<Mulprods />}/>
            <Route path='product/:id' element={<ProdPage items={ProdPageCaps}/>}/>
            <Route path="contact">
                <Route index element={<Contact title="test"/>}/>
            </Route>
            <Route path='*' element={<ErrorPage/>}/>
          </Route> 
      </Routes>
    </div>
   
  );
}

export default App;
