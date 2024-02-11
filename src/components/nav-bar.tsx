"use client";

import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function handleClick() {
  alert("clicked");
}

export default function NavBar() {
  let [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <div className="container">
      <div className="flex justify-between py-5">
        <h1 className="text-2xl">To-Do App</h1>
        <div>
          <div className="inline-block sm:hidden align-middle">
            <button className="align-middle" onClick={() => setIsOpen(!isOpen)}>
              <FaPlusCircle />
            </button>
          </div>
          <div>
            <form className="hidden sm:block">
              <Form />
            </form>
          </div>
        </div>
      </div>
      {isOpen && <Form variant="mobile" />}
    </div>
  );
}

const Form = ({ variant }: { variant?: "desktop" | "mobile" }) => {
  return (
    <div className={`flex gap-3 ${variant === "mobile" && "sm:hidden"}`}>
      <input
        className="bg-black border border-gray-300 text-gray-100 text-sm rounded-lg block p-2.5 w-2/3"
        placeholder="What needs to be done?"
      />
      <button
        className="border border-white rounded-lg hover:bg-gray-800 font-semibold py-2 px-4 w-1/3"
        onClick={handleClick}
      >
        {variant === "mobile" ? "Add" : "Add Entry"}
      </button>
    </div>
  );
};
