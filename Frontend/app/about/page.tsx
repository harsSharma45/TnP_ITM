"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About TNP Cell
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl"
          >
            The Training and Placement Cell at BBDITM works dedicatedly towards providing career guidance and placement opportunities to students.
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300"
            >
              <h3 className="text-gray-400 text-lg mb-2">{stat.title}</h3>
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We strive to bridge the gap between academia and industry by providing comprehensive training 
              and placement support to our students. Our goal is to ensure that every student gets the 
              opportunity to pursue their dream career.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Top Recruiters */}
      <div className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Recruiters</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {topRecruiters.map((company, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-video relative flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <p className="text-center mt-4 text-gray-300">{company.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    title: "Placed Students",
    value: "500+",
    description: "in 2023 batch"
  },
  {
    title: "Average Package",
    value: "12 LPA",
    description: "for 2023 batch"
  },
  {
    title: "Partner Companies",
    value: "100+",
    description: "and growing"
  }
];

const processSteps = [
  {
    title: "Registration",
    description: "Complete profile setup with academic and technical details"
  },
  {
    title: "Training",
    description: "Industry-focused technical and soft skills development"
  },
  {
    title: "Interviews",
    description: "Company interviews and assessment rounds"
  },
  {
    title: "Placement",
    description: "Offer letters and joining formalities"
  }
];

const topRecruiters = [
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png"
  }
];

