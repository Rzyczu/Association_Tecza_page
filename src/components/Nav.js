import React from 'react';
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
                <nav>
                    <ul>
                        <a href="link" className='clr-1'><li>O nas</li></a>
                        <a href="link" className='clr-2'><li>Aktualności</li></a>
                        <a href="link" className='clr-3'><li>Nasze działania</li></a>
                        <a href="link" className='clr-5'><li>Jak możesz pomóc?</li></a>
                        <a href="link" className='clr-6'><li>Kontakt</li></a>
                    </ul>
                    <ul className='top-nav'>
                        <li><a href="link">Wpłać darowiznę</a></li>
                        <li><a href="link">1%</a></li>
                    </ul>
                </nav>

                <label htmlFor="nav-toggle" className='nav-toggle-label'>
                    <span></span>
                </label>
            </header>
        );
    }
}

export default Nav;
