import React from 'react';


function Nav({ currentPage, handlePageChange }) {


  return (
    <header className="flex-row px-1">
      <h2>
        {/* <a data-testid="link" href="/">Catherine McNeel</a> */}
      </h2>
      <div className="nav-text" >
        <ul className="flex-row">
          <li className="About">
          <span href='#About' onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
              About Me
            </span>
          </li>
          <li className="Contact">
          <span href='#contact' onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </span>
          </li>
          <li className="Resume">
            <span href='#resume' onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
              Resume
            </span>
          </li>
          <li className="Portfolio">
            <span href='#portfolio' onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </span>
          </li>
       
          
          
        </ul>
      </div>
    </header>
  );
}

export default Nav;