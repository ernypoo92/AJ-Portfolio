import {useEffect, useState} from 'react';
import TechBadges from './TechBadges';
import {SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiBulma, SiMongodb, SiGit, SiReact, SiHeroku, SiApollographql, SiGraphql, SiMysql, SiBootstrap, SiGreensock, SiJquery, SiFlutter, SiSocketdotio, SiTypescript, SiTailwindcss} from "react-icons/si";

const Tech = () => {
    const [techs, setTechs] = useState(false);
    
    useEffect(() =>{
        fetch('http://localhost:8000/techs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setTechs(data)
            })
    }, [])

    return (
        <div className="tech p-10 bg-yellow">
            <div className="proficient">
                <h4>I am proficient in</h4>
                {techs && <TechBadges techs={techs.filter(techs => techs.category === 'proficient')} />}
            </div>
            <div className="comfortable">
                <h4>confident with</h4>
                {techs && <TechBadges techs={techs.filter(techs => techs.category === 'comfortable')} /> }
            </div>
            <div className="exploring">
                <h4>and exploring next</h4>
                {techs && <TechBadges techs={techs.filter(techs => techs.category === 'exploring')} /> }
            </div>
        </div>
    );
}



export default Tech;