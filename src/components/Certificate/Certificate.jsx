import React from 'react';
import img from './../../assets/bules.png';

const Certificate = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4" 
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
    >
      <div className="bg-white font-bold rounded-3xl shadow-lg w-full max-w-4xl p-12 text-center relative">
        {/* Certificate content */}
        <h1 className="text-4xl font-bold mb-8 text-purple">
          Certificate
        </h1>

        <div className="mb-8">
          <p className="text-3xl mb-2">
            <span className="text-purple font-bold">Congratulations !</span> you've ended the entitled course :
          </p>

          <h2 className="text-3xl  text-purple mt-6 mb-4">
            Build Responsive Real-World Websites
          </h2>
          <h3 className="text-3xl font-bold text-purple">
            with HTML and CSS
          </h3>
        </div>

        <div className="space-y-4 text-2xl">
          <p>
            Your certificate will be sent through your email
          </p>
          <p>
            so check it to get it
          </p>
          <p className=" mt-6">
            Don't forget to share it on your social media!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
