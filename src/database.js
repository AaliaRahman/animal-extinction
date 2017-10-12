import React, { Component } from 'react';
import './App.css';
//import './App.js';


export class Database extends Component {


render(){

  function Animals (name,src,population, status){
    this.name = name;
    this.src = src;
    this.population = population;
    this.status = status;
  }

  const animalsData = [{
    name:"Sumatran Elephant",
    src: "./images/SumatranElephant.png",
    population: "2,400-2,800",
    status: "Critically Endangered"
  },{
    name: "Sumatran Tiger",
    population: "400-500",
    status: "Critically Endangered"
  },{
    name: "Sumatran Orangutan",
    population: "14,613",
    status: "Critically Endangered"
  },{
    name: "Sumatran Rhino",
    src: "./images/SumatranRhino.png",
    population: "<100",
    status: "Critically Endangered"
  },{
    name: "Wooly Mammoth",
    src: "./images/Mammoth.png",
    status: "Currently Extinct"
  },{
    name: "Wooly Rhino",
    src: "./images/WoolyRhino.png",
    status: "Currently Extinct"
  },{
      name: "Elephant Remains",
      src: "./images/Elephant_skull.png",
      status: "Extinct",
      population: "At the current rate of poaching, conservationists estimate that elephants will go extinct by 2020."
    },{
      name: "Rhino Remains",
      src: "./images/rhinoRemains.png",
      status: "Extinct",
      population: "At the current rate of poaching, conservationists estimate that rhinos will go extinct by 2026."
    }]

return (
<div>
</div>
);
  };
}
