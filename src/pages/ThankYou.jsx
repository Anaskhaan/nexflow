// import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";

// export default function ThankYou() {
//   return (
//     <>
//     <Helmet>
//             <title>NexFlow - Lead Magnet</title>
//             <meta name="robots" content="noindex, nofollow" />
//             <meta name="description" content="Special offer for our visitors" />
//           </Helmet>
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-6">
//       <div className="bg-gray-900 border border-[#3ea69b]/30 p-10 rounded-2xl shadow-xl text-center max-w-lg">
//         <h1 className="text-3xl font-bold text-[#3ea69b] mb-4">🎉 Thank You!</h1>
//         <p className="text-gray-300 mb-6">
//           Your audit PDF has been downloaded.  
//           We’ve also sent additional details to your email.
//         </p>
//         <Link
//           to="/"
//           className="px-6 py-3 bg-gradient-to-r from-[#3ea69b] to-[#3f4e58] rounded-lg text-white font-semibold hover:from-[#3ea69b]/90 hover:to-[#3f4e58]/90 transition"
//         >
//           Back to Home
//         </Link>
//       </div>
//     </div>
//     </>
//   );
// }


import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>NexFlow - Thank You</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Special offer for our visitors" />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#3ea69b]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#3f4e58]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 border border-[#3ea69b]/30 p-10 rounded-2xl shadow-2xl text-center max-w-lg z-10 backdrop-blur-sm bg-opacity-50">
          {/* Decorative corner elements */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-[#3ea69b] rounded-tl-lg"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-[#3ea69b] rounded-tr-lg"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-[#3ea69b] rounded-bl-lg"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-[#3ea69b] rounded-br-lg"></div>
          
          {/* Animated checkmark icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#3ea69b] to-[#3f4e58] rounded-full flex items-center justify-center mx-auto shadow-lg">
              <svg 
                className="w-10 h-10 text-white animate-scale-in"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            {/* Pulsating ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-[#3ea69b]/50 animate-ping-slow"></div>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#3ea69b] to-[#9dc4bf] bg-clip-text text-transparent mb-4">
            Thank You!
          </h1>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            Your audit PDF has been downloaded successfully.  
            We've also sent additional details and resources to your email.
          </p>
          
          <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-400 mb-2">What's next?</p>
            <ul className="text-left text-gray-300 text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-[#3ea69b] mr-2">✓</span>
                Check your email for the complete resource package
              </li>
              <li className="flex items-start">
                <span className="text-[#3ea69b] mr-2">✓</span>
                Expect a follow-up from our team within 24 hours
              </li>
              <li className="flex items-start">
                <span className="text-[#3ea69b] mr-2">✓</span>
                Access exclusive content in your member portal
              </li>
            </ul>
          </div>
          
          <Link
            to="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#3ea69b] to-[#3f4e58] rounded-lg text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:from-[#3ea69b]/90 hover:to-[#3f4e58]/90 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Back to Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3f4e58] to-[#3ea69b] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            {/* Button shine effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
          </Link>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-[#3ea69b]/20"
              style={{
                width: Math.random() * 10 + 2 + 'px',
                height: Math.random() * 10 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float${Math.ceil(Math.random() * 3)} ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: Math.random() * 5 + 's'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scale-in {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(10px) translateX(15px); }
        }
      `}</style>
    </>
  );
}