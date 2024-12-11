import React from 'react';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';

const Categories = () => {
  const categories = [
    {
      title: 'Technology & Engineering',
      image: img1,
    },
    {
      title: 'Marketing & Business',
      image: img2,
    },
    {
      title: 'Languages & Communication',
      image: img3,
    },
    {
      title: 'Design & Creativity',
      image: img4,
    },
    {
      title: 'Computer Science & Programming',
      image: img5,
    },
    {
      title: 'Health & Fitness',
      image: img6,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-purple text-center">Categories</h2>
        {/* Scrollable container with hidden scrollbar */}
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto hide-scrollbar">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative bg-gray-100 flex-shrink-0 md:flex-shrink rounded-lg overflow-hidden shadow-md w-64 md:w-auto"
              >
                {/* Text positioned on top of the image */}
                <h3 className="absolute top-0 left-0 w-full text-[32px] font-thin mb-2 text-white p-4">
                  {category.title}
                </h3>
                {/* Image fills the card */}
                <img
                  src={category.image}
                  className="h-full w-full object-cover"
                />
              </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Categories;