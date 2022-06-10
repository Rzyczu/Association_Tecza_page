import React from 'react';
import Slider from './Slider';
import AboutUs from './AboutUs';
import Partners from './Partners';
import News from './News';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <Slider />
                <AboutUs />
                <Partners />
                <News />

            </div>
        );
    }
}


export default HomePage;
