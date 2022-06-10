import React from 'react';
import '../styles/News.css';
import NewsElement from './NewsElement'
class AboutUs extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <section className="Section">
                <h2 className='Section-title display-1'>Aktualności</h2>
                <div className='NewsSection'>
                    <NewsElement xd={1} title="Dzień Taty" img="https://picsum.photos/id/2/360/240" alt="Opis zdjecie 1" content="Chcemy się pochwalić, że kolejni dobrzy ludzie sprawili ogromne uśmiechy na buziach naszych podopiecznych ❤ ❤ ❤ Zawsze żywo reagujemy na takiego rodzaju wsparcie 🙂 Firma FarmaProm podarowała nam cudowne koce, które zostały wręczone każdemu z Uczestników wyjazdu- umilają im chwile relaksu po wszystkich atrakcjach i sprawiają, że wspólnie spędzony czas pod chmurką jest o wiele wiele wygodniejszy 😃 Serdecznie podziękowanie firmie za przekazane koce ❤" date="01.01.2020" />
                    <NewsElement xd={0} title="tytul 1" img="https://picsum.photos/id/2/360/240" alt="Opis zdjecie 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." date="01.01.2020" />

                </div>




            </section >
        );
    }
}

export default AboutUs;
