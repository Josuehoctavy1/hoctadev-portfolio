import { Fragment, React } from "react";
import AnimatedTitles from "../components/utils/AnimatedTitles";
import { BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Hero = () => {
  return (
    <Fragment>
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-20">
        <div className="absolute inset-0 bg-[url('./assets/slider_new.jpg')] bg-center bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-light capitalize tracking-wide text-orange-300">
                    Je suis Josué Hoctavy
                </h3>
                <AnimatedTitles/>
                <p className="mt-4 text-gray-300 max-w-xl">
                    Passionné par le développement web et mobile, je crée des expériences numériques innovantes et performantes. Explorons ensemble comment je peux transformer vos idées en réalité.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Design Web</span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Développement Frontend & Backend</span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Design UI/UX</span>
                </div>

                <div className="flex text-gray-400 gap-5 mt-8 justify-center md:justify-start">
                    <button className="p-3 bg-white/10 rounded-full hover:bg-orange-400 transition-colors">
                        <BsWhatsapp/>
                    </button>
                    <button className="p-3 bg-white/10 rounded-full hover:bg-orange-400 transition-colors">
                        <LiaLinkedin/>
                    </button>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-2 cursor-pointer text-sm rounded-full bg-gradient-to-r from-orange-400 to-orange-700 font-light text-white hover:opacity-70 transition-opacity">Mes projets</button>
                    <button className="px-6 py-2 cursor-pointer text-sm rounded-full bg-white/10 backdrop-blur-md font-light text-white hover:opacity-70 transition-opacity">Mon CV</button>
                </div>
            </div>
        </div>
        </section>
    </Fragment>
    );
}
export default Hero;