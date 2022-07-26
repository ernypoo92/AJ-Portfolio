import { useState } from 'react';
import Project from "./Project"

const Projects = () => {
    
    const [proj] = useState([
        {title: "Assassination", 
        desc: ["Assassination is a web-based social deduction game for groups to play live without the need for physical boxes, boards, cards, or other game props. All the players need is a mobile device, and a code provided by the host.",
        "Players are assigned roles, objectives, and a room. Kings can move players between rooms, trying to kick out assassins while making sure their guards are in thier room."], 
        techs: ["Node.js", "Apollo", "React", "Socket.io", "GraphQL", "MongoDB", "Bulma"], 
        url: "",
        id: 1},
        {title: "MERN Book Search", 
        desc: ["MERN Book Search is Google Books API search engine and it helps users to search books they want to read. Users are also able to save books and keep a list of them.",], 
        techs: ["Node.js", "Apollo", "React", "GraphQL", "MongoDB", "Bootstrap"], 
        url: "https://github.com/ernypoo92/mern-book-search",
        id: 2},
        {title: "Fridgician- Magic from your Fridge", 
        desc: ["Fridgician helps your turn the food in your fridge into delicious meals. Type in what you have in your fridge and you will be given delicious recipies.",], 
        techs: ["HTML5", "CSS3", 'JavaScript', "REST api", "Bulma"], 
        url: "https://github.com/Darigay/Fridgician",
        id: 3},
    ]);
    
    return ( 
        <article className="projects p-10  bg-yellow group grid relative gap-4 sm:gap-8 justify-items-end odd:justify-items-start" >
            <Project proj={proj}/>
        </article>
    )
}
 
export default Projects;