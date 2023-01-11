import React, { Component } from 'react';
import { Compare } from './compare';
import { useState } from 'react';




   const  Comparison = () => {

        const [country, setCountry] = useState();
        const handleChange= (e) =>{
            setCountry(e);
        }
        console.log(country);
        return(
            <div className={"comparison snap"}>
                <h1>Compare the quality of life</h1>
                <h2>Between Portugal and other countries</h2>
                <h6>Based on the Quality of Life Index by Numbeo</h6>
<div className={"countries"}>
<input className={"portugal"} type={'text'} value='Portugal'></input>
<hr></hr>
<input className={"input"} type={'text'} placeholder='Country' id='country' name='country' onChange={e =>handleChange(e.target.value)}></input>
</div>
<hr/>
<Compare></Compare>
            </div>
        )
    }


export {Comparison}