import React, { Component } from 'react';
import './App.css';
import data from './database.js';


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

  let timePeriod = null;
  if(this.state.timePeriod === 'present'){
    timePeriod = (
      <div className="present">
        <img src="./images/SumatranForest.jpg" />

        <div className="elephant">
          <img src={data[0].src} className="wholeAnimal"/>
          <div className="animalInfo">
            <h4>{data[0].name}</h4>
            <p>{data[0].status}</p>
            <p>{data[0].population}</p>
          </div>
        </div>


          <div className="sTiger">
            <img src={data[2].src} className="wholeAnimal"/>
            <div className="animalInfo">
              <h4>{data[2].name}</h4>
              <p>{data[2].status}</p>
              <p>{data[2].population}</p>
            </div>
          </div>

          <div className="animal_frontRight">
            <img src={data[1].src} className="wholeAnimal"/>
            <div className="animalInfo">
              <h4>{data[1].name}</h4>
              <p>{data[1].status}</p>
              <p>{data[1].population}</p>
            </div>
          </div>

      </div>)

  } else if (this.state.timePeriod === "Past") {
    timePeriod = (
    <div>
    <img src="./images/IceAge.jpg" />

    <div className="animal_frontLeft">
      <img src={data[4].src} className="wholeAnimal"/>
      <div className="animalInfo">
        <h4>{data[4].name}</h4>
        <p>{data[4].status}</p>
        <p>{data[4].population}</p>
      </div>
    </div>

    <div className="animal_frontRight">
      <img src={data[5].src} className="wholeAnimal"/>
      <div className="animalInfo">
        <h4>{data[5].name}</h4>
        <p>{data[5].status}</p>
        <p>{data[5].population}</p>
      </div>
    </div>

    <div className="animal_backR">
      <img src={data[6].src} className="wholeAnimal"/>
      <div className="animalInfo">
        <h4>{data[6].name}</h4>
        <p>{data[6].status}</p>
        <p>{data[6].population}</p>
      </div>
    </div>

    </div>)
  } else {
    timePeriod = (
      <div className="Future">
      <img src="./images/Future_background.jpg" />

      <div className="animal_backL">
        <img src={data[7].src} className="wholeAnimal"/>
        <div className="animalInfo">
          <h4>{data[7].name}</h4>
          <p>{data[7].status}</p>
          <p>{data[7].population}</p>
        </div>
      </div>

      <div className="animal_backR">
        <img src={data[8].src} className="wholeAnimal"/>
        <div className="animalInfo">
          <h4>{data[8].name}</h4>
          <p>{data[8].status}</p>
          <p>{data[8].population}</p>
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

        <li className="col-md-2"><a href="#"><img src="./images/Minus.png"/></a></li>

        <li className="col-md-2 present" onClick={function() {this.handleClick('present')}.bind(this)}><a href="#">Present</a></li>

        <li className="col-md-2"><a href="#"><img src="./images/Plus.png"/></a></li>

        <li className="col-md-2" onClick={function() {this.handleClick('Future')}.bind(this)}><a href="#">Future</a></li>
        </ul>
        </nav>

        <footer>
        <p>All information was retrieved from <a href="https://www.worldwildlife.org">World Wildlife Fund</a>. View their website for more information.
        </p>
        </footer>

        </div>
    );
  };
}


export default App;
