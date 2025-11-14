import { React } from "react";
import { testimonials } from "../data/data";
import { i } from "framer-motion/client";
import { FaRegStar } from "react-icons/fa";
import { IoIosAdd, IoIosStar, IoIosStarHalf } from "react-icons/io";

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 px-6 bg-gradient-to-r from-orange-700 to-orange-500">
            <div className="text-center mt-8">
                <h3 className="text-3xl font-bold text-center mb-2 text-gray-200">Leurs <span className="text-outline">Témoignages</span></h3>
                <p className="text-gray-100 text-center mb-12">Ce que disent mes clients</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        testimonials.map((item, index) => (
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                <div className="items-center object-cover mb-4">
                                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4 mb-4">
                                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{item.name}</h4>
                                        <p className="text-orange-200 text-sm">{item.position}</p>
                                    </div>
                                    <p className="text-slate-200 text-sm py-2">{item.content}</p>
                                    <div className="flex gap-1 mt-4">
                                        {
                                            Array.from({length: 5}).map((_, i)  => (
                                                <IoIosStar key={i} className="text-white"/>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
export default Testimonials;