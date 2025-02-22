export default function StudentDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Upcoming Interviews</h2>
          {/* Add a list of upcoming interviews */}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">My Applications</h2>
          {/* Add a list of student's applications */}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Resources</h2>
          {/* Add links to resources */}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">My Profile</h2>
          {/* Add student profile information */}
        </div>
      </div>
    </div>
  )
}

