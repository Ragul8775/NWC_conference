import React from "react";

const TeamMember = ({ name, description, imageUrl }) => {
  return (
    <div className="max-w-sm font-main rounded overflow-hidden shadow-lg bg-white text-center p-4 cursor-pointer">
      <img
        className="w-full  object-cover mx-auto rounded"
        src={imageUrl}
        alt={name}
      />
      <div className="px-6 py-4 hover:bg-blue-600 hover:text-white">
        <div className="font-bold text-2xl mb-2">{name}</div>

        <p className=" text-lg">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
