import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Carro extends Component {
  render() {
    return (
      <Carousel
        autoPlay
        interval={4500}
        infiniteLoop
        className={
          "text-white snap showArrows={true} onChange={onChange} onClickItem={onClickItem} "
        }
      >
        <div className={"carroinfo carro1"}>
          <h2 className={"titlecarro"}>Cost of living</h2>
          <p className={"subcarro"}>
            According to the Cost of Living Index, Portugal's cost of living is
            67% lower than that of the United States of America. This difference
            is even bigger when looking at the Cost of Living plus rent Index.
          </p>
        </div>
        <div className={"carroinfo carro2"}>
          <h2 className={"titlecarro"}>Diversity</h2>
          <p className={"subcarro"}>
            More than two-thirds of Portugal's labor force works in services,
            while most of the other third works in the industry. These numbers
            contribute to a diverse workforce.
          </p>
        </div>
        <div className={"carroinfo carro3"}>
          <h2 className={"titlecarro"}>Exporting</h2>
          <p className={"subcarro"}>
            Portugal's top exports are Cars, Motor Vehicles parts and
            accessories, and Refined Petroleum. Also, Portugal is the world's
            biggest exporter of Cork.
          </p>
        </div>
        <div className={"carroinfo carro4"}>
          <h2 className={"titlecarro"}>Earnings</h2>
          <p className={"subcarro"}>
            From 1996 until now, the average monthly earnings in Portugal have
            more than doubled. Also, the average monthly earnings are almost
            double the minimum salary.
          </p>
        </div>
      </Carousel>
    );
  }
}

export { Carro };
