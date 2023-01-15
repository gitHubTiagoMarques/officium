import React from "react";
import load from "../assets/load.gif";
import parse from 'html-react-parser';

import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

class Jobs extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    apilink = `https://api.itjobs.pt/job/search.json?api_key=068a3a7e07e385c33ea2b3f1f3e53d0a&q=${this.props.trabalho}&location=${this.props.cidadeid}`;
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch((this.apilink))
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.results,
                    DataisLoaded: true
                });
            })
    }
    render() {
        var { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div><br/><br/><br/>
            <img src={load}/> </div> ;

        try {
            return (
            items.map((item) => {
                const descricao = parse(item.body);

                return (<AccordionItem key={item.id} className={'trabalho'}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={'trabalhocima'}>
                            <div>
                                <div className={'jobtitle'}>{item.title}</div>
                                <div className={'empresa'}>{item.company.name}</div>
                            </div>
                            <div>{item.publishedAt}</div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={'trabalhobaixo'}>
                        {descricao}
                    </AccordionItemPanel>
                </AccordionItem>)
            })
            )

        } catch (error) {
            return (
                <div>No Results...</div>
            )
        }


    }
}

export {Jobs};