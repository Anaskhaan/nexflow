import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <>
    <Helmet>
            <title>NexFlow - Lead Magnet</title>
            <meta name="robots" content="noindex, nofollow" />
            <meta name="description" content="Special offer for our visitors" />
          </Helmet>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-6">
      <div className="bg-gray-900 border border-[#3ea69b]/30 p-10 rounded-2xl shadow-xl text-center max-w-lg">
        <h1 className="text-3xl font-bold text-[#3ea69b] mb-4">🎉 Thank You!</h1>
        <p className="text-gray-300 mb-6">
          Your audit PDF has been downloaded.  
          We’ve also sent additional details to your email.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-[#3ea69b] to-[#3f4e58] rounded-lg text-white font-semibold hover:from-[#3ea69b]/90 hover:to-[#3f4e58]/90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
    </>
  );
}
