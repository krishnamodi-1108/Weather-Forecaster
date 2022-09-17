import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [location, setLocation] = useState('');
  const [locData, setLocData] = useState({});
  // const [loading, setLoading] = useState();

  const updateLocData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=5ee3ed53b40248718f165656210208&q=${location}`
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setLocData(data);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col heading">Weather Forecaster</div>
        </div>
        <div className="row">
          <div className="col-12 form">
            {/* <h1>Hello World!</h1> */}
            <input
              type="text"
              value={location}
              placeholder = "Enter City Name..."
              onChange={e => {
                setLocation(e.target.value);
              }}
            />
            <button className="btn btn-dark" onClick={updateLocData}>
              Search
            </button>
            {/* {location} */}
          </div>
          <div className="offset-md-4 col-12 col-md-4 portrait">
            <div className="card ">
              {locData.location ? (
                <div>
                  <img src={locData.current.condition.icon} alt="" />
                  <div className="temp">{locData.current.temp_c}°</div>
                  <div className="desc">{locData.current.condition.text}</div>
                  <div className="loc">{locData.location.name}</div>
                  <div className="container">
                    <div className="row w-h-p">
                      <div className="col">
                        <div className="title">Wind now</div>
                        <div className="data">
                          {locData.current.wind_kph}
                          <span className="unit">KM</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {locData.current.humidity}
                          <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Precipitation</div>
                        <div className="data">
                          {locData.current.precip_mm}
                          <span className="unit">mm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // <h2>Location not Found</h2>
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
