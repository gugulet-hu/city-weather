import React from "react";
import Error from "./error-100x100.png";
import Weather from "./weather-100x100.png";
import Temperature from "./temperature-100x100.png";

function Forecast(props) {
     let weather = props.forecast;

     if (
          props.loaded === true &&
          props.error === false &&
          props.forecast !== undefined
     ) {
          return (
               <div id="forecast">
                    <div>
                         <h3>{props.city}</h3>
                    </div>
                    <div>
                         <img
                              src={Weather}
                              alt="Weather icon"
                              width="50px"
                              height="50px"
                         />
                    </div>
                    <div class="capitalise">
                         {JSON.stringify(weather[0].description).replace(
                              /['"]+/g,
                              ""
                         )}
                    </div>
                    <br />
                    <br />
                    <div>
                         <img
                              src={Temperature}
                              alt="Temperature icon"
                              width="50px"
                              height="50px"
                         />
                    </div>
                    <div>{JSON.stringify(props.temp.temp)} ℃</div>
               </div>
          );
     } else {
          return (
               <div id="forecast">
                    <img
                         src={Error}
                         alt="Error icon."
                         width="50px"
                         height="50px"
                    />
                    <p>Your city could not be found. Please try again.</p>
               </div>
          );
     }
}

export default Forecast;
