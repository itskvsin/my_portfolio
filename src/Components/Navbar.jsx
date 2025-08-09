// import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center fixed top-2">
      <div className="w-3/4 backdrop-blur-2xl">
        <nav className="bg-white/20 text-white p-4 flex justify-between items-center rounded-2xl">
          <h1 className="text-2xl font-bold">Kevin's Portfolio</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
