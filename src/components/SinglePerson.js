import React from 'react';

const SinglePerson = (props) => {
  return (
    <li>
      <img src={props.picture.large} alt={props.name.last} />
      <p><span>Name:</span> {props.name.first} {props.name.last}</p>
      <p><span>Phone:</span> {props.phone}</p>
      <p><span>Email:</span> {props.email}</p>
      <p><span>Nationality:</span> {props.nat}</p>
    </li>
  );
}

export default SinglePerson;