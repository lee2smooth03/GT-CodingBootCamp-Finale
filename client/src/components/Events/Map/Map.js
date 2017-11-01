import React, { Component } from 'react';
import './Map.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";

// https://blog.gabriela.io/author/gab1davila/

class Map extends Component {
  /* mandatory */

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
      <div className="App">
        {/* <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} /> */}
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}

export default Map;