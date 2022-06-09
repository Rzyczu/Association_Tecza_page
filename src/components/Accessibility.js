import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWheelchair,
    faEye,
    faMagnifyingGlassPlus,
    faMagnifyingGlassMinus,
    faCircleHalfStroke,
    faArrowRotateRight,
} from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import '../styles/Accessibility.css';

class Accessibility extends React.Component {
    constructor() {
        super();
        this.state = {};
    }


    handleClick = (operation) => {
        this.props.func(operation);

    }

    render() {
        return (
            <header className="Accessibility" >
                <input type="checkbox" id="toggle" className="toggle"></input>
                <div className='Accessibility-buttons'>
                    {/* <li onClick={fontSize('upper')}>Powiększ tekst</li>
                    <li onClick={fontSize('downer')}>Pomniejsz tekst</li>
                    <li onClick={contrast('on')}>Wyższy kontrast</li>
                    <li onClick={contrast('negative')}>negative</li>
                    <li onClick={resizeTo()}>Resetuj</li> */}
                    <button onClick={e => this.handleClick("upperFontSize")}>
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} /> Powiększ tekst
                    </button>
                    <button onClick={e => this.handleClick("downerFontSize")}>
                        <FontAwesomeIcon icon={faMagnifyingGlassMinus} /> Pomniejsz tekst
                    </button>
                    <button onClick={e => this.handleClick("higherContrast")}>
                        <FontAwesomeIcon icon={faCircleHalfStroke} /> Wyższy kontrast
                    </button>
                    <button onClick={e => this.handleClick("negative")}>
                        <FontAwesomeIcon icon={faEye} /> Negatyw
                    </button>
                    <button onClick={e => this.handleClick("restart")}>
                        <FontAwesomeIcon icon={faArrowRotateRight} /> Restart
                    </button>

                </div>

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
