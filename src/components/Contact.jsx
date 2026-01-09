import { React } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { ImInstagram } from "react-icons/im";
import { LiaLinkedin } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-700">
      <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-200">Me <span className="text-outline">Contacter</span></h2>
            <p className="text-gray-100 text-center mb-12">
                N'hésitez pas à me contacter pour toute demande de renseignements, collaboration ou opportunité professionnelle. Je suis ouvert à de nouveaux défis et projets passionnants.
            </p>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-`1 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
                <div className="">
                    <h3 className="text-xl font-semibold mb-6 text-white">Détails du Contact</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20">
                                <IoLocationSharp className="text-white"/>
                            </div>
                            <div className="">
                                <h4 className="font-semibold text-white">Adresse</h4>
                                <p className="text-slate-200">Abidjan, Côte d'Ivoire</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20">
                                <MdEmail className="text-white"/>
                            </div>
                            <div className="">
                                <h4 className="font-semibold text-white">Email</h4>
                                <p className="text-slate-200">hoctadev@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20">
                                <PiPhone className="text-white"/>
                            </div>
                            <div className="">
                                <h4 className="font-semibold text-white">Téléphone</h4>
                                <p className="text-slate-200">+225 07 87 04 81 70</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h4 className="font-semibold mb-4 text-white">Suivez-moi</h4>
                        <div className="flex gap-4">
                            <div className="p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-orange-500 text-white border border-white/20">
                                <a href="https://www.instagram.com/hoctavy_official" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-orange-500 text-white border border-white/20 transition-colors" aria-label="Instagram">
                                  <ImInstagram />
                                </a>
                            </div>
                             <div className="p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-orange-500 text-white border border-white/20">
                                <LiaLinkedin/>
                            </div>
                             <div className="p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-orange-500 text-white border border-white/20">
                                <FaWhatsapp/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-white">Envoyez-moi un message</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm text-slate-200">Votre Nom</label>
                            <input type="text" className="w-full px-4 py-2 text-white bg-white/10 rounded-lg border border-white/20 focus:ring-3 focus:ring-orange-400"/>
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm text-slate-200">Votre Email</label>
                            <input type="email" className="w-full px-4 py-2 text-white bg-white/10 rounded-lg border border-white/20 focus:ring-3 focus:ring-orange-400"/>
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm text-slate-200">Sujet</label>
                            <input type="text" className="w-full px-4 py-2 text-white bg-white/10 rounded-lg border border-white/20 focus:ring-3 focus:ring-orange-400"/>
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm text-slate-200">Votre Message</label>
                            <textarea type="text" className="w-full px-4 py-2 text-white bg-white/10 rounded-lg border border-white/20 focus:ring-3 focus:ring-orange-400"/>
                        </div>
                        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 text-white">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Contact;
