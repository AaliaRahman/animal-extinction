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
        <div className="absolute">
      <div className="closed">
        <img src="./images/SumatranForest.jpg"/>

        <div className="elephant">
          <img src={data[0].src} className="wholeAnimal"/>
          <div className="animalInfo">
            <h4>{data[0].name}</h4>
            <p>{data[0].status}<br />{data[0].population}</p>
          </div>
        </div>

        <div className="sTiger">
          <img src={data[2].src} className="wholeAnimal"/>
          <div className="animalInfo">
            <h4>{data[2].name}</h4>
            <p>{data[2].status}<br />{data[2].population}</p>
          </div>
        </div>

          <div className="srhino">
            <img src={data[1].src} className="wholeAnimal"/>
            <div className="animalInfo">
              <h4>{data[1].name}</h4>
              <p>{data[1].status}<br />{data[1].population}</p>
            </div>
          </div>

          <div className="sorganutan">
            <img src={data[3].src} className="wholeAnimal"/>
            <div className="animalInfo">
              <h4>{data[3].name}</h4>
              <p>{data[3].status}<br />{data[3].population}</p>
            </div>
          </div>

      </div>
    </div>)

  } else if (this.state.timePeriod === "Past") {
    timePeriod = (
    <div className="absolute" >
    <div className="closed" >
    <img src="./images/IceAge.jpg"/>

    <div className="wmammoth">
      <img src={data[4].src} className="wholeAnimal"/>
      <div className="animalInfo">
        <h4>{data[4].name}</h4>
        <p>{data[4].status}</p>
      </div>
    </div>

    <div className="wrhino">
      <img src={data[5].src} className="wholeAnimal"/>
      <div className="animalInfo">
        <h4>{data[5].name}</h4>
        <p>{data[5].status}</p>
      </div>
    </div>

    <div className="animal_backR">
      <img src={data[6].src} className="wholeAnimal"/>
      <div className="animalInfo">
        <h4>{data[6].name}</h4>
        <p>{data[6].status}</p>
      </div>
    </div>

    <div className="animal_backL">
      <img src={data[7].src} className="wholeAnimal"/>
      <div className="animalInfo">
        <h4>{data[7].name}</h4>
        <p>{data[7].status}</p>
      </div>
    </div>

    </div>
  </div>)
  } else {
    timePeriod = (
      <div className="absolute">
      <div className="closed" >
      <img src="./images/Future_background.jpg"/>

      <div className="animal_backL">
        <img src={data[8].src} className="wholeAnimal"/>
        <div className="animalInfo">
          <h4>{data[8].name}</h4>
          <p>{data[8].status}<br />{data[8].population}</p>
        </div>
      </div>

      <div className="animal_backR">
        <img src={data[9].src} className="wholeAnimal"/>
        <div className="animalInfo">
          <h4>{data[9].name}</h4>
          <p>{data[9].status}<br />{data[9].population}</p>
        </div>
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

        <li className="col-md-2 col-md-offset-1 Past" id="slide" onClick={ function() {this.handleClick("Past")}.bind(this) }><a href="#">Past</a></li>

        <li className="col-md-2"><a href="#"><img src="./images/Minus.png"/></a></li>

        <li className="col-md-2 present" id="slide" onClick={function() {this.handleClick('present')}.bind(this)}><a href="#">Present</a></li>

        <li className="col-md-2"><a href="#"><img src="./images/Plus.png"/></a></li>

        <li className="col-md-2" id="slide" onClick={function() {this.handleClick('Future')}.bind(this)}><a href="#">Future</a></li>
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
