
import {MdNavigateNext} from "react-icons/md"
import IconLibrary from "./IconLibrary";
import AssassinationPic from "../Assets/Assassination.png"
import MERNBSPic from "../Assets/MERNBookSearch.png"
import FridgicianPic from "../Assets/Frigician-logos.jpeg"



const Project = (props) => {
    const proj = props.proj
    console.log(proj);

    return ( 
        <div className="max-w-[64rem] my-8 group grid relative gap-4 sm:gap-8 ">
            {proj.map(({title, desc, techs, url, id}) =>{
                return(
                    <div className="flex items-center even:flex-row-reverse " key={id}>
                        <div className="bg-white-dark p-0 w-2/3 z-10 text-left drop-shadow-lg rounded-lg">
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
                        <div className={`w-2/5 z-0 ${id===2 ? "-mr-14":"-ml-14"} rounded-md drop-shadow-lg`} >
                            <img 
                            src= {title === "Assassination" ? AssassinationPic : (title === "MERN Book Search" ? MERNBSPic : FridgicianPic)}
                            alt={`Image of ${title} hompage`}
                            className='object-contain' 
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Project;