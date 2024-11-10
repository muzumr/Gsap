import React from 'react';

const LogisticsSection = () => {
  return (
    <section className="bg-[#f8fbfe] py-16 px-4 min-h-screen relative flex flex-col items-center">
      {/* Decorative Arrows */}
      <div className="absolute left-8 top-16">
        <img src="path_to_arrow_icon_left.svg" alt="Arrow Left" />
      </div>
      <div className="absolute right-8 top-36">
        <img src="path_to_arrow_icon_right.svg" alt="Arrow Right" />
      </div>

      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <p className="text-orange-500 font-semibold">OUR SERVICES</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Wide Variety of Logistics Services
        </h2>
        <p className="text-gray-500 mt-2">
          Logistics Air freight service delivers the knowledge & opportunity to optimize every mile on every lane. Get full service.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="relative bg-white rounded-lg shadow-lg hover:bg-orange-100 transition-colors p-6 w-[320px] lg:w-[320px] flex flex-col items-center">
          <div className="relative">
            <img src="https://img.freepik.com/free-psd/close-up-feather-isolated_23-2151805084.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Maritime" className="rounded-t-lg w-full mb-4" />
            <div className="absolute top-0 right-0 bg-orange-500 p-2 rounded-full -translate-y-1/2 translate-x-1/2">
              <span className="text-white">🚢</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center">Maritime Freight Transportation</h3>
          <p className="text-gray-500 mt-2 text-center">
            Logistics air freight service delivers the knowledge & opportunity to optimize.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white rounded-lg shadow-lg hover:bg-orange-100 transition-colors p-6 w-[320px] lg:w-[320px] flex flex-col items-center">
          <div className="relative">
            <img src="https://img.freepik.com/premium-photo/3d-glowing-digital-art-dancer-celebrating-sharad-purnima-with-vibrant-colors-fluid-movements_980716-477727.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Land" className="rounded-t-lg w-full mb-4" />
            <div className="absolute top-0 right-0 bg-orange-500 p-2 rounded-full -translate-y-1/2 translate-x-1/2">
              <span className="text-white">🚚</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center">Land Freight Transportation</h3>
          <p className="text-gray-500 mt-2 text-center">
            Logistics air freight service delivers the knowledge & opportunity to optimize.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
            Read More
          </button>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-lg shadow-lg hover:bg-orange-100 transition-colors p-6 w-[320px] lg:w-[320px] flex flex-col items-center">
          <div className="relative">
            <img src="https://img.freepik.com/premium-photo/drawing-peacock-with-crown-it_1309173-28704.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Train" className="rounded-t-lg w-full mb-4" />
            <div className="absolute top-0 right-0 bg-orange-500 p-2 rounded-full -translate-y-1/2 translate-x-1/2">
              <span className="text-white">🚆</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center">Train Freight Transportation</h3>
          <p className="text-gray-500 mt-2 text-center">
            Logistics air freight service delivers the knowledge & opportunity to optimize.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
            Read More
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center mt-10 space-x-2">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default LogisticsSection;
