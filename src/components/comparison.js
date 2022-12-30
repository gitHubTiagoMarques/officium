import React, { Component } from 'react';
import index from '../assets/index.json'
const Index = index;

class Comparison extends Component{
    render(){
        return(
            <div className={"comparison snap"}>
                <span   id="comparison"></span>
                <h1>Compare the quality of life</h1>
                <h2>Between Portugal and other countries</h2>
                <h6>Based on the Quality of Life Index by Numbeo</h6>
                <div className={"compare"}>

                </div>
            </div>

        )

    }
}

export {Comparison}