import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png';

const Navbar = () => {
    return (
        <>
            <section className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <NavLink to='/' className="brand-name" ><img src={logo} alt="logo"/></NavLink>
                                    
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="active_class" to='/' className="nav-link font-weight-bolder text-uppercase" >Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="active_class" to='/about' className="nav-link font-weight-bolder text-uppercase" >About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="active_class" to='/service' className="nav-link font-weight-bolder text-uppercase" >Service</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="active_class" to='/contact' className="nav-link font-weight-bolder text-uppercase" >Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar;