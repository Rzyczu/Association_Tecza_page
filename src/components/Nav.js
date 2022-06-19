import React from 'react';
import {
    Link
} from "react-router-dom";

import '../styles/Nav.css';
import logo from '../assets/logo.png'

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <header className="Menu">
                <div className='logo'>
                    <img src={logo} alt="logo"></img>
                    Stowarzyszenie Rodzicó i Przyjaciół<br />
                    Osób z Zespołem Downa<br />
                    W Krakowie
                </div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
                <nav className='nav-list'>
                    <ul>
                        <li><Link to="/" className='clr-1'>O nas</Link></li>
                        <li><Link to="/aktualnosci" className='clr-2'>Aktualności</Link></li>
                        <li><a href="link" className='clr-3'>Nasze działania</a></li>
                        <li><a href="link" className='clr-5'>Jak możesz pomóc?</a></li>
                        <li><a href="link" className='clr-6'>Kontakt</a></li>
                        <li><a href="link">Wpłać darowiznę</a></li>
                        <li><a href="link">1%</a></li>
                    </ul>
                    {/* <ul className='top-nav'>
                        <li><a href="link">Wpłać darowiznę</a></li>
                        <li><a href="link">1%</a></li>
                    </ul> */}
                </nav>

                <label htmlFor="nav-toggle" className='nav-toggle-label'>
                    <span></span>
                </label>
            </header>
        );
    }
}

export default Nav;
