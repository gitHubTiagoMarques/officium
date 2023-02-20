import "../App.css";
import React, {useEffect, useState} from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export function Search({ data }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [filterSearch, setFilterSearch] = useState([])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFilter = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    const newFilter = data.filter(value => {
      return value.name.toLowerCase().includes(inputs.city.toLowerCase())
    })

    setFilterSearch(newFilter)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/Results",
      search: createSearchParams({
        job: inputs.job,
        city: inputs.city,
      }).toString(),
    });
  };

  useEffect(() => {

    if (inputs.city === "") {
      setFilterSearch([])
    }

  }, [inputs.city])

  function handleClickAutoComplete(value) {
    setInputs({...inputs, city: value.name})
    setFilterSearch([])
  }
  return (
    <div className={"search"}>
      <h1 className={"titlesearch"}>MAKE THE JUMP</h1>
      <h2 className={"subsearch"}>
        Find your next job in Portugal’s most beautiful places.
      </h2>
      <div style={{ fontSize: "1rem" }}>*Both inputs are optional</div>
      <form onSubmit={handleSubmit}>
        <div className={"inputs"}>
          <input
            className={"iptsearch"}
            placeholder="Job Title"
            type="text"
            name="job"
            value={inputs.job || ""}
            onChange={handleChange}
          />
          <div>
            <input
                autocomplete="off"
                className={"iptsearch"}
                placeholder="Location"
                type="text"
                name="city"
                value={inputs.city || ""}
                onChange={handleFilter}
            />
            {filterSearch.length !== 0 &&
            <div className='dataResult'>
              {filterSearch.slice(0, 15).map(value => (
                  <div key={value.id} className='dataItem' onClick={() => handleClickAutoComplete(value)}>
                    <p>{value.name}</p>
                  </div>
              ))}
            </div>
            }
          </div>
        </div>

        <input className={"btnsearch"} type="submit" value={"Search"} />
      </form>
      <div className={"citylist"}>
        <p className={"citytitle"}>Locations: </p>
        <div className={"flexlist"}>
          <ul className={"cities"}>
            <li>Açores</li>
            <li>Beja</li>
            <li>Bragança</li>
            <li>Castelo Branco</li>
            <li>Évora</li>
            <li>Faro</li>
            <li>Guarda</li>
            <li>Leiria</li>
          </ul>
          <ul className={"cities"}>
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
