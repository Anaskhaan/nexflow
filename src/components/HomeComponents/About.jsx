import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      {/* About Section */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-[var(--main-theme-color)] opacity-10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gray-800 opacity-40 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 rounded-lg bg-[var(--main-theme-color)] bg-opacity-10 border border-[var(--main-theme-color)] border-opacity-20">
              <span className="text-white text-sm font-medium">ABOUT NEXFLOW</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Digital Excellence,
              <span className="text-[var(--main-theme-color)]"> Delivered</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Transforming digital visions into measurable success through strategic innovation and creative excellence.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative h-[500px] md:h-[600px]">
              <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-xl shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&w=600&h=420&fit=crop&q=80"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">Creative Process</div>
              </div>
              <div className="absolute top-[15%] right-0 w-[60%] h-[60%] rounded-xl overflow-hidden shadow-xl shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&w=600&h=400&fit=crop&q=80"
                  alt="Digital marketing team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">Team Excellence</div>
              </div>
              <div className="absolute bottom-0 left-[10%] w-[65%] h-[50%] rounded-xl overflow-hidden shadow-xl shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=600&h=400&fit=crop&q=80"
                  alt="Team brainstorming"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">Results-Driven</div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl text-white font-bold">
                Leading the Digital Revolution
                <span className="text-[var(--main-theme-color)]">Since 2015</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Nexflow is a digital agency dedicated to empowering brands with innovation, strategy, and creative
                technology. We deliver impactful solutions tailored to business goals, whether it's web, mobile, or
                marketing.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[var(--main-theme-color)] text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">100+</h3>
              <p className="text-gray-400">Clients Served</p>
            </div>
            <div className="bg-black bg-opacity-60 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">250+</h3>
              <p className="text-gray-400">Projects Delivered</p>
            </div>
            <div className="bg-black bg-opacity-60 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">10+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-black bg-opacity-60 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">15+</h3>
              <p className="text-gray-400">Team Members</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
