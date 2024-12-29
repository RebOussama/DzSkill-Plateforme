import React from 'react';
import img from './../../assets/bules.png';

const Congratulation = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4" 
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
    >
      <div className="bg-white font-bold rounded-3xl shadow-lg w-full max-w-4xl p-12 text-center relative">
        {/* Certificate content */}
        <h1 className="text-4xl font-bold mb-8 text-purple">
          Congratulations
        </h1>

        <div className="mb-8">
          <p className="text-3xl mb-2">
          You’ve passed the final exam with a score of :
          </p>

          <h2 className="text-3xl  text-purple mt-6 mb-4">
            70/100
          </h2>

        </div>

        <div className="space-y-4 text-2xl">
          <p>
          Good luck in achieving more successes!
          </p>

        </div>
      </div>
    </div>
  );
};

export default Congratulation;
