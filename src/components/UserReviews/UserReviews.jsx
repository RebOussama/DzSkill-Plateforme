import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoPersonCircleSharp } from "react-icons/io5";
import img from '../../assets/bules.png'; 

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
      rating: 3,
    },
  ];

  return (
<div
  className="bg-cover bg-center bg-purple2 py-8 relative"
  style={{
    backgroundBlendMode: 'overlay',
  }}
>
  <div
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
    }}
  ></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">What Users think about us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <IoPersonCircleSharp className="text-3xl text-gray-700" />
                    <h3 className="text-lg font-bold">{review.name}</h3>
                  </div>
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
    </div>
  );
};

export default UserReviews;
