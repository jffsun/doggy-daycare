import React from 'react';


export default function Card(props) {
  const cardStyle = {
    width: '25rem',
  };


  return (
    <div className="container2">
    
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.image}
          alt="Pet Picture"
          height="150px"
        />
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-text">Age: {props.age}</p>
          <p className="card-text">Gender: {props.gender}</p>
          <p className="card-text">Medication: {props.medication}</p>

        </div>
      </div>
    </div>
  );
}
