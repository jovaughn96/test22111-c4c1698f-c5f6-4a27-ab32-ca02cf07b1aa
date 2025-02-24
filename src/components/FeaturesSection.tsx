import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p>Detail about feature one.</p>
          </div>
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <p>Detail about feature two.</p>
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p>Detail about feature three.</p>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;