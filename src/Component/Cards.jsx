import React from "react";
import Card from "./Card";

export const Cards = ({ course }) => {
  let allCourses;

  if (course) {
    allCourses = Object.values(course).flat();
  } else {
    allCourses = [];
  }

  return (
    <div
      className="w-11/12 max-w-6xl mx-auto grid gap-6 py-6
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      {allCourses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
};
