import React from "react";

export default function EditBlog({ title, desc, imgUrl, content }) {
  return (
    <div className={`hidden justify-center items-center w-full h-full fixed top-0 left-0`}>
      <div className="bg-white p-5 rounded-lg w-80">
        <form className="flex flex-col gap-3">
          <input
            type="text"
            value={title}
            className="border border-[#7F7F7F] py-2.5 px-3 w-full text-base outline-[#EC4F2F]"
          />
          <input
            type="text"
            value={desc}
            className="border border-[#7F7F7F] py-2.5 px-3 w-full text-base outline-[#EC4F2F]"
          />
          <input
            type="text"
            value={imgUrl}
            className="border border-[#7F7F7F] py-2.5 px-3 w-full text-base outline-[#EC4F2F]"
          />
          <textarea
            placeholder="Type Your Blog"
            className={`text-base border border-[#7F7F7F] outline-[#EC4F2F] py-2.5 px-3 w-full placeholder:text-[#AA8F7F] h-32`} value={content}></textarea>
          <button
            type="submit"
            className={`bg-[#EC5131] hover:bg-[#F26D49] w-full rounded-lg py-1.5 px-2 text-lg text-white`}>
            Update
          </button>
          <button
            className={`bg-[#EC5131] hover:bg-[#F26D49] w-full rounded-lg py-1.5 px-2 text-lg text-white`}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
