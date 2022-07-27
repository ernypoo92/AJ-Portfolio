
import {MdNavigateNext} from "react-icons/md"
import IconLibrary from "./IconLibrary";

const Project = (props) => {
    const proj = props.proj
    

    return ( 
        <div className="max-w-[64rem] group grid relative gap-4 sm:gap-8 even:justify-items-end odd:justify-items-start">
            {proj.map(({title, desc, techs, url, id}) =>{
                return(
                    <div className="flex items-center" key={id}>
                        <div className="bg-white-dark p-0 w-2/3 text-left drop-shadow-lg rounded-lg">
                            {id===1 ? <h3 className="font-Tech text-prof text-3xl px-5 pt-5">What I'm Currently Working On</h3>:""}
                            <h2 className={`${id===1 ? "":"pt-6"} font-bold tracking-wider text-4xl antialiased mb-3 px-5`}>{ title }</h2>
                            <p className="text-lg px-5">{ desc }</p>
                            <div className="flex justify-between items-center mt-3 bg-grey-light px-5 pb-4 pt-2 rounded-lg">
                                <button className="bg-expl text-white-dark p-2 rounded-full">
                                    <a className="flex justify-center items-center text-lg font-bold px-4" href={url}>
                                        View Repository <MdNavigateNext/>
                                    </a>
                                </button>
                                <ul className="flex justify-center items-center">
                                    {techs.map(({name, id})=>{
                                        return(
                                            <li className="m-2 h-8" key={id}>
                                                <IconLibrary name={name} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="w-2/5 h-[400px] bg-prof">
                            <img src="" alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Project;