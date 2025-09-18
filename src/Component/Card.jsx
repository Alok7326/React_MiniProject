import React from "react";

const Card = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition duration-300">
      {/* Image Section */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={course.image.url}
          alt={course.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800 mb-2">
          {course.title}
        </p>
        <p className="text-sm text-gray-600 line-clamp-3">
          {course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
