import './App.css';
import logo from './logo.svg';
import './Menu.css';


function Menu() {
    return (
        <header className="Menu">
            <h1 className='logo'>Logo</h1>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
            <nav>
                <ul>
                    <li><a href="link">O nas</a></li>
                    <li><a href="link">Aktualności</a></li>
                    <li><a href="link">Nasze działania</a></li>
                    <li><a href="link">Jak możesz pomóc?</a></li>
                    <li><a href="link">Kontakt</a></li>
                </ul>
            </nav>
            <h2 className='Darowizna'>Wpłać darowiznę</h2>
            <label for="nav-toggle" className='nav-toggle-label'>
                <span></span>
            </label>
        </header>
    );
}

export default Menu;
