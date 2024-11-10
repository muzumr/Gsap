// // App.jsx
// import React from "react";

// const HexagonGrid = () => {
//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-gray-100 p-4 w-[100vw]">
//       {/* Background Gradient Circles */}
//       <div className="absolute inset-0 flex justify-center items-center z-0">
//         <div className="w-72 h-72 rounded-full bg-red-500 opacity-50 absolute -top-10 -left-10"></div>
//         <div className="w-96 h-96 rounded-full bg-purple-500 opacity-50 absolute -bottom-10 -right-10"></div>
//       </div>

//       {/* Hexagon Grid */}
//       <div className="relative grid gap-4 grid-cols-3 z-10">
//         <Hexagon content="Sample Text" icon="⏰" />
//         <Hexagon content="Sample Text" icon="⚙️" />
//         <Hexagon content="Sample Text" icon="🌐" />
//         <Hexagon content="Sample Text" icon="🤝" />
//         <Hexagon content="Sample Text" icon="🧩" />
//       </div>
//     </div>
//   );
// };

// const Hexagon = ({ content, icon }) => (
//   <div className="bg-white shadow-lg p-6 w-32 h-32 flex flex-col items-center justify-center text-center transform rotate-45">
//     <div className="rotate-[-45deg]">
//       <div className="text-2xl mb-2">{icon}</div>
//       <p className="text-sm text-gray-600">{content}</p>
//     </div>
//   </div>
// );

// export default HexagonGrid;
import React from "react";

const HexagonGrid = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        {/* Hexagon SVG */}
        <svg
          viewBox="0 0 200 173.2"
          className="w-40 h-40 shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="100,0 200,50 200,150 100,200 0,150 0,50"
            fill="white"
            stroke="#e5e7eb" /* Tailwind gray-200 */
            strokeWidth="1"
          />
        </svg>
        
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-md font-bold text-pink-600">SAMPLE TEXT</h2>
          <p className="text-xs text-gray-600 mt-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HexagonGrid;
