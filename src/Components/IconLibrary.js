import {SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiBulma, SiMongodb, SiGit, SiReact, SiHeroku, SiApollographql, SiGraphql, SiMysql, SiBootstrap, SiGreensock, SiJquery, SiFlutter, SiSocketdotio, SiTypescript, SiTailwindcss} from "react-icons/si";
import {AiFillApi} from "react-icons/ai";

export default function IconLibrary (props) {
    const name = props.name

        const getIcon = () => {
        switch (name) {
        case 'HTML5':
            return <SiHtml5 size={'100%'}/>;
        case 'CSS3':
            return <SiCss3 size={'100%'}/>;
        case 'JavaScript':
            return <SiJavascript size={'100%'}/>;
        case 'Node.JS':
            return <SiNodedotjs size={'100%'}/>;
        case 'Bulma':
            return <SiBulma size={'100%'}/>;
        case 'MongoDB':
            return <SiMongodb size={'100%'}/>;
        case 'Git':
            return <SiGit size={'100%'}/>;
        case 'React':
            return <SiReact size={'100%'}/>;
        case 'Heroku':
            return <SiHeroku size={'100%'}/>;
        case 'Apollo':
            return <SiApollographql size={'100%'}/>;
        case 'GraphQL':
            return <SiGraphql size={'100%'}/>;
        case 'MySQL':
            return <SiMysql size={'100%'}/>;
        case 'Bootstrap':
            return <SiBootstrap size={'100%'}/>;
        case 'GreenSock':
            return <SiGreensock size={'100%'}/>;
        case 'Jquery':
            return <SiJquery size={'100%'}/>;
        case 'Flutter':
            return <SiFlutter size={'100%'}/>;
        case 'Socket.io':
            return <SiSocketdotio size={'100%'}/>;
        case 'TypeScript':
            return <SiTypescript size={'100%'}/>;
        case 'Tailwind':
            return <SiTailwindcss size={'100%'}/>;
        case 'REST api':
            return <AiFillApi size={'100%'}/>;
        default:
            break;
        }
    };
    
    return getIcon();
}


