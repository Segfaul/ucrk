import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact'
import PageNotFound from './components/Error/PageNotFound'
import Loader from './components/config/Loader'

const App = () => {
  return (
    <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
};

export default App;
