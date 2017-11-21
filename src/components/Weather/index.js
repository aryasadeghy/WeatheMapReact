import React,{Component} from 'react';
import './index.css'

import WeatherForm from './weatherForm'
import WeatherMessage from './weatherMessage'
import WeatherFetch from  '../../api/getWeatherMap';
export default class Weather extends Component {
    constructor(props){
        super(props)
        this.state =  {
            isLoading : false
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch(location){
        this.setState({
            isLoading : true
        })
        WeatherFetch.getTemp(location).then((res)=>{
            this.setState({
                location : location,
                temp: res,
                isLoading: false

            })
        },(err)=>{
            alert(err)
        })
        
    }
    render() {
        let {isLoading, location, temp} = this.state
        let renderMessage = ()=>{
            if (isLoading){
                return ( 
                    
                <h3 className='message'> Fetching Data ... </h3>
            )
                
            }else if(temp, location){
                return ( <WeatherMessage location={location} temp={temp}/>)                
            }
        }
        return (
            <div className="container"> 
            <div className="col-centered"> 
                <h1 className="header">  Weather Form</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                </div>
          </div> 
        );
    }
}



