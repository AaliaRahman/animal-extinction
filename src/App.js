import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const elephant = {
      name:"Sumatran Elephant",
      imageUrl: "https://www.ecosia.org/images?q=sumatran+elephant"
    };
    const tiger = {
      name: "Sumatran Tiger"
    }
    const orangutan = {
      name: "Sumatran Orangutan"
    }
    const rhino = {
      name: "Sumatran Rhino"
  }

  //const animals = ['elephant', 'tiger', 'orangutan', 'rhino'];

    return (
      <div>

        {elephant.name}
        <br />
        {tiger.name}
        <br />
        {orangutan.name}
        <br />
        {rhino.name}

        <img src="https://www.ecosia.org/images?q=sumatran+forest" />

      </div>

    );
  }
}



export default App;
