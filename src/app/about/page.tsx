"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, Zap, Linkedin, Twitter, Github, Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { founderData, teamMembers } from "@/lib/data";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering measurable results that drive real business growth.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leveraging cutting-edge technology and creative strategies to stay ahead.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships, not just projects.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning work that sets new standards in digital marketing and development.",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black leading-none select-none tracking-tighter"
          >
            ABOUT
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-brand"></div>
              <span className="text-brand text-xs font-black tracking-[0.3em] uppercase">
                WHO WE ARE
              </span>
              <div className="w-12 h-0.5 bg-brand"></div>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-slate-900 uppercase leading-[0.9]">
              Elevating <span className="text-brand italic serif">Brands</span>
              <br />
              Digitally
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              We're a team of digital strategists, designers, and developers passionate about transforming businesses through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900 uppercase">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between technology and business growth, Nexflow Technologies has evolved into a trusted partner for businesses seeking digital transformation.
              </p>
              <p>
                Our journey began with a simple belief: every business deserves access to world-class digital solutions that drive measurable results. Today, we've helped hundreds of clients across diverse industries achieve their digital goals.
              </p>
              <p>
                From startups to established enterprises, we bring the same level of dedication, creativity, and technical excellence to every project we undertake.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-brand/10 to-slate-100"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl font-black text-brand/10">NF</div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl">
              <Image
                src={founderData.image}
                alt={founderData.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Design Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/10 -z-10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-brand font-black tracking-[0.3em] uppercase text-xs">The Visionary</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                {founderData.name}
              </h2>
              <h3 className="text-2xl font-bold text-slate-400 italic serif">{founderData.role}</h3>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              {founderData.bio}
            </p>

            <div className="flex gap-4 pt-4">
              {founderData.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-brand hover:bg-brand/10 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900 uppercase">
              Our Values
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-brand font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Experts</span>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900 uppercase">
              Meet the Team
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              A diverse collective of digital polymaths dedicated to exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-8 relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                      <Users className="w-16 h-16 text-slate-200" />
                    </div>
                  )}
                  {/* Overlaid Socials */}
                  <div className="absolute inset-0 bg-brand/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                    {member.socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-brand rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300"
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{member.name}</h4>
                  <p className="text-brand font-bold uppercase tracking-widest text-[10px]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "93%", label: "Client Retention" },
              { value: "287%", label: "Average ROI" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-black text-brand mb-4">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
