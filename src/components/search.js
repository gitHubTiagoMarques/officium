import '../App.css';
import React, { Component } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import cities from "../assets/cidades.json";


export function Search() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate({
            pathname: '/Results',
            search: createSearchParams({
                job: inputs.job,
                city: inputs.city
            }).toString()


        });

    }
    return (
      <div className={"search"}>
            <h1 className={'titlesearch'}>MAKE THE JUMP</h1>
            <h2 className={"subsearch"}>Find your next job in Portugal’s most beautiful places.</h2>
            <div style={{fontSize:'1rem'}}>*Both inputs are optional</div>
          <form  onSubmit={handleSubmit}>
              <div className={'inputs'}>
                  <input className={"iptsearch"} type="text" placeholder="Job Title"
                         type="text"
                         name="job"
                         value={inputs.job || ""}
                         onChange={handleChange}
                  />
                  <input  className={"iptsearch"} type="text" placeholder="City / Region"
                         type="text"
                         name="city"
                         value={inputs.city || ""}
                         onChange={handleChange}
                  />
              </div>

              <input className={"btnsearch"} type="submit" value={'Search'} />
          </form>
          <div className={'citylist'}>
            <p className={"citytitle"}>Cities: </p><div className={'flexlist'}>
                <ul className={'cities'}>
                <li>Açores</li>
                <li>Beja</li>
                <li>Bragança</li>
                <li>Castelo Branco</li>
                <li>Évora</li>
                <li>Faro</li>
                <li>Guarda</li>
                <li>Leiria</li>
                
                
                </ul>
                <ul className={'cities'}>
                <li>Madeira</li>
                <li>Portalegre</li>
                <li>Santarém</li>
                <li>Setúbal</li>
                <li>Viana do Castelo</li>
                <li>Vila Real</li>
                <li>Viseu</li>
                </ul>
                </div>
          </div>
      </div>
    );
  }

