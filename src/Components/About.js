const About = () => {
    return ( 
        <section id="about" className="w-full relative px-6 sm:px-16 transition-colors duration-300 bg-grey-light dark:bg-black-blue">
            <div className="max-w-[64rem] mx-auto py-12 sm:py-16 flex justify-center fade-in-init animate-fade-in">
                <div className="flex flex-col gap-4 md:w-4/5 lg:w-3/5 text-dark-grey text-left">
                    <div className="flex flex-col">
                        <h3 className="font-Tech font-light text-3xl">About</h3>
                        <h2 className="font-bold tracking-wider text-4xl antialiased">I am a bright-eyed full stack developer</h2>
                    </div>
                    <p className="text-lg">I am a math teacher transitioning to the world of web design. I am a passionate problem-solver who thrives off of a team environment. I am a believer that a group is more than the sum of their parts and I am excited to see what we can create together.</p>
                </div>
            </div>
        </section>
    );
}
 
export default About;