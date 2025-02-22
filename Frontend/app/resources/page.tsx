export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Learning Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                {category.icon}
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-800">{resource.title}</div>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const categories = [
  {
    title: "Data Structures & Algorithms",
    icon: "📚",
    resources: [
      {
        title: "LeetCode Premium",
        description: "Practice coding interviews with real company questions",
        link: "https://leetcode.com"
      },
      {
        title: "AlgoExpert",
        description: "160 hand-picked coding interview questions",
        link: "https://algoexpert.io"
      },
      // Add more resources...
    ]
  },
  {
    title: "System Design",
    icon: "🏗️",
    resources: [
      {
        title: "System Design Primer",
        description: "Learn how to design large-scale systems",
        link: "https://github.com/donnemartin/system-design-primer"
      },
      // Add more resources...
    ]
  },
  {
    title: "AI/ML Resources",
    icon: "🤖",
    resources: [
      {
        title: "Fast.ai",
        description: "Making neural nets uncool again",
        link: "https://www.fast.ai"
      },
      // Add more resources...
    ]
  },
  // Add more categories...
]

