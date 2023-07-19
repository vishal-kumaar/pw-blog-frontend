import React, { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    const content = document.getElementById("content");
    content.style.height = `${content.scrollHeight}px`;
  }, []);
  return (
    <div className="text-white w-[90%] xl:w-[70rem] mx-auto my-10">
      <main className={`flex flex-col items-center text-center`}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hZEF-P1-tGcAaFwMmzK4kaRFl3lzvy0YwIn3xQffOAIl9mAcFtws7IY59q-AArDD0MA&usqp=CAU"
          alt=""
          className="w-[70%] block"
        />
        <h1 className="font-bold text-4xl mt-10">
          Learn web development in 10 days on PW Skills
        </h1>
        <p className="font-normal text-2xl mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officiis
          ducimus tenetur veritatis numquam nemo. Lorem ipsum.
        </p>
        <p className="font-normal text-lg mt-5">
          Published Date: July 19, 2023
        </p>
      </main>
      <hr className="my-6   " />
      <textarea
        readOnly={true}
        id="content"
        className="font-normal text-lg bg-transparent overflow-hidden flex w-full outline-none"
        value={`Web development, short for website development, is the process of creating websites and web applications. It encompasses a wide range of skills and technologies used to design, build, and maintain websites that can be accessed on the internet. Here are some key aspects of web development: 

1. Front-End Development: Front-end developers focus on the user interface and user experience (UI/UX) of a website. They use HTML, CSS, and JavaScript to create visually appealing and interactive web pages that users can interact with directly in their browsers.
        
2. Back-End Development: Back-end developers work behind the scenes, managing servers, databases, and application logic. They use programming languages like Python, Ruby, PHP, or Node.js to handle data storage, retrieval, and processing.

3. Full-Stack Development: Full-stack developers have expertise in both front-end and back-end development, enabling them to handle the entire web development process from start to finish.

4. Responsive Design: Web developers use responsive design techniques to ensure websites adapt and display correctly on various devices, such as desktops, tablets, and smartphones.

5. Content Management Systems (CMS): CMS platforms like WordPress, Joomla, and Drupal simplify website creation and management, enabling non-technical users to update content easily.

6. Web Security: Web developers implement security measures to protect websites from cyber threats, such as data breaches, SQL injections, and cross-site scripting (XSS).

7. Web Accessibility: Developers strive to make websites accessible to all users, including those with disabilities, by following accessibility guidelines and best practices.

8. Version Control: Web developers use version control systems like Git to track changes in code, collaborate with others, and easily roll back to previous versions if needed.

Web development continues to evolve rapidly, with new frameworks, libraries, and tools emerging regularly. Staying up-to-date with the latest trends and best practices is essential for web developers to create efficient, secure, and user-friendly websites in today's digital landscape.`}></textarea>
    </div>
  );
}
