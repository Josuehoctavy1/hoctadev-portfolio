import { React } from "react";
import {portfolioItems} from "../data/data";


const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-200">Mon <span className="text-outline">Portfolio</span></h2>
            <p className="text-gray-100 text-center mb-12">
                Découvrez une sélection de mes projets récents en développement web et mobile, mettant en avant mes compétences et mon savoir-faire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    portfolioItems.map((item, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform">
                            <div className="h-48 overflow-hidden">
                                <img src={item.image} className="w-full h-full object-cover transition-transform hover:scale-105"/>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="text-gray-300 kt-2">{item.category}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </section>
    )
}
export default Portfolio;