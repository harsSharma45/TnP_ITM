"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const alumniData = [
  {
    name: "Meghna Verma",
    batch: "2021",
    company: "Google",
    role: "SDE",
    package: "",
    image: "https://shorturl.at/tcEcq",
    linkedin: "https://www.linkedin.com/in/meghna-varma-381282186/",
    testimonial: "College Doesn't Matter, What Matters is Your Hard Work."
  },
  {
    name: "Riya Singh",
    batch: "2021",
    company: "Walmart",
    role: "Software Developer III",
    package: "38 LPA",
    image: "https://shorturl.at/tcEcq",
    linkedin: "https://www.linkedin.com/in/singh-riya/",
    testimonial: "College Doesn't Matter, What Matters is Your Hard Work."
  },
  {
    name: "SAYED ALI ABBAS",
    batch: "2020",
    company: "Zomato",
    role: "Key Accounts Management",
    package: "45 LPA",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    linkedin: "https://www.linkedin.com/in/the-saaz/",
    testimonial: "College Doesn't Matter, What Matters is Your Hard Work."
  },
  
  {
    name: "Dhirendra Pratap Singh",
    batch: "2020",
    company: "Citi",
    role: "Backend Developer",
    package: "40 LPA",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    linkedin: "https://www.linkedin.com/in/hanisntsolo/",
    testimonial: "College Doesn't Matter, What Matters is Your Hard Work."
  },

  {
    name: "Nivedita Singh",
    batch: "2021",
    company: "S&P Global",
    role: "Software Engineer",
    package: "38 LPA",
    image: "https://shorturl.at/tcEcq",
    linkedin: "https://www.linkedin.com/in/nivedita-singh-28366017a/",
    testimonial: "College Doesn't Matter, What Matters is Your Hard Work."
  },
  {
    name: "Akshat Srivastava ",
    batch: "older",
    company: "Google",
    role: "Engineering Manager",
    package: "38 LPA",
    image: "https://shorturl.at/tcEcq",
    linkedin: "https://www.linkedin.com/in/sriakshat/",
    testimonial: "College Doesn't Matter, What Matters is Your Hard Work."
  },
  {
    name: "Anushree Singhal ",
    batch: "older",
    company: "Google",
    role: "Lead Manager",
    package: "38 LPA",
    image: "https://shorturl.at/tcEcq",
    linkedin: "https://www.linkedin.com/in/anushree-singhal-9437545b/",
    testimonial: "I recommend strategies and build solutions."
  },
  {
    name: "Akshat Srivastava ",
    batch: "older",
    company: "Google",
    role: "Engineering Manager",
    package: "38 LPA",
    image: "https://shorturl.at/tcEcq",
    linkedin: "https://www.linkedin.com/in/sriakshat/",
    testimonial: "College Doesn't Matter, What Matters is Your Hard Work."
  },

  

  
  
  
];

const batchYears = ["All", "2022", "2021", "2020","2019","older"];
const companies = ["All", "Google", "Microsoft", "Amazon", "Meta"];

export default function Alumni() {
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");

  const filteredAlumni = alumniData.filter(alumni => {
    const batchMatch = selectedBatch === "All" || alumni.batch === selectedBatch;
    const companyMatch = selectedCompany === "All" || alumni.company === selectedCompany;
    return batchMatch && companyMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Distinguished & Imaginary Alumni
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Meet the successful graduates who have made their mark in the tech industry
          </motion.p>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="py-8 px-6 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-400">Batch Year</h3>
              <div className="flex gap-2">
                {batchYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedBatch(year)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${selectedBatch === year 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-400">Company</h3>
              <div className="flex gap-2">
                {companies.map((company) => (
                  <button
                    key={company}
                    onClick={() => setSelectedCompany(company)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${selectedCompany === company 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    {company}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={alumni.image}
                      alt={alumni.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{alumni.name}</h3>
                      {alumni.batch === "older" ? <p className="text-gray-400">Alumni</p> : <p className="text-gray-400">Batch of {alumni.batch}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Company:</span>
                      <span className="font-medium">{alumni.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Role:</span>
                      <span className="font-medium">{alumni.role}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300 italic">"{alumni.testimonial}"</p>
                  <a
                    href={alumni.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg text-blue-400 text-sm font-medium transition-all duration-300"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

