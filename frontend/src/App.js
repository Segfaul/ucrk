import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact'
import UchebniCenter, { DirectionPage, directionsData } from './components/Uchebni_center'
import Uslugi, { UslugiPage, UslugiData } from './components/Uslugi';
import PageNotFound from './components/Error/PageNotFound';
import ScrollToTop from './components/config/Scroll';

const App = () => {

  return (
    <Router>
        <ScrollToTop />
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
            <Route path="/uslugi">
              <Route index element={<Uslugi />} />
              {UslugiData.map((usluga) => (
                usluga.imageUrl ? (
                  <Route
                    key={usluga.path}
                    path={`${usluga.path}`}
                    element={<UslugiPage direction={usluga} />}
                  />
                ) : null
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
