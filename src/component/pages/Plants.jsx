import React, { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";
import Loading from "./Loading";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading plants:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen w-11/12 mx-auto mt-6">
      <h2 className="text-3xl font-bold text-center mb-8">All Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        { 
        plants.map((plant) => (
          <DetailsCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
