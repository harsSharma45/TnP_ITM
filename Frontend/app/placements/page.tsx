export default function reviewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">reviews</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Placement Statistics</h2>
          <p className="text-gray-600">View detailed placement statistics and records.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Companies Visiting</h2>
          <p className="text-gray-600">Check out upcoming company visits and schedules.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Previous Recruiters</h2>
          <p className="text-gray-600">List of companies that recruited in previous years.</p>
        </div>
      </div>
    </div>
  );
}
