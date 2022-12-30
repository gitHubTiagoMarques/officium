import '../App.css';
import React, { Component } from 'react';
import Navv from '../components/navbar.js'
import {Footer} from '../components/footer.js'
import { Search } from '../components/search';


function Finder() {
    return (
      <div className={"finder"}>
        <Navv></Navv>
        <Search></Search>
        <Footer></Footer>
      </div>
    );
  }
  
  export {Finder};