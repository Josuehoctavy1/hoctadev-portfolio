import { React } from "react";

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-r from-orange-700 to-orange-500">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-200">A propos de <span className="text-outline">Moi</span></h2>
                <p className="text-gray-100 text-center mb-12">
                    Je suis Josué Hoctavy, un développeur web et mobile passionné avec une expertise en création de solutions numériques innovantes. Avec une solide expérience en développement frontend et backend, je m'efforce de transformer des idées en applications performantes et esthétiques. Mon approche centrée sur l'utilisateur garantit des expériences intuitives et engageantes. Toujours à la recherche de nouveaux défis, je suis prêt à collaborer pour donner vie à vos projets numériques.
                </p>
                <div className="bg-orange-600 backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Qui suis-je?</h3>
                        <p className="text-gray-100 mb-4">
                            Passionné par le développement web et mobile, je crée des expériences numériques innovantes et performantes. Explorons ensemble comment je peux transformer vos idées en réalité.
                        </p>
                        <p className="text-gray-100">
                            Avec une solide expérience en développement frontend et backend, je m'efforce de transformer des idées en applications performantes et esthétiques.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-4 text-gray-200">
                            <div>
                                <p>Nom:</p>
                                <p className="font-medium text-white">Josué Hoctavy</p>
                            </div>
                            <div>
                                <p>Email:</p>
                                <p className="font-medium text-white">hoctadev@gmail.com</p>
                            </div>
                            <div>
                                <p>Contact:</p>
                                <p className="font-medium text-white">+225 07 87 04 81 70</p>
                            </div>
                            <div>
                                <p>Disponibilité:</p>
                                <p className="font-medium text-white">Freelance</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Mon Expériences</h3>
                        <div className="space-y-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-white">Développeur Web</h4>
                                        <p className="text-sm text-orange-200">Freelance</p>
                                    </div>
                                    <span className="px-3 py-1 bg-orange-200/10 text-orange-200 rounded-full text-[10px] sm:text-sm">2023 - Présent</span>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-white">Agent Back Office</h4>
                                        <p className="text-sm text-orange-200">IENG Group</p>
                                    </div>
                                    <span className="px-3 py-1 bg-orange-200/10 text-orange-200 rounded-full text-[10px] sm:text-sm">2024 - Présent</span>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-white">Développeur Web</h4>
                                        <p className="text-sm text-orange-200">KAN Group</p>
                                    </div>
                                    <span className="px-3 py-1 bg-orange-200/10 text-orange-200 rounded-full text-[10px] sm:text-sm">2022 - 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;