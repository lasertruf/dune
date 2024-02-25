import React, { Component } from "react";
import { charactersData } from "./charactersData";
import { West } from "@mui/icons-material";

class Characters extends Component {
  characters = charactersData;
  render() {
    return (
      <div className="container characters ">
        <div className="w-full flex justify-start px-20  items-center">
          <div className="w-full  flex flex-wrap justify-stretch items-stretch hide-scroll ">
            {this.characters.map((ch) => (
              <div key={ch.name} className="flex justify-start">
                <div className="rounded-xl shadow-md m-2 w-80 bg-white opacity-85  flex-col flex justify-evenly ">
                    <div className="p-4 pb-0 text-xl">{ch.name}</div>
                    <div className="p-4 text-gray-700 text-md">{ch.desc}</div>
                    <img className="rounded-2xl relative object-cover p-2 mb-1 h-56 w-80" src={ch.src}  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
