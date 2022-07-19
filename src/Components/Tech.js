import {useEffect, useState} from 'react';
import TechBadges from './TechBadges';
import {SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiBulma, SiMongodb, SiGit, SiReact, SiHeroku, SiApollographql, SiGraphql, SiMysql, SiBootstrap, SiGreensock, SiJquery, SiFlutter, SiSocketdotio, SiTypescript, SiTailwindcss} from "react-icons/si";

const Tech = () => {
    const [techs, setTechs] = useState([
        {name: "HTML5", src: "SiHtml5", category: "proficient", id: 1},
        {name: "CSS3", src: "SiCss3", category: "proficient", id: 2},
        {name: "JavaScript", src: "SiJavascript", category: "proficient", id: 3},
        {name: "Node.JS", src: "SiNodedotjs", category: "proficient", id: 4},
        {name: "Bulma", src: "SiBulma", category: "proficient", id: 5},
        {name: "MongoDB", src: "SiMongodb", category: "proficient", id: 6},
        {name: "Git", src: "SiGit", category: "proficient", id: 7},
        {name: "React", src: "SiReact", category: "proficient", id: 8},
        {name: "Heroku", src: "SiHeroku", category: "comfortable", id: 9},
        {name: "Apollo", src: "SiApollographql", category: "comfortable", id: 10},
        {name: "GraphQL", src: "SiGraphql", category: "comfortable", id: 11},
        {name: "MySQL", src: "SiMysql", category: "comfortable", id: 12},
        {name: "Bootstrap", src: "SiBootstrap", category: "comfortable", id: 13},
        {name: "GreenSock", src: "SiGreensock", category: "exploring", id: 14},
        {name: "Jquery", src: "SiJquery", category: "comfortable", id: 15},
        {name: "Flutter", src: "SiFlutter", category: "exploring", id: 16},
        {name: "Socket.io", src: "SiSocketdotio", category: "exploring", id: 17},
        {name: "TypeScript", src: "SiTypescript", category: "exploring", id: 18},
        {name: "Tailwind", src: "SiTailwindcss", category: "exploring", id: 19}
    ]);
    

    return (
        <div className="tech p-10  bg-yellow">
            <div className='max-w-[64rem] mx-auto px-10'>
                <div className="proficient ">
                    <h4>I am proficient in</h4>
                    <TechBadges techs={techs.filter(techs => techs.category === 'proficient')} />
                </div>
                <div className="comfortable ">
                    <h4>confident with</h4>
                    <TechBadges techs={techs.filter(techs => techs.category === 'comfortable')} /> 
                </div>
                <div className="exploring ">
                    <h4>and exploring next</h4>
                    <TechBadges techs={techs.filter(techs => techs.category === 'exploring')} /> 
                </div>
            </div>
        </div>
    );
}



export default Tech;