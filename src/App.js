import logo from './logo.svg';
import './App.css';
import WeatherServices from './services/weatherServices';
import { Component } from 'react';

const App = () => {
    //weatherServices = new WeatherServices();

    //gggggggggggg = () => {
    //    this.weatherServices.getWeather()
    //        .then(item => item)
    //        .then(item => console.log(item))
    //}

    fetch('http://api.openweathermap.org/data/2.5/forecast?id=703448&appid=d1fca4765e13eb8b49b9950a969ed7ec')
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => console.log(data))


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            {

            }
        </div>
    )
}



export default App;
