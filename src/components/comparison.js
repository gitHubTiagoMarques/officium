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
<div className={"countries"}>
<input className={"portugal"} type={'text'} value='Portugal'></input>
<hr></hr>
<input className={"input"} type={'text'} placeholder='Country'></input>
</div>
<hr/>

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
                    <p>alquerubim</p>
                    <div className={'ryze'}>
                        <p className={'legend'}>Quality of life index</p>
                    <hr></hr>
                    </div>
                    <p>ponte de lima</p>
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
                    <p>alquerubim</p>
                    <div className={'ryze'}>
                        <p className={'legend'}>Quality of life index</p>
                    <hr></hr>
                    </div>
                    <p>ponte de lima</p>
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
                <hr/>

            </div>

        )

    }
}

export {Comparison}