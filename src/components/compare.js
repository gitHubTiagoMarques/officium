import React, { Component } from 'react';
import index from '../assets/index.json'
import { Comparison } from './comparison.js';

const Index = index;

    const Compare = () => {
        return(
<div className={"compare"}>
                    <div className={"two"}>
                    <div className={"one"}>
                    <p>teste</p>
                    <div className={'ryze'}>
                        <p className={'legend'}>Quality of life index</p>
                    <hr></hr>
                    </div>
                    <p>teste</p>
                    </div>
                    <div className={"one"}>
                    <p>100</p>
                    <div className={'ryze'}>
                        <p className={'legend'}>Quality of life index</p>
                    <hr></hr>
                    </div>
                    <p>100</p>
                    </div>
                    </div>
                    <div className={"two"}>
                    <div className={"one"}>
                    <p>111</p>
                    <div className={'ryze'}>
                        <p className={'legend'}>Quality of life index</p>
                    <hr></hr>
                    </div>
                    <p>111</p>
                    </div>
                    <div className={"one"}>
                    <p>fá</p>
                    <div className={'ryze'}>
                        <p className={'legend'}>Quality of life index</p>
                    <hr></hr>
                    </div>
                    <p>sol</p>
                    </div>
                    </div>
                    <div className={"two"}>
                    <div className={"one"}>
                    <p>111</p>
                    <div className={'ryze'}>
                        <p className={'legend'}>Quality of life index</p>
                    <hr></hr>
                    </div>
                    <p>111</p>
                    </div>
                    <div className={"one"}>
                    <p>fá</p>
                    <div className={'ryze'}>
                        <p className={'legend'}>Quality of life index</p>
                    <hr></hr>
                    </div>
                    <p>sol</p>
                    </div>
                    </div>
                </div>
        )
        
    }


export {Compare}