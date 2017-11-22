import React,{Component} from 'react';
import './index.css'

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e){
        e.preventDefault();
        let location = this.refs.location.value;
        if(location.length > 0){
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    }
    render() {
        return (
            <div className='formcontianer'> 
                 <form onSubmit={this.handleSubmit} >
                      <div class="form-group">
                        <input type="text" className='form-control mx-sm-2' ref="location"/>
                        <small id="searchhelp" className="form-text text-muted">Search the city you are looking for</small>
                      </div>
                     <button type="submit" class="btn btn-outline-primary btn-lg">Search</button>
                </form>
            </div> 
        );
    }
}

