import React, { Component } from "react";
import { loreData } from "./loreData";

class Lore extends Component {
  state = {};
  loreData = loreData
  render() {
    return (
      <div>
   <div className="w-full flex justify-center  ">
        <div className="w-full flex mt-5 justify-start lg:px-20 sm:px-0 md:px-10 card-solo items-center">
          <div className="w-full flex flex-wrap justify-center items-stretch hide-scroll">
                   {this.loreData.map((lore) => (
                <div key={lore.title} className="flex justify-start">
                  <div className="rounded-xl shadow-md m-2 w-80 bg-white opacity-85  flex-col flex justify-evenly ">
                    <div className="p-4 pb-0 text-xl">{lore.title}</div>
                    <div className="p-4 text-gray-700 text-md">{lore.desc}</div>
                    <img
                      className="rounded-2xl relative object-cover p-2 mb-1 h-56 w-80"
                      src={lore.src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lore;
