
import {MdNavigateNext} from "react-icons/md"

const Project = (props) => {
    const proj = props.proj
    

    return ( 
        <div>
            {proj.map(({title, desc, techs, url, id}) =>{
                return(
                    <div className="" key={id}>
                        <div className="p-5">
                            {id===1 ? <h2>What I'm Currently Working On</h2>:""}
                            <h3>{ title }</h3>
                            <p>{ desc }</p>
                            <button className="">
                                <a href={url}>
                                    View Repository <MdNavigateNext/>
                                </a>
                            </button>
                            <span>{techs}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Project;