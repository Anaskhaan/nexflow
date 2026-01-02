import { motion } from "framer-motion";
import { Icons } from "../../assets/Icons";

const AbouServices = ({ parallaxY3 }) => {
    return (
        <div>
            <section className="md:py-32 py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-20 text-center">
                        <span className="text-[var(--main-theme-color)] font-bold tracking-wider uppercase block mb-2">
                            Our Expertise
                        </span>

                        <h2 className="text-5xl font-bold mb-6">Digital Excellence</h2>

                        <div className="w-24 h-1 bg-gradient-to-r from-[var(--main-theme-color)] to-teal-300 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Icons.Target className="h-10 w-10" />,
                                title: "Strategic Marketing",
                                desc: "Data-driven campaigns that convert",
                            },
                            {
                                icon: <Icons.Layers className="h-10 w-10" />,
                                title: "Brand Development",
                                desc: "Unforgettable identities",
                            },
                            {
                                icon: <Icons.BarChart3 className="h-10 w-10" />,
                                title: "Performance Analytics",
                                desc: "Insights that drive growth",
                            },
                            {
                                icon: <Icons.Globe className="h-10 w-10" />,
                                title: "Global Reach",
                                desc: "Beyond borders marketing",
                            },
                            {
                                icon: <Icons.Rocket className="h-10 w-10" />,
                                title: "Growth Acceleration",
                                desc: "Scaling with precision",
                            },
                            {
                                icon: <Icons.Zap className="h-10 w-10" />,
                                title: "Digital Innovation",
                                desc: "Cutting-edge solutions",
                            },
                        ].map((item, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--main-theme-color)] to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-gray-800 group-hover:border-[var(--main-theme-color)] transition-colors duration-300" />

                                <div className="p-8 relative z-10">
                                    <div className="text-[var(--main-theme-color)] group-hover:text-white transition-colors duration-300 mb-6">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--main-theme-color)] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                        {item.desc}
                                    </p>

                                    <div className="w-10 h-0.5 bg-[var(--main-theme-color)] mt-6 transition-all duration-300 group-hover:w-16" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AbouServices;
