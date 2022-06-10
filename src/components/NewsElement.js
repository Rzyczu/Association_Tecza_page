import React from 'react';
import '../styles/News.css';

class NewsElement extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount = () => {
        this.setState({
            reverse: this.props.xd
        })
    }

    render() {
        return (
            <div className={`News ${this.state.reverse ? "row-reverse" : "row"}`}            >
                <div className="News-photo pb-10"
                    style={this.state.reverse ? null : { marginRight: '3em' }}
                >
                    <img src={this.props.img} alt={this.props.alt}></img>
                </div>
                <div class="content"
                    style={this.state.reverse ? { marginRight: '3em' } : null}
                >
                    <h3 className="pb-20 display-2">{this.props.title}</h3>
                    <p>{this.props.content}</p>
                    <p className='News-date'>{this.props.date}</p>

                </div>
            </div >
        );
    }
}


export default NewsElement;
