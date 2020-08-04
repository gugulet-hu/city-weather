import React from "react";
import Forecast from "../Forecast";
import renderer from "react-test-renderer";

it("renders correctly", () => {
     const tree = renderer
          .create(
               <Forecast
                    city={this.state.city}
                    error={this.state.error}
                    forecast={this.state.forecast}
                    temp={this.state.temperature}
                    loaded={this.state.isLoaded}
               />
          )
          .toJSON();
     expect(tree).toMatchSnapshot();
});
