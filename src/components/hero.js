import { Link } from "react-router-dom";
import image from "../assets/back.png";
export function Hero() {
  return (
    <section className={"hero snap"}>
      <div className="all">
        <div className={"col-sm-3 why"}>
          <h1 className={"title"}>Work in TECH?</h1>
          <h2 className={"sub"}>PORTUGAL.</h2>
        </div>
        <div className="calldiv">
          <Link to={"/comparison"}>
            <button className={"call"}>FIND OUT WHY</button>
          </Link>
          <p>or</p>
          <Link to={"/Finder"} className="text-black">
            <h6>
              <u>Find a Job</u>
            </h6>
          </Link>
        </div>
      </div>
      <img alt={'technology'} className="deskimg" src={image} />
    </section>
  );
}
