import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbarmenu from './components/Navbar';
import Footer from './components/Footer';
import Villainsbackground from './components/Villainsbackground';




 
export default class App extends Component {
  render() {
    return (
    <div className="App">
      <Navbarmenu/>
      <Villainsbackground/>
      <Footer/>
    </div>
    
    )
  }
}
