import React from "react";

const PersonCard = ({ person }) => {
  const { picture, fname, lname, age, city, bool, skills } = person;
  console.log(person);
  return (
    <div className="card">
      <img className="picture" src={picture} alt="picture" />
      <h2>
        {fname} {lname}
      </h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Status: {bool ? "Active" : "Inactive"}</p>
      <h3>Skills:</h3>
      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default PersonCard;
