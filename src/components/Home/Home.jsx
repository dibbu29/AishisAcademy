

export default function Home() {
    return (
        <div>
            <section id="Home">
                <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
                    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-5 md:pr-10">
                        <div className="text-left">
                            <h2
                                className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-5xl">
                                Aishi's
                                <span className="font-bold text-secondary"> Academy</span>
                                <p className="text-xl font-semibold rounded-full text-gray-500">(It's time to learn English)</p>
                            </h2>
                            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Welcome to Aishi's Spoken English Academy! Its intensive two-month course is precisely intended to improve your English language skills in all areas, including speaking, listening, reading, and writing. Furthermore, it is jam-packed with basic to intermediate grammatical themes and on-demand fluency drills from day one. Whether you are a beginner or an advanced learner, this course will meet your goals and help you attain a higher level of English proficiency.</p>
                            <div className="mt-5 sm:flex md:mt-8">

                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <div className="text-base text-xl py-3 px-6 font-bold select-none rounded-lg bg-black text-white hover:text-black hover:bg-primary hover:rounded-lg hover:px-4 hover:py-2 cursor-pointer relative transition-all duration-300">
          Blog
        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" relative flex w-100 flex-col rounded-xl bg-base bg-clip-border text-white shadow-md">
                        <div className="p-6">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Join Us Now!
                            </h5>
                            <p className="block font-sans text-white font-light leading-relaxed text-inherit antialiased">
                                Basic to Advance Grammar, 50+ Worksheets,
                                Free study materials, Offline & Online classes and
                                Seperate batch for kids and adults
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="select-none rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md hover:text-white shadow-gray-500/20 transition-all  hover:text-primary  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  hover:text-black hover:bg-primary hover:rounded-lg hover:px-4 hover:py-2 cursor-pointer relative transition-all duration-300"
                                type="button"
                                data-ripple-light="true"
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>

        
    )
}