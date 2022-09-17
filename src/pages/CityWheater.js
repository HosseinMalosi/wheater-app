import React from "react";
import { useParams } from "react-router-dom";

const CityWheater = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.cityName}</div>;
  
};

export default CityWheater;
