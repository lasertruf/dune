import React, { Component } from "react";
import { West } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  pathname = window.location.pathname;
  render() {
    return (
      <div className="w-full mt-2 flex flex-col-reverse md:flex-row lg:flex-row px-4 justify-between items-center sm:flex-col-reverse  fixed overflow-x-hidden ">
       


        <nav className="flex justify-start items-center w-full  overflow-auto scrollbar-none">
      
        
         
          <NavLink to="/characters" activeClassName="active">
          <h1 className="text-3xl m-5 bg-gray-100 p-2 opacity-85 rounded-lg shadow-md">
          Characters
          </h1>
          </NavLink>

          <NavLink to="/organizations" activeClassName="active">
          <h1 className="text-3xl m-5 bg-gray-100 p-2 opacity-85 rounded-lg shadow-md">
          Organizations
          </h1>
          </NavLink>

          <NavLink to="/lore" activeClassName="active">
          <h1 className="text-3xl m-5 bg-gray-100 p-2 opacity-85 rounded-lg shadow-md">
          Lore
          </h1>
          </NavLink>

          <NavLink to="/timeline" activeClassName="active">
          <h1 className="text-3xl m-5 bg-gray-100 p-2 opacity-85 rounded-lg shadow-md">
          Timeline
          </h1>
          </NavLink>
        
      
        </nav>

        <div className="  ">
          <h1>DUNE WIKI</h1>
        </div>

      </div>

      
    );
  }
}

export default Header;
