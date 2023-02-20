import React, { Component } from "react";
import parse from "html-react-parser";
import load from "../assets/load.gif";
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

class Jobs extends Component {
    apilink = `https://api.itjobs.pt/job/search.json?api_key=068a3a7e07e385c33ea2b3f1f3e53d0a&q=${this.props.trabalho}&location=${this.props.cidadeid}&page=`;

    state = {
        count: 1,
        items: [],
        total: 12,
        dataIsLoaded: false,
    };

    componentDidMount() {
        fetch(`${this.apilink}${this.state.count}`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.results,
                    total: json.total,
                    dataIsLoaded: true,
                });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            fetch(`${this.apilink}${this.state.count}`)
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        items: [...this.state.items, ...json.results],
                        dataIsLoaded: true,
                    });
                });
        }
    }

    handleShowMore = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        const { dataIsLoaded, items, total, count } = this.state;

        if (!dataIsLoaded) {
            return (
                <div>
                    <br />
                    <br />
                    <br />
                    <img alt="loading" src={load} />{" "}
                </div>
            );
        }

        const display = total / count < 12 ? "d-none" : "";

        try {
            return (
                <div>
                    {items.map((item) => {
                        const descricao = parse(item.body);
                        return (
                            <AccordionItem key={item.id} className="trabalho">
                                <AccordionItemHeading>
                                    <AccordionItemButton className="trabalhocima">
                                        <div>
                                            <div className="jobtitle">{item.title}</div>
                                            <div className="empresa">{item.company.name}</div>
                                        </div>
                                        <div>{item.publishedAt}</div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="trabalhobaixo">
                                    {descricao}
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    })}
                    <button
                        className={`call ${display}`}
                        onClick={this.handleShowMore}
                    >
                        Show More
                    </button>
                </div>
            );
        } catch (error) {
            return (
                <div
                    style={{
                        width: "90vw",
                        margin: "auto",
                        textAlign: "justify",
                        maxWidth: "50rem",
                        marginTop: "50px",
                    }}
                >
                    <div style={{ borderBottom: "solid 2px orange" }}>
                        <h5>No results found</h5>
                    </div>
                    <div>
                        <p>No results found. Please modify your search.</p>
                        <div>
                            <h6>Suggestions</h6>
                            <ul>
                                <li>Try more general keywords</li>
                                <li>Check your spelling</li>
                                <li>Avoid abbreviations</li>
                <li>Check our locations list</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export { Jobs };
