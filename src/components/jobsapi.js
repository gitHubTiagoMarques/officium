import React from "react";
import arrow from "../assets/arrow.svg";

class Jobs extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    apilink = `https://api.itjobs.pt/job/search.json?api_key=068a3a7e07e385c33ea2b3f1f3e53d0a&q=${this.props.trabalho}&location=1`;
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch((this.apilink))
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
                items.map((item) => (
                    <div className={'resultado'}>
                        <div className={'jobempresa'}>
                            <p className={'jobtitle'}>{item.title}</p>
                            <p className= {'empresa'}>{item.company.name}</p>
                        </div>

                        <p className={'cidade'}>{item.types[0].name}</p>
                        <img src={arrow} className={'arrow'}/>

                    </div>
                ))

        );
    }
}

export {Jobs};