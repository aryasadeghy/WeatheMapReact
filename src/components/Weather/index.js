import React,{Component} from 'react';
import './index.css'
import WeatherForm from './weatherForm'
import WeatherMessage from './weatherMessage'
import WeatherFetch from  '../../api/getWeatherMap';
import ErrorModal from '../Error/index'
import queryString from 'query-string';

export default class Weather extends Component {
    constructor(props){
        super(props)
        this.state =  {
            isLoading : false,
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    componentDidMount(){
         var parsed = queryString.parse(this.props.location.search);
         console.log(window.location)
         
        if (parsed.location && parsed.location.length > 0){
             this.handleSearch(parsed.location)
         }
     }
    handleSearch(location){
        this.setState({
            isLoading : true,
            location: undefined,
            temp :undefined,
            errorMessage : undefined    
        })
        WeatherFetch.getTemp(location).then((res)=>{
            this.setState({
                location : location,
                temp: res,
                isLoading: false
            })
            console.log(res)
        },(err)=>{
            this.setState({
                isLoading:false,
                errorMessage: err.message
            })
            console.log(err)
        })   
    }
    render() {
        let {isLoading, location, temp, errorMessage} = this.state
        let renderMessage = ()=>{
            if (isLoading){
                return (        
                <h3 className='message'> Fetching Data ... </h3>
            )  
            }else if(temp, location){
                return ( <WeatherMessage location={location} temp={temp}/>)                
            }
        }
        let renderModal=()=>{
            if(typeof errorMessage == 'string'){
                return    <ErrorModal message={errorMessage}/>
            }
        }
        return (
            <div className="container"> 
            <div className="col-centered"> 
                <h1 className="header">  Weather Form</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderModal()}
                </div>
          </div> 
        );
    }
}



  