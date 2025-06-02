'use client';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1333] to-[#4B228A] flex flex-col">
      {/* Top Bar */}
      <header className="w-full bg-black flex items-center px-8 py-4 shadow-md">
        <span className="text-2xl font-extrabold text-white tracking-wide">Rankly360</span>
      </header>
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Dominate Your Local Market
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-xl mx-auto">
          Transform your Google My Business profile into a lead-generating powerhouse with expert GMB-SEO strategies tailored for your local success.
        </p>
        <button className="bg-white text-[#4B228A] font-bold px-8 py-4 rounded-lg shadow-lg text-lg hover:bg-gray-100 transition">
          The Workflow
        </button>
      </section>
    </main>
  );
} 