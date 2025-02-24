
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-600">Description of feature one.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-600">Description of feature two.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-600">Description of feature three.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

