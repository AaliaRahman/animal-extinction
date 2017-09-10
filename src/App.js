import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    const elephant = {
      name:"Sumatran Elephant",
      src: "./images/elephant-sample.png",
      population: "2,400-2,800",
      status: "Critically Endangered"
    };
    const tiger = {
      name: "Sumatran Tiger",
      population: "400-500",
      status: "Critically Endangered"
    }
    const orangutan = {
      name: "Sumatran Orangutan",
      population: "14,613",
      status: "Critically Endangered"
    }
    const rhino = {
      name: "Sumatran Rhino",
      src: "./images/SumatranRhino.png",
      population: "<100",
      status: "Critically Endangered"
  }

  const animals = ['elephant', 'tiger', 'orangutan', 'rhino'];

    return (
      <div className="container">

      <h1>The History and Future of Animal Extinction</h1>
      <img src="./images/SumatranForest.jpg" />

        <div className="elephant">
        <img src={elephant.src} />
        </div>


        <img src={rhino.src}  className="Srhino"/>

        <div className="RhinoInformation">
        </div>

        <nav>
        <ul>
        <li><a href="#">Past</a></li>
        <li></li>
        <li><a href="#">Present</a></li>
        <li></li>
        <li><a href="#">Future</a></li>
        </ul>
        </nav>


      </div>

    );
  }
}



export default App;
