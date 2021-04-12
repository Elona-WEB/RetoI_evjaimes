import React from "react";

const state = {
  name: "Asesor comercial de hipermercado",
  company: "Schneider Electric",
  salary: "$4.5 a $5.5 millones",
  city: "Bogotá, Colombia",
};

const Job = () => {
  return <div>{renderOffer()}</div>;
};

const renderOffer = () => {
  return (
    <div>
      <h2>{state.name}</h2>
      <h3>{state.company}</h3>
      <h4>{state.salary}</h4>
      <h5>{state.city}</h5>
    </div>
  );
};

export default Job;
