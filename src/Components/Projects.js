import { useState } from 'react';
import Project from "./Project"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    
    const [proj] = useState([
        {title: "Assassination", 
        desc: ["Assassination is a web-based social deduction game for groups to play live without the need for physical boxes, boards, cards, or other game props. All the players need is a mobile device, and a code provided by the host.", 
        " Players are assigned roles, objectives, and a room. Kings can move players between rooms, trying to kick out assassins while making sure their guards are in thier room."], 
        techs: [{name:"Node.JS", id: 1}, {name: "Apollo", id: 2 }, {name: "React", id: 3 }, {name: "Socket.io", id: 4 }, {name: "GraphQL", id: 5 }, {name: "MongoDB", id: 6 }, {name: "Bulma", id: 7 }], 
        url: "",
        id: 1},
        {title: "MERN Book Search", 
        desc: ["MERN Book Search is Google Books API search engine built using a MERN Stack and it helps users to search books they want to read. Users are also able to save books and keep a list of them.",], 
        techs: [ {name:"Node.JS", id: 1 }, {name: "Apollo", id: 2 }, {name: "React", id: 3 }, {name: "GraphQL", id:4 }, {name: "MongoDB", id: 5}, {name: "Bootstrap", id: 6 }], 
        url: "https://github.com/ernypoo92/mern-book-search",
        id: 2},
        {title: "Frigician- Magic From Your Fridge", 
        desc: ["Frigician helps you magically turn the food in your fridge into delicious meals. Type in what you have in your fridge and Frigician will use a REST api to return delicious recipies.",], 
        techs: [ {name: "HTML5", id: 1 }, {name: "CSS3", id: 2 }, {name: 'JavaScript', id: 3 }, {name: "REST api", id: 4 }, {name: "Bulma", id: 5 }], 
        url: "https://github.com/Darigay/Fridgician",
        id: 3},
    ]);
    
    return ( 
        <article className="projects bg-yellow flex justify-center" >
            <Project proj={proj} />
            <ProjectCard proj={proj} />
        </article>
    )
}
 
export default Projects;