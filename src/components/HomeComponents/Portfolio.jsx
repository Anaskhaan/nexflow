import React from "react";
import { Link } from "react-router-dom";
import ParadisePipe from "../../assets/paradisepipe.png"
import SwiftTakeoffs from "../../assets/a.png"
import BellClinix from "../../assets/bellclinix.png"
// Project data array - replace with your actual portfolio projects
const portfolioData = [
  {
    id: 1,
    title: "Paradise Pipes",
    client: "Fashion Forward",
    description: "Complete digital transformation with SEO optimization, social media strategy, and conversion-focused website redesign.",
    category: "Digital Strategy",
    image: ParadisePipe
  },
  {
    id: 2,
    title: "Content Marketing Campaign",
    client: "Eco Solutions",
    description: "Developed a comprehensive content strategy that increased organic traffic by 87% and improved lead generation by 65%.",
    category: "Content Marketing",
    image: SwiftTakeoffs // Replace with your actual image
  },
  {
    id: 3,
    title: "Social Media Growth",
    client: "Urban Fitness",
    description: "Executed targeted social campaigns that increased follower engagement by 120% and drove a 45% increase in class bookings.",
    category: "Social Media",
    image: BellClinix // Replace with your actual image
  },
//   {
//     id: 4,
//     title: "PPC Campaign Optimization",
//     client: "Tech Innovations",
//     description: "Restructured ad campaigns resulting in 35% lower CPC and 78% increase in qualified leads within 60 days.",
//     category: "Paid Advertising",
//     image: "/api/placeholder/600/400" 
//   }
];



export default function Portfolio() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Our Work</h2>
          <div className="w-20 h-1 bg-[#3FA69B] mx-auto mb-6"></div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Explore our case studies showcasing successful digital marketing strategies and campaigns we've executed for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.map((project) => (
       
              <div className="bg-black border border-gray-800 rounded-lg overflow-hidden group">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-96 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="inline-block bg-[#3FA69B] text-black px-3 py-1 text-sm font-medium rounded-full mb-2">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-3">Client: {project.client}</p>
        <p className="text-white">{project.description}</p>
      </div>
    </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <Link to='/Portfolio'>
          <button className="bg-transparent border-2 border-[#3FA69B] hover:bg-[#3FA69B] hover:text-black text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            View All Projects
          </button>
            </Link>
        </div>
      </div>
    </section>
  );
}