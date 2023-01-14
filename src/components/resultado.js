import '../App.css';
import React, { Component } from 'react';
import arrow from '../assets/arrow.svg'
import {Link, useSearchParams} from "react-router-dom";
import {Jobs} from "./jobsapi";


export function Resultado() {
    const [searchparams] = useSearchParams();
    console.log(searchparams.get('job'));
    return (
        <div>
        <div className={"make"}>
            <Link to={"/Finder"}><img className={'back'} src={arrow}/></Link>
            <h1 className={'titlesearch'}>MAKE THE JUMP</h1>
            <p>The search might produce different results in different languages.</p>
            <h6>Recommended language: Portuguese</h6>
            <div className={"makers"}>
                <input className={"iptmake"} type="text" value={searchparams.get('job')}></input>
                <span></span>
                <input className={"iptmake"} type="text" value={searchparams.get('city')}></input>
            </div>
        </div>
            <div className={'resultss'}>
        <Jobs trabalho={searchparams.get('job')}></Jobs>
            </div>
        </div>
    );
  }