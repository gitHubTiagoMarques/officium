import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import dados from '../assets/dados.json';

function Searchteste(){
    var bruh;
    fetch('https://api.itjobs.pt/job/search.json?api_key=068a3a7e07e385c33ea2b3f1f3e53d0a&q=java', { method: 'GET' })
        .then(data => data.json()) // Parsing the data into a JavaScript object
        .then(json => console.log((JSON.stringify(json))))

    // note: the id field is mandatory
    const items = dados
    console.log(items)

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    return (

        <div className="App">
            <header className="App-header">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
            </header>
        </div>
    )
}


export {Searchteste}