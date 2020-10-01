import React, { Component } from "react";
import { Content } from ".";

const Cities = [
  { name: "San Francisco", woeid: "2487956" },
  { name: "San Diego", woeid: "2487889" },
  { name: "San Jose", woeid: "2488042" },
  { name: "San Antonio", woeid: "2487796" },
  { name: "Santa Cruz", woeid: "2488853" },
  { name: "Santiago", woeid: "349859" },
  { name: "Santorini", woeid: "56558361" },
  { name: "Santander", woeid: "773964" },
  { name: "Busan", woeid: "1132447" },
  { name: "Santa Cruz de Tenerife", woeid: "773692" },
];

export class Container extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {Cities.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
            className="btn"
          >
            {place.name}
          </button>
        ))}
        <Content key={activePlace} woeid={Cities[activePlace].woeid} />
      </div>
    );
  }
}
