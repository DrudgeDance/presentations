import React from "react";

const PlantCard = ({ plant }) => {
  console.log("plant: ", plant)
  return (
    <div className="bg-white max-w-md mx-auto rounded overflow-hidden shadow-md m-4">
      {/* <img
        className="w-full h-64 object-cover"
        src={plant.img}
        alt={plant.name}
      /> */}
      <div className="px-6 py-4">
        <div
          className={`font-bold text-xl mb-2 ${
            plant.fav_flag ? "text-yellow-300" : "text-gray-700"
          }`}
        >
          {plant.plantname}
        </div>
        <p className="text-gray-700">Status: {plant.plant_status}</p>
        <p className="text-gray-700">Next water: {plant.plant_reminder}</p>
        <p className="text-gray-700">Diagnosis: {plant.plant_instruction}</p>
      </div>
    </div>
  );
};

export default PlantCard;
