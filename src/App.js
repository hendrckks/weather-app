import React, { useState } from 'react';
import axios from 'axios';
import './index.css';


function App() {

const [data, setData] = useState({});
const [location, setLocation] = useState("");

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1f6dd70d97a7f44edb3a64a6ccce0d9a`

const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then(response => setData(response.data)).catch(error =>console.log(error))
    console.log(setData)
    
    setLocation('')
  }
}
  return (
  <div className='app'>
    <div className="search">
      <input 
       value={location} 
       type= 'text'
       placeholder='search location'
       onChange={event => setLocation(event.target.value)}
       onKeyPress={searchLocation} />
    </div>
    <div className='conatiner'>
      <div className='top'>
        <div className='temp'>
          {data.main ? <h1>{data.main.temp.toFixed()}°F </h1> : null}
        </div>
        <div className='location'>
          <p>{data.name}</p>
        </div>
        <div className='description'>
          {data.weather ? <p>{data.weather[0].description}</p> : null}
        </div>
      </div>
    </div>
    <div className='bottom'>
        <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
          <p> Feels Like</p>
        </div>
        <div>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          <p> Humidity</p>
        </div>
        <div className='speed'>
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
          <p>Wind Speed</p>
        </div>
      </div>
  </div>
  );
}

export default App;
