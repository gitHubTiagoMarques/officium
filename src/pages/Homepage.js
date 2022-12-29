import '../App.css';
import React, { Component } from 'react';
import Navv from '../components/navbar.js'
import {Footer} from '../components/footer.js'
import {Hero} from '../components/hero.js'
import { Carro } from '../components/carro';
import {Nowadays} from "../components/nowadays";
import { Comparison } from '../components/comparison.js';

function Homepage() {
    return (
      <div className="homepage">
        <Navv></Navv>
        <Hero></Hero>
        <Carro></Carro>
        <Comparison></Comparison>
        <Nowadays></Nowadays>
        <Footer></Footer>
      </div>
    );
  }
  
  export {Homepage};