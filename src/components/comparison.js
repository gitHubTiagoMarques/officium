import { useState } from 'react';
import index from '../assets/index.json'

const Index = index;


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
            </div>
        )
    }


export {Comparison}