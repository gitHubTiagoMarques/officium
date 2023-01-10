import '../App.css';
import React, { Component } from 'react';
import {Navv} from '../components/navbar.js'
import {Footer} from '../components/footer.js'
import { Comparison } from '../components/comparison.js';

function Countries() {
    return (
        <div className={"about_us"}>
            <Navv></Navv>
            <Comparison></Comparison>
            <Footer></Footer>
        </div>
    );
}

export {Countries};