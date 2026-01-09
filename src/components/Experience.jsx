import { React } from "react";
import { experiences } from "../data/data";
import { div } from "framer-motion/client";

const Experience = () => {
    return (
        <section id="experience" className="scroll-mt-24 py-20 px-6 bg-gradient-to-r from-orange-700 to-orange-500">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-200">Mes <span className="text-outline">Expériences</span></h2>
                <p className="text-gray-100 text-center mb-12">
                    Voici un aperçu de mon parcours professionnel et des expériences qui ont façonné mes compétences en développement web et mobile.
                </p>
                <div className="relative w-full mx-w-5xl mx-auto px-4 py-12">
                    <div className="absolute left-1/2 md:left-1/2 top-0 bottom-0 w-1 md:flex hidden bg-orange-800 transform -translate-x-1/2"></div>
                    <div className="space-y-16 ">
                        {/* Experience Item 1 */}
                        {
                            experiences.map((exp, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                    <div key={index} className={`relative flex items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                                        <div className="absolute left-1/2 md:flex hidden transform -translate-1/2 z-10">
                                            <div className="h-10 w-10 rounded-full shadow-lg flex justify-center items-center bg-orange-700">
                                                <span className="text-2xl text-orange-100">{exp.logo}</span>
                                            </div>
                                        </div>
                                        <div className={`w-full md:w-[45%] p-6 rounded-xl shadow-lg border border-orange-900 bg-orange-700/50 hover:scale-105 transition-transform duration-300 ${isLeft ? 'md:text-right md:mr-12' : 'md:ml-12'} text-left`}>
                                            <h3 className="text-xl font-semibold text-gray-100">{exp.company}</h3>
                                            <p className="text-sm text-gray-200 mb-3">{exp.period}</p>
                                            <p className="text-sm text-gray-100 text-justify mb-4">{exp.description}</p>
                                            <div className="flex flex-wrap gap-2 md:justify-end justify-start">
                                                {
                                                    exp.skills.map((skil, i) => (
                                                        <span key={i} className="px-3 py-1 bg-gray-300 rounded-md text-sm font-light">{skil}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )    
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experience;
