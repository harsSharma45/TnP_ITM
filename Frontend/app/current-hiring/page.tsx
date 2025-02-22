export default function CurrentHiring() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Current Opportunities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentOpenings.map((job, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <img src={job.companyLogo} alt={job.company} className="h-6 w-6" />
                  <span>{job.company}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${job.urgent ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                {job.urgent ? 'Urgent Hiring' : 'Active'}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <span>💰 Package:</span>
                <span className="font-medium">{job.package}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>📍 Location:</span>
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>⏰ Deadline:</span>
                <span className="text-red-600 font-medium">{job.deadline}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Required Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

const currentOpenings = [
  {
    company: "Amazon",
    companyLogo: "https://img.icons8.com/color/96/amazon.png",
    title: "Software Development Engineer",
    package: "₹30-50 LPA",
    location: "Bangalore",
    deadline: "May 25, 2024",
    urgent: true,
    skills: ["Java", "AWS", "System Design", "Distributed Systems"]
  },
  {
    company: "Adobe",
    companyLogo: "https://img.icons8.com/color/96/adobe.png",
    title: "Senior Frontend Engineer",
    package: "₹28-40 LPA",
    location: "Noida",
    deadline: "June 10, 2024",
    urgent: false,
    skills: ["JavaScript", "React", "GraphQL", "WebGL"]
  },
  {
    company: "Oracle",
    companyLogo: "https://img.icons8.com/color/96/oracle-logo.png",
    title: "Database Engineer",
    package: "₹22-35 LPA",
    location: "Hyderabad",
    deadline: "June 30, 2024",
    urgent: true,
    skills: ["SQL", "PL/SQL", "Database Design", "Performance Tuning"]
  },
  {
    company: "Salesforce",
    companyLogo: "https://img.icons8.com/color/96/salesforce.png",
    title: "Cloud Solutions Architect",
    package: "₹35-55 LPA",
    location: "Mumbai",
    deadline: "May 28, 2024",
    urgent: false,
    skills: ["Apex", "Lightning", "Integration", "Cloud Architecture"]
  },
  {
    company: "Intel",
    companyLogo: "https://img.icons8.com/color/96/intel.png",
    title: "Hardware Engineer",
    package: "₹18-32 LPA",
    location: "Bangalore",
    deadline: "July 15, 2024",
    urgent: true,
    skills: ["VLSI", "Verilog", "Embedded Systems", "PCB Design"]
  },
  {
    company: "Netflix",
    companyLogo: "https://img.icons8.com/color/96/netflix.png",
    title: "Streaming Engineer",
    package: "₹40-60 LPA",
    location: "Gurgaon",
    deadline: "June 5, 2024",
    urgent: false,
    skills: ["Node.js", "Microservices", "Redis", "Video Streaming"]
  },
  {
    company: "Meta",
    companyLogo: "https://img.icons8.com/color/96/meta.png",
    title: "AR/VR Developer",
    package: "₹45-65 LPA",
    location: "Hyderabad",
    deadline: "May 30, 2024",
    urgent: true,
    skills: ["Unity3D", "C++", "Computer Vision", "3D Mathematics"]
  },
  {
    company: "IBM",
    companyLogo: "https://img.icons8.com/color/96/ibm.png",
    title: "AI Research Scientist",
    package: "₹25-45 LPA",
    location: "Pune",
    deadline: "July 1, 2024",
    urgent: false,
    skills: ["Machine Learning", "Python", "TensorFlow", "NLP"]
  },
  {
    company: "Uber",
    companyLogo: "https://img.icons8.com/color/96/uber-app.png",
    title: "Backend Engineer",
    package: "₹32-48 LPA",
    location: "Bangalore",
    deadline: "June 20, 2024",
    urgent: true,
    skills: ["Go", "Kubernetes", "PostgreSQL", "gRPC"]
  },
  {
    company: "Twitter",
    companyLogo: "https://img.icons8.com/color/96/twitter.png",
    title: "Site Reliability Engineer",
    package: "₹30-50 LPA",
    location: "Chennai",
    deadline: "June 25, 2024",
    urgent: false,
    skills: ["React", "TypeScript", "Next.js"]
  },
  // Add more job openings...
]

