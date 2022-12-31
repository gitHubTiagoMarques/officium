import '../App.css';
import React, { Component } from 'react';
import {Navv} from '../components/navbar.js'
import {Footer} from '../components/footer.js'
import {Make} from '../components/makethejump'
import { Resultado } from '../components/resultado';


function Results() {
    return (
      <div className={"finder"}>
        <Navv></Navv>
          <div className={'resultss'}>
              <Make></Make>
              <Resultado></Resultado>
          </div>
        <Footer></Footer>
        
      </div>
    );
  }
  
  export {Results};