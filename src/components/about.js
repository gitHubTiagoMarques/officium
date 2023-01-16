import tiago from "../assets/tiago.jfif";
import cerqueira from "../assets/cerqueira.jpeg";

export function About() {
  return (
    <section className={"about pt-4"}>
      <div>
        <h1>
          <strong>ABOUT US</strong>
        </h1>
        <p className={"subabout mt-5 mb-4"}>
          Officium is a website developed by two University students that aims
          to bring young workforce to Portugal, mainly to rural areas, focusing
          on the technology area. Despite the vast area that Portugal has at its
          disposal, it has a very unbalanced demographic organisation. Although
          there are working conditions in rural areas, the population is
          concentrated in urban areas. The purpose of the website is to give a
          new opportunity to the rural areas of the country and to show their
          potential as a work place.
        </p>
      </div>
      <div>
        <p style={{ color: "orange" }}>
          <strong>Check out our GitHub profiles below ▼ </strong>
        </p>
      </div>
      <div className={"row gits mt-4"}>
        <div className={"col-md-6 col-sm-12"}>
          <a target={"_blank"} href={"https://github.com/cerkeira"}>
            <img className={"city"} alt={'gatinho'} src={cerqueira} />
          </a>
        </div>
        <div className={"col-md-6 col-sm-12"}>
          <a target={"_blank"} href={"https://github.com/gitHubTiagoMarques"}>
            <img className={"city"} alt={'gatão'} src={tiago} />
          </a>
        </div>
      </div>
    </section>
  );
}
