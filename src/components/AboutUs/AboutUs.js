import React from 'react';
import '../../styles/AboutUs.css';

class AboutUs extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <section className="Section">
                <h2 className='Section-title display-1'>O nas</h2>
                <div className='AboutUs'>
                    <img className="AboutUs-img" src="https://picsum.photos/id/1/756/531" alt="opis zdjecia"></img>
                    <div className='content'>
                        <p>Witamy na stronie <b>Stowarzyszenia Rodziców i Przyjaciół Osób z Zespołem Downa "Tęcza"</b> w Krakowie!</p>
                        <p> Od ponad 20 lat zmieniamy świat naszych podopiecznych na lepsze:</p>
                        <ul>
                            <li>organizujemy zajęcia dodatkowe dopasowane do ich zainteresowań i pasji;</li>
                            <li>tworzymy przestrzeń do spotkań dla rodzin;</li>
                            <li>organizujemy wyjazdy i imprezy;</li>
                            <li>walczymy o lepszą edukację, rehabilitację, możliwość podjęcia pracy i samodzielne, dobre życie!</li>
                        </ul>
                        <p> Swoim własnym przykładem pokazujemy, że dodatkowy chromosom to nie koniec świata! :)</p>
                        <a href="/#" className='btn'>Nasza historia</a>
                    </div>
                </div>




            </section >
        );
    }
}

export default AboutUs;
