import { useState } from 'react';
import IconLibrary from './IconLibrary';

const TechBadges = (props) => {
    const techs = props.techs;
    
    return (
        <ul className="techbadges grid w-full grid-cols-4 gap-4 p-5">
            {techs.map(({name, category, id}) => {
                
                return (
                <li className={`${category === "proficient" ? "bg-prof text-white-dark":""}${category === "comfortable" ? "bg-comf text-white-dark":""}${category === "exploring" ? "bg-expl ":""} flex justify-center items-center rounded-full p-2 drop-shadow-lg`} key={id}>
                    <div className='px-2 h-7'>
                        <IconLibrary name={name}/>
                    </div>
                    <div>
                        <p>{ name }</p>
                    </div>
                </li>
            )})}
        </ul>
    );
}
 
export default TechBadges;