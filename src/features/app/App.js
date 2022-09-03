import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from '../pages/authPages/LoginPage';
import RegisterPage from '../pages/authPages/RegisterPage';
import MainPage from '../pages/MainPage';

import '../../style/style.sass';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<MainPage/>}/> */}
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
