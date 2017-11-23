import Axios from 'axios';

const GET_WEATHERMAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=fcd3f754d0d43b27970044d180fec3db&units=metric'

export default  {
    getTemp(location) {
        const encoded = encodeURIComponent(location);
        const requesrUrl = `${GET_WEATHERMAP_URL}&q=${encoded}`;
       return  Axios.get(requesrUrl).then(res => {
        if(res.data.cod && res.data.message) {
            throw new Error(res.data.message)
          }else{
            return res.data.main.temp
          }
        }).catch(function (error) {
            throw new Error(error)
        });
        
    }
};