import React, { useEffect, useState } from "react";
import { Cards } from "./Component/Cards";
import Filter from "./Component/Filter";
import Navbar from "./Component/Navbar";
import { filterData, apiUrl } from "./data";
const App = () => {
  const [course, setCourse] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourse(output.data);
    } catch (error) {
      console.error("Something is wrong:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        <Cards course={course} />
      </div>
    </div>
  );
};

export default App;
