import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWheelchair,
    faA,
    faPlus,
    faMinus
} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import '../styles/Accessibility.css';

class Accessibility extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <header className="Accessibility">
                <input type="checkbox" id="toggle" className="toggle"></input>
                <nav className='Accessibility-nav'>
                    <ul>
                        {/* <li onClick={fontSize('upper')}>Powiększ tekst</li>
                    <li onClick={fontSize('downer')}>Pomniejsz tekst</li>
                    <li onClick={contrast('on')}>Wyższy kontrast</li>
                    <li onClick={contrast('negative')}>negative</li>
                    <li onClick={resizeTo()}>Resetuj</li> */}
                        <li>
                            <FontAwesomeIcon icon={faA} />
                            <FontAwesomeIcon icon={faPlus} />
                            Powiększ tekst
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faA} />
                            <FontAwesomeIcon icon={faMinus} />
                            Pomniejsz tekst
                        </li>
                    </ul>

                </nav>

                <label htmlFor="toggle" className='toggle-label'>
                    <span>
                        <FontAwesomeIcon icon={faWheelchair} />
                    </span>
                </label>
            </header>
        );
    }
}

export default Accessibility;
