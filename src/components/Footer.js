import React from 'react'
import '../styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretRight,
    faEnvelope,
    faPhone,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookSquare,
    faYoutube,

} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <footer className="Footer">
                <div className='Footer-main'>
                    <h3>Stowarzyszenie Rodziców i Przyjaciół Osób z Zespołem Downa "Tęcza" w Krakowie</h3><br />
                    <p>KRS: 0000335176</p>
                    <p>Alior Bank: </p>
                    <p>49 2490 0005 0000 4530 2874 8739</p>
                    <p>Santander Bank (konto do darowizn): </p>
                    <p>02 1090 2590 0000 0001 2967 4508 </p>
                    <p>NIP: 6762154466</p>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Os. Wandy 23, 31-907 Kraków</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +48 503 131 288</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> biuro@stowarzyszenietecza.org</p>

                </div>
                <div className='Footer-about'>
                    <h3>O nas</h3>
                    <ul>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faCaretRight} /> Kim jesteśmy?
                        </a></li>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faCaretRight} /> Nasze działania
                        </a></li>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faCaretRight} /> Projekty
                        </a></li>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faCaretRight} /> Statut
                        </a></li>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faCaretRight} /> Zarząd Tęczy
                        </a></li>
                    </ul>
                </div>
                <div className='Footer-more'>
                    <h3>Więcej</h3>
                    <ul>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faCaretRight} /> Aktualności
                        </a></li>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faCaretRight} /> Galeria
                        </a></li>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faCaretRight} /> Jak pomóc?
                        </a></li>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faCaretRight} /> Wpłać darowiznę
                        </a></li>
                    </ul>
                </div>
                <div className='Footer-brands'>
                    <div>
                        <FontAwesomeIcon icon={faFacebookSquare} className="display-1 clr-2" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faYoutube} className="display-1 clr-7" />
                    </div>

                </div>
            </footer >
        );
    }
}


export default Footer;
