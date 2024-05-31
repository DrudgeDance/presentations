import React from 'react';

function CombinedDetails() {
  return (
    <div className="mt-0 bg-white px-5 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="w-full mb-0 flex flex-col items-start">
          <h3 className="text-left text-[#9b088c] text-lg font-bold mb-0">
            June 18th, 2024, 4pm - 6pm (EDT)
          </h3>
          <div className="text-left font-poppins text-lg text-[#636363] mb-4">
            <strong><em>West Palm Beach, FL</em></strong>
          </div>
        </div>
        <div className="w-full mb-0">
          <div className="flex flex-col items-start mb-0">
            <h3 className="text-left text-[#9b088c] text-lg font-bold mb-0">
              Moderator:
            </h3>
            <p className="text-lg text-left text-[#636363] mb-4">
              <em>Tales Lelis</em>, Regional Business Director at Evonik
            </p>
          </div>
          <div className="flex flex-col items-start mb-0">
            <h3 className="text-left text-[#9b088c] text-lg font-bold mb-0">
              Judges:
            </h3>
            <p className="text-lg text-left text-[#636363] mb-4">
              <em>Francisco Peñagaricano</em>, Assistant Professor, Department of Animal and Dairy Sciences at University of Wisconsin-Madison
            </p>
            <p className="text-lg text-left text-[#636363] mb-4">
              <em>Dr. Anita Menconi</em>, Business Director, Product Line Specialty Nutrition Monogastrics for the Americas at Evonik
            </p>
            <p className="text-lg text-left text-[#636363] mb-0">
              <em>Christin Keeffer</em>, Technical Sales Manager Midwest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CombinedDetails;