import React from "react";

export default function Custom404() {
  return (
    <section className="text-xl text-white flex items-center justify-center h-[52vh]">
      <div className="flex items-center gap-5">
        <h1 className="font-bold text-2xl">404</h1>
        <div className="h-10 w-px bg-white"></div>
        <p className="text-base">This page could not be found.</p>
      </div>
    </section>
  );
}
