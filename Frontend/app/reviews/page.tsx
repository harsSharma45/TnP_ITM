'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Plus } from 'lucide-react';

export default function ReviewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState('');

  const reviews = [
    {
      id: 1,
      content: "The places records of BBDNIIT are not great as the companies barely visit the campus and if they visit they hire and company shuts down.",
      date: "2 days ago",
      background: "bg-blue-50"
    },
    {
      id: 2,
      content: "Could improve the communication about upcoming placement drives. No need to improve everthing or rather shut down the college.",
      date: "1 week ago",
      background: "bg-green-50"
    },
    {
      id: 3,
      content: "Only thing good about the college is the dental college infront",
      date: "2 weeks ago",
      background: "bg-purple-50"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.trim()) return;

    // Send to secret message link
    window.open(`https://www.google.com/?message=${encodeURIComponent(newReview)}`, '_blank');
    
    setNewReview('');
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Anonymous Feedbacks</h1>
          <p className="text-gray-600">Share your honest feedback about the placement cell</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Add Review</span>
        </motion.button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${review.background} p-6 rounded-xl shadow-sm`}
          >
            <p className="text-gray-800 mb-4">{review.content}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-xl p-6 w-full max-w-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Share Your Review</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <textarea
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Share your honest feedback anonymously..."
                  className="w-full h-32 p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-black focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Submit Anonymously</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
