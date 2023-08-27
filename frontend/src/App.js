import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact'
import UchebniCenter, { DirectionPage, directionsData } from './components/Uchebni_center'
import PageNotFound from './components/Error/PageNotFound'

const App = () => {
  return (
    <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/uchebni-center">
              <Route index element={<UchebniCenter />} />
              {directionsData.map((direction) => (
                <Route
                  key={direction.path}
                  path={`${direction.path}`}
                  element={<DirectionPage direction={direction} />}
                />
              ))}
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
};

export default App;
