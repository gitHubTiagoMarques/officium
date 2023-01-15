import {Link} from "react-router-dom";
export function Nowadays (){
    return (
        <section className={'row nowadays snap'}>
            <div className={'col-12 text-center'}>
                <h1 className={'titlecarro text-center nowadaystitle'}>Nowadays... It’s different</h1>
                <p className={'subnowadays text-center'}>It used to be that living in the cities was the best option for people looking for new job opportunities or to pursue a career in any new market, like tech.</p>
                <p className={'subnowadays text-center mb-0 mb-sm-5'}>But nowadays, it's different. Several factors made it that there are a lot of advantages to seeking a career path in Portugal's rural places.</p>
            </div>
            <div className={'col-12 d-none d-md-block text-center'}>
            </div>
            <div className={'jobfind col-12 text-center'}>
                <h1 className={'titlecarro'}>Here's a tool to help you find a job in these beautiful places.</h1>
                <Link to={'/Finder'}><button className={"call"}>Job Finder</button></Link>
            </div>
        </section>
    )
}
