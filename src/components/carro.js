import um from "../assets/carro1.png"
export function Carro (){
    return(
        <section className={"carro"}>
            <div className={"col-sm-7 carroinfo"}>
            <h2 className={'titlecarro'}>Affordable cost of living</h2>
            <img src={um}/>
            <p className={"subcarro"}>According to the Cost of Living Index, Portugal's cost of living is 67% lower than that of the United States of America.</p>
            </div>
            <img className="carroimg d-none" src={um}/>
        </section>   
        )
}