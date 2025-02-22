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
    company: "Google",
    companyLogo: "/companies/google.png",
    title: "Software Engineer",
    package: "₹25-45 LPA",
    location: "Bangalore",
    deadline: "May 30, 2024",
    urgent: true,
    skills: ["Python", "Java", "DSA", "System Design"]
  },
  {
    company: "Microsoft",
    companyLogo: "/companies/microsoft.png",
    title: "Frontend Developer",
    package: "₹20-35 LPA",
    location: "Hyderabad",
    deadline: "June 15, 2024",
    urgent: false,
    skills: ["React", "TypeScript", "Next.js"]
  },
  // Add more job openings...
]

