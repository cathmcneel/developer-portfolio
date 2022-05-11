import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import About from './Pages/AboutMe';

function PortfolioMain() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
          }
        return <Contact />;
      };
     
      const handlePageChange = (page) => setCurrentPage(page);

      return (
        <div>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
    }

    export default PortfolioMain;

