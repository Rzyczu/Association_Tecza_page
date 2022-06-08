import React from 'react';
import '../styles/Slider.css';

class SliderElement extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="News">
                <img src={this.props.img} alt={this.props.alt} className="News-photo pb-10"></img>
                <h3 className="pb-20 display-3">{this.props.title}</h3>
                <p>{this.props.content}...</p>
                <a href={this.props.data} className='Read-more'>Czytaj dalej...</a>
            </div>
        );
    }
}


export default SliderElement;
