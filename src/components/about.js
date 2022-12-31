import tiago from '../assets/tiago.jfif';
import cerqueira from '../assets/cerqueira.jpeg';

export function About() {
    return (
        <section className={'about'}>

            <div>
                <h1><strong>ABOUT US</strong></h1>
                <p className={'subabout my-5'}>Officium is a website developed by two University students that aims to bring young workforce to Portugal, mainly to rural areas, focusing on the technology area. Despite the vast area that Portugal has at its disposal, it has a very unbalanced demographic organisation. Although there are working conditions in rural areas, the population is concentrated in urban areas. The purpose of the website is to give a new opportunity to the rural areas of the country and to show their potential as a work place.</p>
            </div>
            <div className={'row gits'}>
                <div className={'col-md-6 col-sm-12'}>
                    <img className={'city'} src={cerqueira}/>
                    <p>github.com/cerkeira</p>
                </div>
                <div className={'col-md-6 col-sm-12'}>
                    <img className={'city'} src={tiago}/>
                    <p>github.com/gitHubTiagoMarques</p>
                </div>
            </div>

        </section>
    );
}