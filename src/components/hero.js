import image from "../assets/hero.png"
export function Hero (){
    return(
        <section className={"hero"}>
            <img src={image}/>
            <h1 className={'title'}>WHY PORTUGAL?</h1>
            <h2 className={"sub"}>There are lots of benefits.</h2>
            <button className={"call"}>Learn More</button>
            <p>or</p>
            <h6><u>Find a Job</u></h6>

        </section>
            
        )
}