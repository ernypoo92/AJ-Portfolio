import {SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiBulma, SiMongodb, SiGit, SiReact, SiHeroku, SiApollographql, SiGraphql, SiMysql, SiBootstrap, SiGreensock, SiJquery, SiFlutter, SiSocketdotio, SiTypescript, SiTailwindcss} from "react-icons/si";

const TechBadges = (props) => {
    const techs = props.techs;
    console.log(techs);
    

    return (
        <ul className="techbadges">
            {techs.map(({name, src, id}) => (
                <li className="techbadge" key={id}>
                    <div>
                        <span>{src}</span>
                    </div>
                    <div>
                        <p>{ name }</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
 
export default TechBadges;