import React from "react";
import BlogCard from "../../components/BlogCard";

export default function MyBlog() {
  return (
    <main
      className={`text-[#B9B9B9] flex flex-wrap gap-x-3 gap-y-6 max-w-[70rem] mx-auto my-7`}>
      <BlogCard
        title="Learn web development in 10 days on PW Skills"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officiis
          ducimus tenetur veritatis numquam nemo. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dignissimos, officiis."
        imgUrl="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"
        isEdit={true}
        isDelete={true}
      />
    </main>
  );
}
