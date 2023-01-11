import '../App.css';
import React, { Component } from 'react';
import {Navv} from '../components/navbar.js'
import {Footer} from '../components/footer.js'
import {Searchteste} from '../components/searchteste.js'
import {Jobs} from "../components/jobsapi";


function Searchpage() {
    return (
        <div className={"searchteste"}>
            <Navv></Navv>
            <Jobs></Jobs>
            <Footer></Footer>
        </div>
    );

}

export {Searchpage};