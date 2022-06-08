import React from 'react';
import Slider from './Slider';
import AboutUs from './AboutUs';
import Partners from './Partners';

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
