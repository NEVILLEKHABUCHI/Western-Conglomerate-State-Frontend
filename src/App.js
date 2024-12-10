import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contacts from './Contacts';

function App(){
  return (
    <Router>

        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/services" element = {<Services />} />
          <Route path = "/contacts" element = {<Contacts />} />
        </Routes>
  
    </Router>
  );
}

export default App;