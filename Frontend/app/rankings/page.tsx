export default function Ranking() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Coding Profile Rankings</h1>
        <p className="text-xl text-gray-600 mb-6">
          This page displays the coding profile rankings of our students based on their performance on various coding platforms.
        </p>
        
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-blue-800 font-semibold">Total Students</h3>
            <p className="text-2xl font-bold text-blue-600">150+</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-green-800 font-semibold">Active on LeetCode</h3>
            <p className="text-2xl font-bold text-green-600">x%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl">
            <h3 className="text-purple-800 font-semibold">Contest Participants</h3>
            <p className="text-2xl font-bold text-purple-600">33%</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl">
            <h3 className="text-orange-800 font-semibold">Specialist+ Rated</h3>
            <p className="text-2xl font-bold text-orange-600">Only 1</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problems Solved</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contest Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {codingRankings.map((student, index) => (
                <tr key={index} className={index < 3 ? 'bg-yellow-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      index === 0 ? 'bg-yellow-400' :
                      index === 1 ? 'bg-gray-300' :
                      index === 2 ? 'bg-amber-600' :
                      'bg-gray-100'
                    } text-sm font-semibold`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src={student.avatar} alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="flex items-center space-x-2">
                          <a href={student.leetcode} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-500 hover:underline">LeetCode</a>
                          <a href={student.codeforces} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">CodeForces</a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.rating}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.problemsSolved}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.contestRating}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.batch}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const codingRankings = [
  {
    name: "Sushant Singh",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 2845,
    problemsSolved: 1250,
    contestRating: "Specialist",
    batch: "2025",
    leetcode: "https://leetcode.com/aarav",
    codeforces: "https://codeforces.com/profile/aarav"
  },
  {
    name: "Zara Khan",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 2789,
    problemsSolved: 1180,
    contestRating: "Pupil",
    batch: "2025",
    leetcode: "https://leetcode.com/zara",
    codeforces: "https://codeforces.com/profile/zara"
  },
  {
    name: "Rohan Sharma",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 2756,
    problemsSolved: 1150,
    contestRating: "Pupil",
    batch: "2025",
    leetcode: "https://leetcode.com/rohan",
    codeforces: "https://codeforces.com/profile/rohan"
  },
  {
    name: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 2700,
    problemsSolved: 1100,
    contestRating: "newbie",
    batch: "2025",
    leetcode: "https://leetcode.com/priya",
    codeforces: "https://codeforces.com/profile/priya"
  },
  {
    name: "Arjun Kumar",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 2650,
    problemsSolved: 1050,
    contestRating: "newbie",
    batch: "2025",
    leetcode: "https://leetcode.com/arjun",
    codeforces: "https://codeforces.com/profile/arjun"
  },
  {
    name: "Ananya Reddy",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 2600,
    problemsSolved: 1000,
    contestRating: "Pupil",
    batch: "2025",
    leetcode: "https://leetcode.com/ananya",
    codeforces: "https://codeforces.com/profile/ananya"
  },
  {
    name: "Vikram Malhotra",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 2550,
    problemsSolved: 950,
    contestRating: "Pupil",
    batch: "2025",
    leetcode: "https://leetcode.com/vikram",
    codeforces: "https://codeforces.com/profile/vikram"
  },
  {
    name: "Neha Gupta",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 2500,
    problemsSolved: 900,
    contestRating: "Pupil",
    batch: "2025",
    leetcode: "https://leetcode.com/neha",
    codeforces: "https://codeforces.com/profile/neha"
  },
  {
    name: "Aditya Verma",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    rating: 2450,
    problemsSolved: 850,
    contestRating: "Newbie",
    batch: "2025",
    leetcode: "https://leetcode.com/aditya",
    codeforces: "https://codeforces.com/profile/aditya"
  },
  {
    name: "Ishita Patel",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 2400,
    problemsSolved: 800,
    contestRating: "Newbie",
    batch: "2025",
    leetcode: "https://leetcode.com/ishita",
    codeforces: "https://codeforces.com/profile/ishita"
  },
  {
    name: "Rahul Mehta",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 2350,
    problemsSolved: 750,
    contestRating: "Newbie",
    batch: "2025",
    leetcode: "https://leetcode.com/rahul",
    codeforces: "https://codeforces.com/profile/rahul"
  },
  {
    name: "Kavya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 2300,
    problemsSolved: 700,
    contestRating: "Newbie",
    batch: "2025",
    leetcode: "https://leetcode.com/kavya",
    codeforces: "https://codeforces.com/profile/kavya"
  },
  {
    name: "Siddharth Iyer",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    rating: 2250,
    problemsSolved: 650,
    contestRating: "Pupil",
    batch: "2025",
    leetcode: "https://leetcode.com/siddharth",
    codeforces: "https://codeforces.com/profile/siddharth"
  },
  {
    name: "Riya Desai",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    rating: 2200,
    problemsSolved: 600,
    contestRating: "Newbie",
    batch: "2025",
    leetcode: "https://leetcode.com/riya",
    codeforces: "https://codeforces.com/profile/riya"
  },
  {
    name: "Karan Shah",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 2150,
    problemsSolved: 550,
    contestRating: "Newbie",
    batch: "2025",
    leetcode: "https://leetcode.com/karan",
    codeforces: "https://codeforces.com/profile/karan"
  }
] 