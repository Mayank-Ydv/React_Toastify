import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import { apiUrl, filterData } from "./data";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setcourses] = useState(null);
  const [loading, setloading] = useState(true);
  const [category,setcategory] = useState(filterData[0].title);
  async function fetchData() {
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setcourses(output.data);
    } catch (error) {
      toast.error("Network error");
    }
    setloading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-scree flex flex-col bg-bgDark2 h-[100vh] git overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div className="">
        <div>
          <Filter filterData={filterData} category={category} setcategory={setcategory}/>
        </div>
        <div className="w-11/12 max-w-[1200px] flex justify-center items-center mt-2 flex-wrap mx-auto">
          {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
        </div>
      </div>
    </div>
  );
};

export default App;
