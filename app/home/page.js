import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <section
      className="relative flex items-center justify-start h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/home.png)", height: "90vh" }}
    >
      <div className="absolute inset-0"></div>
      <div>
        <div className="relative z-10 text-left text-black px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            IEEE STUDENT BRANCH
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Providence College of Engineering
          </p>
          <a
            href="#explore"
            className="inline-block px-6 py-3 text-red-500 font-semibold rounded-lg border-2 border-red-500 hover:bg-red-500 transition-colors hover:text-white"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}
