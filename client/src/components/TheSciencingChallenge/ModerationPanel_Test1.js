import React from 'react';

function CombinedDetails() {
  return (
    <div className="mt-[1vw] bg-white p-5 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="w-full mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-left text-[#9b088c] text-lg font-bold mb-2 sm:mb-0">
            June 18th, 2024, 4pm - 6pm (EDT)
          </h3>
          <div className="font-poppins text-lg text-left text-[#636363]">
            <strong><em>West Palm Beach, FL</em></strong>
          </div>
        </div>
        <div className="w-full mb-4">
          <div className="flex flex-col sm:flex-row items-baseline mb-4">
            <h3 className="text-left text-[#9b088c] text-lg font-bold min-w-[100px] mb-2 sm:mb-0">
              Arbiter:
            </h3>
            <p className="text-lg text-left ml-1 text-[#636363]"> 
              <em>Tales Lelis</em>, Regional Business Director at Evonik
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-baseline mb-4">
            <h3 className="text-left text-[#9b088c] text-lg font-bold min-w-[100px] mb-2 sm:mb-0">
              Judges:
            </h3>
            <div className="text-lg text-left ml-1">
              <p className="mb-4 text-[#636363]">
                <em>Francisco Peñagaricano</em>, Assistant Professor, Department of Animal and Dairy Sciences at University of Wisconsin-Madison
              </p>
              <p className="mb-4 text-[#636363]">
                <em>Dr. Anita Menconi</em>, Business Director, Product Line Specialty Nutrition Monogastrics for the Americas at Evonik
              </p>
              <p className="mb-4 text-[#636363]">
                <em>Christin Keeffer</em>, Technical Sales Manager Midwest
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CombinedDetails;