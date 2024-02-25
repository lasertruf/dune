import React, { Component } from "react";
import { West } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  pathname = window.location.pathname;
  render() {
    return (
      <div >
        {/* <West className="ml-3 relative cursor-pointer"></West> */}
       


        <nav className="flex justify-start items-center fixed ml-8">
      
        
          {/* <NavLink exact to="/" activeClassName="active">
          <h1 className="text-3xl m-5 bg-gray-300  p-2 opacity-85 rounded-lg shadow-md">
          Home
          </h1>
          </NavLink> */}
        
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
        
      
    </nav>

      </div>

      
    );
  }
}

export default Header;
