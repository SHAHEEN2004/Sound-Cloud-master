import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Home = () => {
  const { isLoading, allLists } = useSelector((store) => store.playlist);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 items-center gap-2 bg-black px-4 sm:px-10 md:px-40 min-h-[100vh]">
        {allLists.map((item, i) => (
          <Card item={item} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
