import '../App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow_black.svg'



export function Make() {
    return (
      <div className={"make"}>
        <Link to={"/Finder"}><img className={'back'} src={arrow}/></Link>
            <h1 className={'titlesearch'}>MAKE THE JUMP</h1>
            <p>The search might produce different results in different languages.</p>
            <h6>Recommended language: Portuguese</h6>
            <div className={"makers"}>
            <input className={"iptmake"} type="text" value="Job Title"></input>
            <span></span>
            <input className={"iptmake"} type="text" value="City / Region"></input>
            </div>
      </div>
    );
  }
  
