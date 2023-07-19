import React from "react";

export default function BlogCard({title, desc, imgUrl}) {
  return (
    <div
      className={`text-center w-[calc(33.33%-8px)] h-fit bg-[#282828] px-6 pt-4 pb-2 rounded-lg`}>
      <img
        src={imgUrl}
        alt="cover"
        className={`w-full h-52 block`}
      />
      <h1 className={`font-bold mt-4 text-lg overflow-y-auto h-14`}>
        {title}
      </h1>
      <p className={`font-normal text-lg overflow-y-auto h-28 my-3`}>
        {desc}
      </p>
      <button
        className={`bg-[#EC5131] hover:bg-[#F26D49] w-full rounded-lg py-1.5 px-2 mt-3 text-lg text-white`}>
        Read
      </button>
    </div>
  );
}
