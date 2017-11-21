import React,{Component} from 'react';
import './index.css'

export default class WeatherMessage extends Component {
    render() {
        let {location, temp} = this.props
        return (
            <div className="message"> 
                <h3>It's {temp} in {location}</h3>
            </div> 
        );
    }
}

