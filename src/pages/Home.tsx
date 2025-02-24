import React from "react";

import { Button } from '@/components/ui/button';
const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <header className="w-full py-6 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">SaaS Product</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our SaaS Product</h2>
          <p className="text-lg mb-8">Our product helps you achieve more with less effort.</p>
          <Button>Get Started</Button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-secondary text-secondary-foreground rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Feature One</h3>
            <p>Detail about feature one.</p>
          </div>
            <h3 className="text-2xl font-bold mb-2">Feature Two</h3>
            <p>Detail about feature two.</p>
            <h3 className="text-2xl font-bold mb-2">Feature Three</h3>
            <p>Detail about feature three.</p>
      </main>
      <footer className="w-full py-4 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 SaaS Product. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Home;