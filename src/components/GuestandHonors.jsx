import React from "react";
import TeamMember from "../widgets/TeamMember";

const GuestandHonors = () => {
  const guestMembers = [
    // Add team members here
    {
      name: "Dwight Escanuelas",
      description:
        "Bonnie drives the technical strategy of the Themesberg platform and brand.",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
    },
    {
      name: "Jamaal Sports",
      description:
        "Bonnie drives the technical strategy of the Themesberg platform and brand.",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/44.jpg",
    },
    {
      name: "Casey Frio",
      description:
        "Bonnie drives the technical strategy of the Themesberg platform and brand.",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
    },
    {
      name: "Tobias Cauthron",
      description:
        "Bonnie drives the technical strategy of the Themesberg platform and brand.",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/0.jpg",
    },
  ];
  const KeySpeakers = [
    // Add team members here
    {
      name: "Lindy Claibourn",
      description:
        "Bonnie drives the technical strategy of the Themesberg platform and brand.",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
    },
    {
      name: "Val Enabnit",
      description:
        "Bonnie drives the technical strategy of the Themesberg platform and brand.",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    },
    {
      name: "Cleopatra Couillard",
      description:
        "Bonnie drives the technical strategy of the Themesberg platform and brand.",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/40.jpg",
    },
    {
      name: "Kimberlee Cissel",
      description:
        "Bonnie drives the technical strategy of the Themesberg platform and brand.",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/61.jpg",
    },
  ];
  return (
    <div className="px-6  my-6 max-w-7xl font-main">
      <div>
        <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance  text-center">
          Chief Guest
        </h1>
        <div className="flex justify-center gap-3 items-center">
          <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
          <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
          <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
          <hr className="w-16 h-1   bg-blue-500 border-0 rounded  " />
        </div>
{/*         <div className="flex justify-center items-center gap-4 mb-8">
          <TeamMember
            name="Bonnie Green"
            description="Bonnie drives the technical strategy of the Themesberg platform and brand."
            imageUrl="https://xsgames.co/randomusers/assets/avatars/male/26.jpg"
          />
        </div>
      </div>
      <div className="mt-8 md:mt-16">
        <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance  text-center">
          Guests of Honor
        </h1>
        <div className="flex justify-center gap-3 items-center mb-8">
          <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
          <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
          <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
          <hr className="w-16 h-1   bg-blue-500 border-0 rounded  " />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {guestMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
        <div className="mt-8 md:mt-16">
          <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance  text-center">
            Keynote Speakers
          </h1>
          <div className="flex justify-center gap-3 items-center mb-8">
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-16 h-1   bg-blue-500 border-0 rounded  " />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {KeySpeakers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            ))}
          </div> 
        </div>*/}
      </div>
    </div>
  );
};

export default GuestandHonors;
