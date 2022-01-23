import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-black"
            className="inflex-flex items-center py-6 px-2 mr-3 text-white hover:text-black hover:scale-150 text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-2 my-6 rounded text-red-200 hover:text-black"
            activeClassName="text-black bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-2 my-6 rounded text-red-200 hover:text-black"
            activeClassName="text-black bg-red-700"
          >
            Blog
          </NavLink>


          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-2 my-6 rounded text-red-200 hover:text-black"
            activeClassName="text-black bg-red-700"
          >
            About
          </NavLink>
          <NavLink
            to="/cv"
            className="inline-flex items-center py-3 px-2 my-6 rounded text-red-200 hover:text-black"
            activeClassName="text-black bg-red-700"
          >
            CV
          </NavLink>
        </nav>
        <div className="inline-grid grid-cols-1 gap-4  my-2">
          <SocialIcon
            url="https://twitter.com/Lloret821"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 15, width: 15 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/lloret82/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 15, width: 15 }}
          />
          <SocialIcon
            url="https://github.com/lloret82"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 15, width: 15 }}
          />
        </div>
      </div>
    </header>
  );
}
