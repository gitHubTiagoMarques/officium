import '../App.css';
import React, { Component } from 'react';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import {Jobs} from "./jobsapi";


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
        console.log(inputs);
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
          <form  className={'inputs'} onSubmit={handleSubmit}>
                  <input className={"iptsearch"} type="text" placeholder="Job Title"
                      type="text"
                      name="job"
                      value={inputs.job || ""}
                      onChange={handleChange}
                  />
                  <input className={"iptsearch"} type="text" placeholder="City / Region"
                      type="text"
                      name="city"
                      value={inputs.city || ""}
                      onChange={handleChange}
                  />
              <input className={"btnsearch"} type="submit" value={'Search'} />
          </form>
      </div>
    );
  }

