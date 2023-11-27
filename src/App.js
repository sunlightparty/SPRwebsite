import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';

import Homepage from './components/Homepage';
import Contact from './components/Contact'
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="contact">
                <Route index element={<Contact/>}/>
            </Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
