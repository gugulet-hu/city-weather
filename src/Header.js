import React from "react";
import Logo from "./city-weather-header-100x100.png";

function Header(props) {
     return (
          <>
               <div id="heading">
                    <img src={Logo} alt="App logo." />
                    <h1>
                         <span class="bold">City</span>
                         <span class="light">Weather</span>
                    </h1>
               </div>
               <div id="form">
                    <form>
                         <label>Enter a city name</label>
                         <br />
                         <br />
                         <input type="text" id="city" onChange={props.getWeather}></input>
                         <br />
                         <br />
                    </form>
               </div>
          </>
     );
}

export default Header;
