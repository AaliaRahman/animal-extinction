import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    const elephant = {
      name:"Sumatran Elephant",
      src: "./images/SumatranElephant.png",
      population: "2,400-2,800",
      status: "Critically Endangered"
    }
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
  const mammoth = {
    name: "Wooly Mammoth",
    src: "./images/Mammoth.png",
    status: "Currently Extinct"
}
const wrhino ={
  name: "Wooly Rhino",
  src: "./images/WoolyRhino.png",
  status: "Currently Extinct"
}

  const animals = ['elephant', 'tiger', 'orangutan', 'rhino'];


    return (
      <div className="container">

      <h1>The History and Future of Animal Extinction</h1>

      <div className="present">
      <img src="./images/SumatranForest.jpg" />

        <div>
        <img src={elephant.src} className="Selephant"/>
        <div className="ElephantInfo">
        <h2>{elephant.name}</h2>
        <p>{elephant.status}</p>
        <p>{elephant.population}</p>
        </div>
        </div>

        <div>
        <img src={rhino.src}  className="Srhino"/>
        <div className="RhinoInfo">
        <h2>{rhino.name}</h2>
        <p>{rhino.status}</p>
        <p>{rhino.population}</p>
        </div>
        </div>

        </div>

        <div className="Past">
        <img src="./images/IceAge.jpg" />

        <div>
        <img src={mammoth.src}  className="Selephant"/>
        <div className="ElephantInfo">
        <h2>{mammoth.name}</h2>
        <p>{mammoth.status}</p>
        <p>{mammoth.population}</p>
        </div>
        </div>

        <div>
        <img src={mammoth.src}  className="Selephant"/>
        <div className="ElephantInfo">
        <h2>{mammoth.name}</h2>
        <p>{mammoth.status}</p>
        <p>{mammoth.population}</p>
        </div>
        </div>

        </div>

        <nav>
        <ul className="row">
        <li className="col-md-2 col-md-offset-1" onClick={this.handleClick}><a href="#">Past</a></li>
        <li className="col-md-2"><a href="#"><i className="glyphicon glyphicon-minus-sign">•</i></a></li>
        <li className="col-md-2"><a href="#">Present</a></li>
        <li className="col-md-2"><a href="#">•</a></li>
        <li className="col-md-2"><a href="#">Future</a></li>
        </ul>
        </nav>

        <footer>All information was retrieved from World Wildlife Fund. View their website for more information.</footer>

        </div>
    );
  };
};



export default App;
