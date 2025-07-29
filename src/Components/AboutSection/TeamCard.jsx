import React from "react";

function TeamCard({ item }) {
  console.log(item);
  return (
    <div className="group h-[70vh]  bg-[#0E1C41] border border-[#F6BC6D]/10 backdrop-blur-md rounded-md">
      <div className="w-full h-[82%]  brightness-70 group-hover:brightness-100 transition-all duration-300">
        <img
          className="w-full h-full rounded-t-md object-cover"
          src={item.imageUrl}
        />
      </div>

      <div className="text-center h-[18%] flex brightness-50 group-hover:brightness-100  justify-center items-center flex-col">
        <h1 className="text-[#F6BC6D] text-2xl font-bold">{item.name}</h1>

        <p>{item.title}</p>
      </div>
    </div>
  );
}

export default TeamCard;
