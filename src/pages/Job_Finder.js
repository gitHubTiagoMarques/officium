import '../App.css';
import React, { Component } from 'react';
import {Navv} from '../components/navbar.js'
import {Footer} from '../components/footer.js'
import { Search } from '../components/search';
import { Cities } from '../components/cities';


function Finder() {
    return (
      <div className={"finder"}>
        <Navv></Navv>
          <div className={'resultss'}>
              <Search></Search>
              <Cities></Cities>
          </div>
        <Footer></Footer>
        
      </div>
    );
  }
  
  export {Finder};