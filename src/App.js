// App.js
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lifecycle from './willmount';
import PerfumeStore from './cards.jsx';
import Contactus from './contact.js';
import Footer from './Footer';
import SignInPage from './signin .jsx';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PerfumeStore/>
                <Footer />
                <Lifecycle />
              </>
            }
          />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
