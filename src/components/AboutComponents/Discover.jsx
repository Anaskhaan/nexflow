import { motion } from "framer-motion";
import { Icons } from "../../assets/Icons";

const Discover = ({ parallaxY2 }) => {
    return (
        <div>
            <section id="discover" className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-64 h-64 rounded-full blur-3xl"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(63,166,155,0.3) 0%, rgba(0,0,0,0) 70%)",
                                left: `${i * 25}%`,
                                top: `${(i % 3) * 30}%`,
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 perspective">
                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-1 shadow-2xl">
                                <div className="relative h-96 rounded-lg overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                                        alt="Digital team working"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70" />

                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <span className="text-[var(--main-theme-color)] font-bold tracking-wider uppercase text-sm">
                                            Established 2018
                                        </span>
                                        <h2 className="text-4xl font-bold mt-2">Our Journey</h2>
                                        <div className="w-16 h-1 bg-[var(--main-theme-color)] mt-4" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <p className="text-2xl font-light leading-relaxed text-gray-300 mb-6">
                                Born from a vision to
                                <span className="text-[var(--main-theme-color)] font-semibold">
                                    {" "}
                                    revolutionize{" "}
                                </span>
                                how brands connect digitally.
                            </p>

                            <p className="text-lg text-gray-400 mb-8">
                                From startup to industry leader, we&apos;ve transformed over
                                200+ brands with cutting-edge strategies that drive real growth.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex gap-3 items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[var(--main-theme-color)]">
                                        <Icons.Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <span className="text-2xl font-bold">7+</span>
                                        <p className="text-sm text-gray-400">Years</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[var(--main-theme-color)]">
                                        <Icons.Globe className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <span className="text-2xl font-bold">200+</span>
                                        <p className="text-sm text-gray-400">Clients</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[var(--main-theme-color)]">
                                        <Icons.Zap className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <span className="text-2xl font-bold">97%</span>
                                        <p className="text-sm text-gray-400">Satisfaction</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[var(--main-theme-color)]">
                                        <Icons.Award className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <span className="text-2xl font-bold">15+</span>
                                        <p className="text-sm text-gray-400">Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Discover;
