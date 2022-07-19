import {useEffect, useState} from 'react';
import {SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiBulma, SiMongodb, SiGit, SiReact, SiHeroku, SiApollographql, SiGraphql, SiMysql, SiBootstrap, SiGreensock, SiJquery, SiFlutter, SiSocketdotio, SiTypescript, SiTailwindcss} from "react-icons/si";

const TechBadges = (props) => {
    const [open, setOpen] = useState(false)
    const techs = props.techs;
    
    return (
        <ul className="techbadges grid w-full grid-cols-4 gap-4 p-5">
            {techs.map(({name, src, category, id}) => {
                // console.log(src);
                
                return (
                <li className={`${category === "proficient" ? "bg-prof text-white-dark":""}${category === "comfortable" ? "bg-comf text-white-dark":""}${category === "exploring" ? "bg-expl text-white-dark":""} rounded-full p-2`} key={id}>
                    {/* <span>
                        {`<${src} />`}
                    </span> */}
                    <div className="">
                        <p className="" >{ name }</p>
                    </div>
                </li>
            )})}
        </ul>
    );
}
 
export default TechBadges;