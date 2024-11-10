// src/App.jsx
import React from 'react';

export default function Shape() {
  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      {/* Header Section */}
      <section className="relative bg-[#14213D] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">Innovate.</h1>
          <p className="text-2xl mb-8">Integrate. Train.</p>
          <img src="https://via.placeholder.com/300" alt="Robot Head" className="mx-auto mb-8 w-48 h-48 object-cover rounded-full" />
        </div>
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FCA311" d="M0,256L1440,128L1440,320L0,320Z"></path>
        </svg>
      </section>

      {/* Features Section */}
      <section className="relative bg-[#FCA311] py-20 px-10 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">We do things differently</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Consulting', 'Development', 'Design', 'Support'].map((feature, index) => (
              <div key={index} className="p-6 bg-[#14213D] rounded-lg">
                <p className="font-semibold text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#14213D" d="M0,192L1440,64L1440,320L0,320Z"></path>
        </svg>
      </section>

      {/* Team Section */}
      <section className="relative bg-white py-20 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">We are a team</h2>
          <p className="text-lg mb-10">Our team is dedicated to providing the best services to our clients.</p>
          <div className="flex justify-center gap-8 flex-wrap">
            {['https://via.placeholder.com/100', 'https://via.placeholder.com/100', 'https://via.placeholder.com/100'].map((src, index) => (
              <img key={index} src={src} alt={`Team Member ${index + 1}`} className="w-24 h-24 rounded-full shadow-lg" />
            ))}
          </div>
        </div>
        <svg className="absolute top-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#14213D" d="M0,160L1440,320L1440,0L0,0Z"></path>
        </svg>
      </section>

      {/* Puzzle Section */}
      <section className="relative bg-[#14213D] text-white py-20 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Try Our Puzzle</h2>
          <p className="text-lg mb-10">Challenge yourself with our innovative puzzles.</p>
          <img src="https://via.placeholder.com/200" alt="Puzzle" className="mx-auto mb-8 w-48 h-48 object-cover rounded-full shadow-lg" />
        </div>
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFF" d="M0,128L1440,256L1440,320L0,320Z"></path>
        </svg>
      </section>

      {/* Join Us Section */}
      <section className="relative bg-white py-20 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join a team of professionals</h2>
          <p className="text-lg mb-10">Be part of an exceptional team and grow with us.</p>
          <button className="bg-[#FCA311] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#e6960f] transition">
            Apply Now
          </button>
        </div>
        <svg className="absolute top-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#14213D" d="M0,320L1440,160L1440,320L0,320Z"></path>
        </svg>
      </section>

      {/* Contact Section */}
      <footer className="relative bg-[#14213D] text-white py-20 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in touch now</h2>
          <form className="flex flex-col gap-4 max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="p-3 rounded text-darkBlue" />
            <input type="email" placeholder="Your Email" className="p-3 rounded text-darkBlue" />
            <textarea placeholder="Message" className="p-3 rounded text-darkBlue" rows="4"></textarea>
            <button className="bg-[#FCA311] p-3 rounded font-semibold hover:bg-[#e6960f] transition">
              Submit
            </button>
          </form>
        </div>
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFF" d="M0,128L1440,32L1440,320L0,320Z"></path>
        </svg>
      </footer>
    </div>
  );
}
