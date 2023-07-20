import React from "react";

export default function BlogsNotFound() {
  return (
    <section className="text-xl text-white flex items-center justify-center h-[52vh]">
      <div className="flex items-center gap-5">
        <h1 className="font-bold text-2xl">Sorry</h1>
        <div className="h-10 w-px bg-white"></div>
        <p className="text-base">We don't find any blogs.</p>
      </div>
    </section>
  );
}
