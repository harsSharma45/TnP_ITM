export default function Placements() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Placement Statistics</h1>

      {/* Year-wise stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {yearStats.map((year, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{year.year}</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Highest Package:</span>
                <span className="font-semibold">₹{year.highestPackage} LPA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Package:</span>
                <span className="font-semibold">₹{year.averagePackage} LPA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Students Placed:</span>
                <span className="font-semibold">{year.studentsPlaced}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top recruiters */}
      <h2 className="text-2xl font-bold mb-6">Top Recruiters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {topRecruiters.map((company, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <img src={company.logo} alt={company.name} className="h-20 object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Offers (2023):</span>
                  <span className="font-medium">{company.offers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Package Range:</span>
                  <span className="font-medium">₹{company.packageRange}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Roles:</span>
                  <span className="font-medium">{company.roles.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const yearStats = [
  {
    year: "2023",
    highestPackage: "45",
    averagePackage: "12.5",
    studentsPlaced: 92
  },
  {
    year: "2022",
    highestPackage: "42",
    averagePackage: "11.8",
    studentsPlaced: 89
  },
  {
    year: "2021",
    highestPackage: "40",
    averagePackage: "10.5",
    studentsPlaced: 85
  }
]

const topRecruiters = [
  {
    name: "Google",
    logo: "/companies/google.png",
    offers: 15,
    packageRange: "25-45 LPA",
    roles: ["SDE", "Product Manager"]
  },
  {
    name: "Microsoft",
    logo: "/companies/microsoft.png",
    offers: 12,
    packageRange: "20-35 LPA",
    roles: ["SDE", "Research"]
  },
  // Add more companies with their stats
] 