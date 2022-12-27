import image from "../assets/hero.png"
export function Hero (){
    return(
        <section className={"hero"}>
            <img src={image}/>
            <div className="all">
                <div className={"col-sm-3 why"}>
            <h1 className={'title'}>WHY PORTUGAL?</h1>
            <h2 className={"sub"}>There are lots of benefits.</h2>
            </div>
            <div className="calldiv">
            <button className={"call"}>Learn More</button>
            <p>or</p>
            <h6><u>Find a Job</u></h6>
            </div>
            </div>
            <img className="deskimg d-none" src={image}/>

            
 
            
            
        </section>
            
        )
}