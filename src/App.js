import React from "react";
import "isomorphic-fetch";
import "./App.css";
import Header from "./Header";
import Forecast from "./Forecast";

class App extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               error: "",
               isLoaded: false,
               forecast: "",
               temperature: "",
               city: "",
          };
          this.getWeather = this.getWeather.bind(this);
     }

     getWeather(e) {
          e.preventDefault();
          let submitted = document.getElementById("city").value;

          fetch(
               "https://api.openweathermap.org/data/2.5/weather?q=" +
                    submitted +
                    "&appid=9e460b69fca16136929d4d85dd9d6afd&units=metric"
          )
               .then((res) => res.json())
               .then(
                    (result) => {
                         this.setState({
                              error: false,
                              isLoaded: true,
                              forecast: result.weather,
                              temperature: result.main,
                              city: result.name,
                         });
                    },
                    (error) => {
                         this.setState({
                              error: error,
                              isLoaded: false,
                         });
                    }
               );
     }

     render() {
          return (
               <>
                    <Header getWeather={this.getWeather} />
                    {this.state.isLoaded ? <Forecast
                         city={this.state.city}
                         error={this.state.error}
                         forecast={this.state.forecast}
                         temp={this.state.temperature}
                         loaded={this.state.isLoaded}
                    />:<div></div>}
               </>
          );
     }
}

export default App;
