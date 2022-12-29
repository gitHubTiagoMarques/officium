import um from "../assets/carro1.png"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Carro extends Component {

    render(){
        return(

        <Carousel className={"text-white showArrows={true} onChange={onChange} onClickItem={onClickItem}"}>
            <div className={"carro"}>
            <div className={"col-sm-7 carroinfo"}>
            <h2 className={'titlecarro'}>Affordable cost of living</h2>
            <img className={"imgmobile"} src={um}/>
            <p className={"subcarro"}>According to the Cost of Living Index, Portugal's cost of living is 67% lower than that of the United States of America.</p>
            </div>
            <img className="carroimg d-none" src={um}/>
            </div>
        <div className={"carro"}>
            <div className={"col-sm-7 carroinfo"}>
            <h2 className={'titlecarro'}>Affordable cost of living</h2>
            <img className={"imgmobile"} src={um}/>
            <p className={"subcarro"}>According to the Cost of Living Index, Portugal's cost of living is 67% lower than that of the United States of America.</p>
            </div>
            <img className="carroimg d-none" src={um}/>
        </div>   
        <div className={"carro"}>
            <div className={"col-sm-7 carroinfo"}>
            <h2 className={'titlecarro'}>Affordable cost of living</h2>
            <img className={"imgmobile"} src={um}/>
            <p className={"subcarro"}>According to the Cost of Living Index, Portugal's cost of living is 67% lower than that of the United States of America.</p>
            </div>
            <img className="carroimg d-none" src={um}/>
            </div>
        </Carousel>
  
        )
    }
}

export {Carro}