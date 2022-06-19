import React from 'react';
import Slider from './AboutUs/Slider';
import AboutUs from './AboutUs/AboutUs';
import Partners from './AboutUs/Partners';

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
            </div>
        );
    }
}


export default HomePage;
