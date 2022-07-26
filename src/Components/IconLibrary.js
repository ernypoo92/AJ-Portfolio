import {SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiBulma, SiMongodb, SiGit, SiReact, SiHeroku, SiApollographql, SiGraphql, SiMysql, SiBootstrap, SiGreensock, SiJquery, SiFlutter, SiSocketdotio, SiTypescript, SiTailwindcss} from "react-icons/si";
import {AiFillApi} from "react-icons/ai";

export default function IconLibrary (props) {
    const name = props.name

        const getIcon = () => {
        switch (name) {
        case 'HTML5':
            return <SiHtml5 />;
        case 'CSS3':
            return <SiCss3 />;
        case 'JavaScript':
            return <SiJavascript />;
        case 'Node.JS':
            return <SiNodedotjs />;
        case 'Bulma':
            return <SiBulma />;
        case 'MongoDB':
            return <SiMongodb />;
        case 'Git':
            return <SiGit />;
        case 'React':
            return <SiReact />;
        case 'Heroku':
            return <SiHeroku />;
        case 'Apollo':
            return <SiApollographql />;
        case 'GraphQL':
            return <SiGraphql />;
        case 'MySQL':
            return <SiMysql />;
        case 'Bootstrap':
            return <SiBootstrap />;
        case 'GreenSock':
            return <SiGreensock />;
        case 'Jquery':
            return <SiJquery />;
        case 'Flutter':
            return <SiFlutter />;
        case 'Socket.io':
            return <SiSocketdotio />;
        case 'TypeScript':
            return <SiTypescript />;
        case 'Tailwind':
            return <SiTailwindcss />;
        case 'REST api':
            return <AiFillApi />;
        default:
            break;
        }
    };
    
    return getIcon();
}


