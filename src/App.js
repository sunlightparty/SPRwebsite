import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes } from 'react-router-dom';

import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/">
            <Route index element={<Homepage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
