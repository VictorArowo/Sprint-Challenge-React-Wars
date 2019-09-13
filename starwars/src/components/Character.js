import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Card = styled.div`
  width: 250px;
  height: 250px;
  background: #e1d3c5;
  border: 3px solid black;
  padding: 20px;
  margin: 10px;
  color: #443e3e;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const Character = props => {
  useEffect(props => {
    // axios.get(props.data.homeworld).then(res => console.log(res));
    props && console.log(props.data.homeworld);
  }, []);
  return (
    <Card>
      <h1>{props.data.name}</h1>
      <h3>Birth Year - {props.data.birth_year}</h3>
      <h3>Gender - {props.data.gender}</h3>
      {/* <p>Home World {props.data.homeworld}</p>
      <p>Films</p> */}
    </Card>
  );
};

export default Character;
