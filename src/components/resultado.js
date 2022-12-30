import '../App.css';
import React, { Component } from 'react';
import arrow from '../assets/arrow.svg'



export function Resultado() {
    const teste=[1,2,3,4];
    let results=[];

    teste.forEach(element => {
            results.push(
            <div className={'resultado'}>
                <div className={'jobempresa'}>
                <p className={'jobtitle'}>React Developer</p>
                <p className= {'empresa'}>Miniclip</p>
                </div>
                
                <p className={'cidade'}>Alquerubim</p>
                <img src={arrow} className={'arrow'}/>
                
            </div>
            );
    });
    return (
        
      <div className={"resultados"}>
        <p className={"rescounter"}>{results.length} Resultados</p>
         {results}
      </div>
    );
  }