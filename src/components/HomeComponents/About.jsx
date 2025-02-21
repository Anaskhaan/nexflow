import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full bg-[#F8F9FA] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About Nexflow"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-[#3F4D59]"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3FA69B]">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl mt-4 leading-relaxed">
            At Nexflow, we blend creativity with data-driven strategies to help
            brands thrive in the digital world. Our team of experts crafts
            engaging campaigns, builds powerful online presences, and delivers
            measurable results.
          </p>
          <p className="text-lg md:text-xl mt-4 leading-relaxed">
            Whether it&apos;s branding, social media, SEO, or paid ads – we
            ensure your business stands out in a crowded market.
          </p>
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-[#3FA69B] hover:bg-[#2D7A71] text-white font-semibold py-4 px-8 rounded-full text-lg shadow-xl transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
