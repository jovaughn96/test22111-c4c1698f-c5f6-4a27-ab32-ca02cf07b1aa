import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our SaaS Platform</h1>
        <p className="text-lg mb-8">Streamline your business operations with our cutting-edge solutions.</p>
        <button className="bg-secondary text-white py-2 px-4 rounded-lg">Get Started</button>
      </div>
    </section>
  );
};
export default HeroSection;