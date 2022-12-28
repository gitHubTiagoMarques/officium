import image from "../assets/nowadays.png"
export function Nowadays (){
    return (
        <section className={'row nowadays'}>
            <div className={'col-sm-12 col-md-6'}>
                <h1 className={'titlecarro'}>Nowadays... It’s different</h1>
                <p className={'subnowadays'}>It used to be that living in the cities was the best option for people looking for new job opportunities or to pursue a career in any new market, like tech.</p>
                <p className={'subnowadays'}>But nowadays, it's different. Several factors made it that there are a lot of advantages to seeking a career path in Portugal's rural places.</p>
            </div>
            <div className={'col-sm-12 col-md-4'}>
                <img className={'um'} src={image}/>
            </div>
        </section>
    )
}