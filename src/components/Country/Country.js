import React from 'react';
import './Country.css';

const Country = (props) => {
  // console.log(props);

  const { name, area, population, region, flags } = props.country;
  return (
    <div className="country">
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Area: {area} km²</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
