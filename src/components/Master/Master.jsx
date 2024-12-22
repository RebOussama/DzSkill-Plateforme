import React, { useState } from 'react';
import { HiArrowLongRight } from "react-icons/hi2";

const Master = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle question submission here
    console.log('Question submitted:', question);
    setQuestion('');
  };

  const handleDelete = () => {
    setQuestion('');
  };

  return (
    <div className="container mx-auto px-14 py-6 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-blue">
          Mastering CSS Basics: Styling Your Web Pages
        </h1>
        
        <button className="flex items-center text-gray-400 hover:text-gray-600 transition-colors">
          Next
          <HiArrowLongRight className="w-6 h-6 ml-2" />
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-blue mb-4">
          Q&A : <span className="text-black font-semibold">add a question?</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-violet-300 focus:border-violet-400 min-h-[100px] resize-none"
            />
            <div className="absolute bottom-4 right-4 flex space-x-4">
              <button
                type="button"
                onClick={handleDelete}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                Delete
              </button>
              <button
                type="submit"
                className="text-blue font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-blue mb-4">
          Description:
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          This course is designed for anyone who wants to master the fundamentals of web
          development and create stunning, fully responsive websites. This hands-on course takes you
          from beginner to proficient, teaching you how to structure and style web pages using HTML5
          and CSS3.
        </p>
      </div>
    </div>
  );
};

export default Master;