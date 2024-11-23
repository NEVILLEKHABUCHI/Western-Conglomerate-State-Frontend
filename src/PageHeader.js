import React from 'react';
import { Link } from 'react-router-dom';

function PageHeader({showHeaderButtons, setShowHeaderButtons}){
    const handleClick = () => {
        setShowHeaderButtons(!showHeaderButtons);
    }
    return (
        <div className='containerTop'>
           <div className='left'>
            <img src='logo.jpg' alt='Western Conglomerate State' />
           </div>

           <div className={`right ${showHeaderButtons ? 'show' : ''}`}>
            <div className='navBars'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contacts'>Contacts</Link>
            </div>
            <div className='socialMediaLinks'>
                <a href ='#' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-x-twitter"></i></a>
                <a href ='#' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-facebook"></i></a>
                <a href ='#' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-instagram"></i></a>
                <a href ='#' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-youtube"></i></a>
                <a href ='#' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-tiktok"></i></a>
            </div>
           </div>
            {/* Button to open and close the sidebar on small devices such as a phone */}
            <div className='showSidebarButtons'>
            <button onClick={handleClick} aria-label='Toggle Navigation'>
                <i className={`toggle-icon ${showHeaderButtons ? 'fa fa-times' : 'fa fa-bars'}`}></i>
            </button>
            </div>
        </div>
    )
}
export default PageHeader;