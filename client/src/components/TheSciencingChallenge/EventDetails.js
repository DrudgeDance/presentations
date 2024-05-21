import React from 'react';

function EventDetails() {
  return (
    <div className="mt-[1vw] bg-white p-5 flex">
      <div className="max-w-4xl w-full flex">
        <div className="w-1/2 mb-4">
          <h3 className="text-left text-[#9b088c] text-lg mb-1 font-bold">
            June 18th, 2024, 4pm - 6pm (EDT)
          </h3>
          <div className="font-poppins text-lg text-left text-black mt-1">
            West Palm Beach, FL
          </div>
        </div>
        <div className="w-1/2 mb-4">
          <h3 className="text-left text-[#9b088c] text-lg mb-4 font-bold">
            Moderator
          </h3>
          <p className="text-lg mb-4 text-left">
            <strong>Tales Lelis</strong>, Regional Business Director at Evonik
          </p>
          <h3 className="text-left text-[#9b088c] text-lg mb-4 font-bold">
            Judges
          </h3>
          <div className="text-lg text-left">
            <p className="mb-4 text-left">
              <strong>Francisco Peñagaricano</strong>, Assistant Professor, Department of Animal and Dairy Sciences at University of Wisconsin-Madison
            </p>
            <p className="mb-4 text-left">
              <strong>Dr. Anita Menconi</strong>, Business Director, Product Line Specialty Nutrition Monogastrics for the Americas at Evonik
            </p>
            <p className="mb-4 text-left">
              <strong>Kari Blazei</strong>, Sales Director at RP Nutrients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;