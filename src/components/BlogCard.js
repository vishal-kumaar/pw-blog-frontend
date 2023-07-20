import React, { useContext } from "react";
import EditBlogContext from "../contexts/editBlog/EditBlogContext";

export default function BlogCard({
  id,
  title,
  desc,
  imgUrl,
  isEdit,
  isDelete,
}) {
  const { edit } = useContext(EditBlogContext);

  return (
    <div
      className={`text-center w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] h-fit bg-[#282828] px-6 py-8 rounded-lg`}>
      <img
        src={imgUrl}
        alt="cover"
        className={`w-full sm:h-36 lg:h-52 block`}
      />
      <h1 className={`font-bold mt-4 text-lg overflow-y-auto h-14 break-word`}>
        {title}
      </h1>
      <p
        className={`font-normal text-lg overflow-y-auto h-28 my-3 break-words`}>
        {desc}
      </p>
      <button
        className={`bg-[#EC5131] hover:bg-[#F26D49] w-full rounded-lg py-1.5 px-2 mt-3 text-lg text-white`}>
        Read
      </button>
      <button
        className={`${
          isEdit ? "block" : "hidden"
        } bg-[#EC5131] hover:bg-[#F26D49] w-full rounded-lg py-1.5 px-2 mt-3 text-lg text-white`}
        onClick={() => edit(id)}>
        Edit
      </button>
      <button
        className={`${
          isDelete ? "block" : "hidden"
        } bg-[#EC5131] hover:bg-[#F26D49] w-full rounded-lg py-1.5 px-2 mt-3 text-lg text-white`}>
        Delete
      </button>
    </div>
  );
}
