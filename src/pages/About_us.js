import '../App.css';
import React, { Component } from 'react';
import {Navv} from '../components/navbar.js'
import {Footer} from '../components/footer.js'
import {About} from '../components/about.js'


function About_us() {
    return (
        <div className={"finder"}>
            <Navv></Navv>
            <About></About>
            <Footer></Footer>
        </div>
    );
}

export {About_us};