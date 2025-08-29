import { motion } from "framer-motion";
import anas from "../../assets/anas.jpg";

const teamMembers = [
  {
    name: "M. Anas",
    role: "Founder & CEO",
    image: anas,
  },
  {
    name: "Sami Sharief",
    role: "Growth Marketing Manager",
    // image:  ,
  },
  {
    name: "A. Hussain Khan",
    role: "CTO",
    // image:,
  },

  {
    name: "Mashhood Rehman",
    role: "Development Manager",
    // image:,
  },
  {
    name: "Sharoon Amanat",
    role: "Director HR & Finance",
    // image:,
  },
  {
    name: "Aqsa Malik",
    role: "HR Manager",
    // image:,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] },
  },
};

const AboutTeam = ({ teamRef, teamInView }) => {
  return (
    <section ref={teamRef} className="py-32 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: Math.random() * 5 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[var(--main-theme-color)] to-teal-300 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Team members grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} className="group" variants={itemVariants}>
              <motion.div
                className="relative h-96 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10" />

                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-[var(--main-theme-color)]">
                    {member.role}
                  </p>
                  <motion.div
                    className="w-0 h-0.5 bg-white mt-4"
                    animate={{ width: teamInView ? "40%" : 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  />
                </div>

                <motion.div
                  className="absolute inset-0 border-2 border-[var(--main-theme-color)] rounded-xl z-0 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
