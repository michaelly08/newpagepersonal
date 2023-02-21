import React from 'react'

const Navbar = () => {

    const show = () => {
        document.querySelector(".navbar-container").classList.toggle("is-active");
    }


  return (
    <div className="navbar-container">
        <div className="navbar-wrapper">

            <div className="navbar-logo">
                <div>Michael Ly</div>

                <div className="navbar-menu-button" onClick={show}> 
                    <i className='bx bx-menu-alt-right'></i>
                </div>
            </div>

            
            
            <div className="navbar-options"> 
                <a href="#experience" className="navbar-box">
                    Experience
                </a>

                <a href="#projects" className="navbar-box">
                    Projects
                </a>

                <a href="#contact-me" className="navbar-box contact-me-button">
                    Contact Me
                </a>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar