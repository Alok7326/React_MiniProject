import React from "react";

const Filter = ({ filterData }) => {
  return (
    <div className="w-full flex flex-wrap justify-center bg-fuchsia-900 items-center gap-4 py-4">
      {filterData.map((item) => {
        return (
          <button
            key={item.id}
            className="px-4 py-2 bg-bgDark text-white border- rounded-xl shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};
export default Filter;
