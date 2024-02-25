import React, { Component } from "react";
import { organizationsData } from "./organizationsData";
import { West } from "@mui/icons-material";

class Organizations extends Component {
  organizations = organizationsData;
  render() {
    return (
      <div className="container characters ">
        <div className="w-full flex justify-start px-20  items-center">
          <div className="w-full  flex flex-wrap justify-start items-stretch hide-scroll ">
            {this.organizations.map((org) => (
              <div key={org.title} className="flex justify-start">
                <div className="rounded-xl shadow-md m-2 w-80 bg-white opacity-85  flex-col flex justify-evenly ">
                    <div className="p-4 pb-0 text-xl">{org.title}</div>
                    <div className="p-4 text-gray-700 text-md">{org.desc}</div>
                    <img className="rounded-2xl relative object-cover p-2 mb-1 h-56 w-80" src={org.src}  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Organizations;
