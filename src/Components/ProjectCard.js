import IconLibrary from "./IconLibrary";
import AssassinationPic from "../Assets/Assassination.png"
import MERNBSPic from "../Assets/MERNBookSearch.png"
import FridgicianPic from "../Assets/Frigician-logos.jpeg"


const ProjectCard = (props) => {
    const proj = props.proj

    return ( 
        <div className="max-w-[64rem] my-8 group grid lg:hidden grid-col-1  gap-4 sm:gap-8 px-8 w-full xs:w-4/5 sm:w-2/3 ">
            {proj.map(({title, desc, techs, url, id}) =>{
                return(
                    <div key={id} className="bg-white-dark group  flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white w-full">
                        <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                            <img
                            src={title === "Assassination" ? AssassinationPic : (title === "MERN Book Search" ? MERNBSPic : FridgicianPic)}
                            alt={`${title} hompage`}
                            className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                            />
                        </div>
                        <div className="flex flex-1 flex-col space-y-2 p-4">
                            <h3 className="text-prof text-2xl xs:text-3xl sm:text-4xl font-Tech ">
                                <a href={url}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    { title }
                                </a>
                            </h3>
                            <p className="text-sm sm:text-md text-gray-500">{ desc }</p>
                            <div className="flex flex-1 flex-col justify-end">
                                <ul className="flex justify-center items-center">
                                    {techs.map(({name, id})=>{
                                        return(
                                            <li className="m-2 h-8" key={id}>
                                                <IconLibrary name={name} />
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p className="text-base font-medium text-gray-900">Select to view in repository</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectCard;