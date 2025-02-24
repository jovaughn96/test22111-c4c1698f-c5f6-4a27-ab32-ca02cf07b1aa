
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our SaaS Solution</h1>
        <p className="text-xl mb-8">Streamline your business operations with our cutting-edge technology.</p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

