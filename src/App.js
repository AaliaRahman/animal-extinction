import React, { Component } from 'react';
import './App.css';
//import './database.js';


class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       timePeriod: 'present'
     };
    this.handleClick = this.handleClick.bind(this);
   }

   handleClick(timePeriodWePassedInFromTheFunction){
  //  handleClick = () => {
    this.setState({
      timePeriod: timePeriodWePassedInFromTheFunction})
      //We want the timePeriod to be the timePeriod/link that is clicked.
    };

  render() {
    console.log("timeperiod is " + this.state.timePeriod )
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
  const wrhino = {
  name: "Wooly Rhino",
  src: "./images/WoolyRhino.png",
  status: "Currently Extinct"
}
  const elephantRemains = {
    name: "Elephant Remains",
    src: "./images/Elephant_skull.png",
    status: "Extinct",
    population: "At the current rate of poaching, conservationists estimate that elephants will go extinct by 2020."
  }
  const rhinoRemains = {
    name: "Rhino Remains",
    src: "./images/rhinoRemains.png",
    status: "Extinct",
    population: "At the current rate of poaching, conservationists estimate that rhinos will go extinct by 2026."
  }

  const animals = ['elephant', 'tiger', 'orangutan', 'rhino'];
  //const event = document.getElementsByClassName("Past");
  let timePeriod = null;
//  if(this.state.timePeriod ? 'show' : 'hide') {
  if(this.state.timePeriod === 'present'){
    timePeriod = (
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

      </div>)

  } else if (this.state.timePeriod === "Past") {
    timePeriod = (
    <div>
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
    <img src={wrhino.src}  className="Srhino"/>
    <div className="RhinoInfo">
    <h2>{wrhino.name}</h2>
    <p>{wrhino.status}</p>
    <p>{wrhino.population}</p>
    </div>
    </div>

    </div>)
  } else {
    timePeriod = (
      <div className="Future">
      <img src="./images/Future_background.jpg" />

      <div>
      <img src={elephantRemains.src}  className="Selephant"/>
      <div className="ElephantInfo">
      <h2>{elephantRemains.name}</h2>
      <p>{elephantRemains.status}</p>
      <p>{elephantRemains.population}</p>
      </div>
      </div>

      <div>
      <img src={rhinoRemains.src}  className="Srhino"/>
      <div className="RhinoInfo">
      <h2>{rhinoRemains.name}</h2>
      <p>{rhinoRemains.status}</p>
      <p>{rhinoRemains.population}</p>
      </div>
      </div>

      </div>
    )
  }

    return (
      <div className="container">
      <h1>The History and Future of Animal Extinction</h1>
      {timePeriod}


        <nav>
        <ul className="row">

        <li className="col-md-2 col-md-offset-1 Past" onClick={ function() {this.handleClick("Past")}.bind(this) }><a href="#">Past</a></li>

        <li className="col-md-2"><a href="#"><i className="glyphicon glyphicon-minus-sign">•</i></a></li>

        <li className="col-md-2 present" onClick={function() {this.handleClick('present')}.bind(this)}><a href="#">Present</a></li>

        <li className="col-md-2"><a href="#">•</a></li>

        <li className="col-md-2" onClick={function() {this.handleClick('Future')}.bind(this)}><a href="#">Future</a></li>
        </ul>
        </nav>

        <footer>All information was retrieved from World Wildlife Fund. View their website for more information.</footer>

        </div>
    );
  };
}


export default App;
