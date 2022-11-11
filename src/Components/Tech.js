import { useState } from 'react';
import TechBadges from './TechBadges';

const Tech = () => {
    
    const [techs] = useState([
        {name: "HTML5", category: "proficient", id: 1},
        {name: "CSS3",  category: "proficient", id: 2},
        {name: "JavaScript", category: "proficient", id: 3},
        {name: "Node.JS", category: "proficient", id: 4},
        {name: "Bulma", category: "proficient", id: 5},
        {name: "MongoDB", category: "proficient", id: 6},
        {name: "Git", category: "proficient", id: 7},
        {name: "React", category: "proficient", id: 8},
        {name: "Heroku", category: "comfortable", id: 9},
        {name: "Apollo", category: "comfortable", id: 10},
        {name: "GraphQL", category: "comfortable", id: 11},
        {name: "MySQL", category: "comfortable", id: 12},
        {name: "Bootstrap", category: "comfortable", id: 13},
        {name: "Socket.io", category: "exploring", id: 17},
        {name: "Tailwind", category: "exploring", id: 19},
        {name: "Jquery", category: "comfortable", id: 15},
        {name: "TypeScript", category: "exploring", id: 16},
        {name: "Flutter", category: "exploring", id: 14},
    ]);
    

    return (
        <div className="tech p-10  bg-yellow">
            <div className='max-w-[64rem] mx-auto sm:px-10'>
                <div className="proficient ">
                    <h4 className='font-semibold'>I am proficient in</h4>
                    <TechBadges techs={techs.filter(techs => techs.category === 'proficient')} />
                </div>
                <div className="comfortable ">
                    <h4 className='font-semibold'>confident with</h4>
                    <TechBadges techs={techs.filter(techs => techs.category === 'comfortable')} /> 
                </div>
                <div className="exploring ">
                    <h4 className='font-semibold'>and exploring next</h4>
                    <TechBadges techs={techs.filter(techs => techs.category === 'exploring')} /> 
                </div>
            </div>
        </div>
    );
}



export default Tech;