import '../App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export function Search() {
    return (
      <div className={"search"}>
            <h1 className={'titlesearch'}>MAKE THE JUMP</h1>
            <h2 className={"subsearch"}>Find your next job in Portugal’s most beautiful places.</h2>
            <div className={"inputs"}>
            <input className={"iptsearch"} type="text" placeholder="Job Title"></input>
            <span></span>
            <input className={"iptsearch"} type="text" placeholder="City / Region"></input>
            </div>
            
            <Link to={"/results"}><button className={"btnsearch"}>Search</button></Link>
      </div>
    );
  }
  