import React from 'react';
import { FaStar } from 'react-icons/fa';

const UserReviews = () => {
  const reviews = [
    {
      name: 'Faycel Azouaou',
      review: 'The platform offers a user-friendly and highly interactive learning experience, ideal for both beginners and intermediate learners looking to enhance their web development skills. The Build Responsive Real-World Websites with HTML and CSS course is structured with clear, step-by-step tutorials that allow students to progressively build their knowledge.',
      rating: 4,
    },
    {
      name: 'Faycel Azouaou',
      review: 'The platform offers a user-friendly and highly interactive learning experience, ideal for both beginners and intermediate learners looking to enhance their web development skills. The Build Responsive Real-World Websites with HTML and CSS course is structured with clear, step-by-step tutorials that allow students to progressively build their knowledge.',
      rating: 4,
    },
    {
      name: 'Faycel Azouaou',
      review: 'The platform offers a user-friendly and highly interactive learning experience, ideal for both beginners and intermediate learners looking to enhance their web development skills. The Build Responsive Real-World Websites with HTML and CSS course is structured with clear, step-by-step tutorials that allow students to progressively build their knowledge.',
      rating: 4,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#E7E7FF] to-[#E7E7FF] py-8 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/image/background-pattern')] bg-repeat opacity-10"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">What Users think about us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-lg font-bold">{review.name}</h3>
                <p className="text-gray-500 mt-1">{review.review}</p>
                <div className="flex items-center mt-2 text-yellow-500">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <FaStar className="text-gray-400" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-8 h-8 bg-[#8E47FF] rounded-full"></div>
        <div className="absolute top-[10%] left-[20%] w-6 h-6 bg-[#2C79FF] rounded-full"></div>
        <div className="absolute top-[30%] left-[80%] w-4 h-4 bg-[#4FD2C5] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-5 h-5 bg-[#FFAC54] rounded-full"></div>
      </div>
    </div>
  );
};

export default UserReviews;