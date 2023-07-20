import React, { useContext } from "react";
import EditBlogContext from "../contexts/editBlog/EditBlogContext";
import TokenContext from "../contexts/token/TokenContext";
import { toast } from "react-toastify";
import updateBlog from "../apis/updateBlog";

export default function EditBlog() {
  const { isEditBlog, blog, changeBlogData, close } =
    useContext(EditBlogContext);
  const { token } = useContext(TokenContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await updateBlog(blog._id, blog, token);
    if (res.success) {
      toast(res.message, {
        position: "top-right",
        type: "success",
        theme: "dark",
        autoClose: 3000,
      });
      close();
    } else {
      toast(res.message, {
        position: "top-right",
        type: "error",
        theme: "dark",
        autoClose: 3000,
      });
    }

  };

  if (!isEditBlog) {
    return null;
  }

  return (
    <div
      className={`flex justify-center items-center w-full h-full pt-10 fixed top-0 left-0`}>
      <div className="max-h-screen overflow-y-auto bg-white p-5 rounded-lg w-[85%] md:w-80">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            value={blog.title}
            onChange={(event) => changeBlogData("title", event.target.value)}
            className="border border-[#7F7F7F] py-2.5 px-3 w-full text-base outline-[#EC4F2F]"
          />
          <input
            type="text"
            value={blog.desc}
            onChange={(event) => changeBlogData("desc", event.target.value)}
            className="border border-[#7F7F7F] py-2.5 px-3 w-full text-base outline-[#EC4F2F]"
          />
          <input
            type="text"
            value={blog.imgUrl}
            onChange={(event) => changeBlogData("imgUrl", event.target.value)}
            className="border border-[#7F7F7F] py-2.5 px-3 w-full text-base outline-[#EC4F2F]"
          />
          <textarea
            className={`text-base border border-[#7F7F7F] outline-[#EC4F2F] py-2.5 px-3 w-full placeholder:text-[#AA8F7F] h-32`}
            onChange={(event) => changeBlogData("content", event.target.value)}
            value={blog.content}></textarea>
          <button
            type="submit"
            className={`bg-[#EC5131] hover:bg-[#F26D49] w-full rounded-lg py-1.5 px-2 text-lg text-white`}>
            Update
          </button>
          <button
            onClick={close}
            className={`bg-[#EC5131] hover:bg-[#F26D49] w-full rounded-lg py-1.5 px-2 text-lg text-white`}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
