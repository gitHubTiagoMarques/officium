import React from "react";

class Jobs extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
            "https://api.itjobs.pt/job/search.json?api_key=068a3a7e07e385c33ea2b3f1f3e53d0a&q=java")
            .then((res) => res.json())
            .then((json) => {
                console.log(json.results)
                this.setState({
                    items: json.results,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Loading... </h1> </div> ;

        return (
            <div className = "App">
                <h1> Fetch data from an api in react </h1>  {
                items.map((item) => (
                    <ol style={{color:'white'}}>{ item.company.name }
                    </ol>
                ))
            }
            </div>
        );
    }
}

export {Jobs};