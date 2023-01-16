import React from "react";
import load from "../assets/load.gif";
import parse from "html-react-parser";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

class Jobs extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      count:1,
      items: [],
      total:12,
      DataisLoaded: false,
    };
  }


    apilink = `https://api.itjobs.pt/job/search.json?api_key=068a3a7e07e385c33ea2b3f1f3e53d0a&q=${this.props.trabalho}&location=${this.props.cidadeid}&page=`;

  componentDidMount() {
    fetch((this.apilink + this.state.count))
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.results,
          total: json.total,
          DataisLoaded: true,
        });
      });
  }
    componentDidUpdate(prevProps,prevState) {
      console.log(prevState.count)
        console.log(this.state.count)
      if(prevState.count !== this.state.count){
          fetch((this.apilink + this.state.count))
              .then((res) => res.json())
              .then((json) => {
                      this.setState({
                          items: [...this.state.items,...json.results],
                          DataisLoaded: true,
                      });

              });
      }

    }

  render() {
      var display;
    var { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <br />
          <br />
          <br />
          <img alt={'loading'} src={load} />{" "}
        </div>
      );

    try {
        if ((this.state.total / this.state.count) < 12){
            display = 'd-none';
        }else {
            display = '';
        }
        return(
        <div>
            {items.map((item) => {
                const descricao = parse(item.body);
                return (
                    <AccordionItem key={item.id} className={"trabalho"}>
                        <AccordionItemHeading>
                            <AccordionItemButton className={"trabalhocima"}>
                                <div>
                                    <div className={"jobtitle"}>{item.title}</div>
                                    <div className={"empresa"}>{item.company.name}</div>
                                </div>
                                <div>{item.publishedAt}</div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className={"trabalhobaixo"}>
                            {descricao}
                        </AccordionItemPanel>
                    </AccordionItem>
                );
            })}
            {
                <button className={`call ${display}`} onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Show More
                </button>
            }
        </div>
    )
    }catch (error) {
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
