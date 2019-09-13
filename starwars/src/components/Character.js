import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  background: grey;
  padding: 20px;
  margin: 10px;
  color: white;
  border-radius: 20px;
  margin-bottom: 20px;
`;
const Character = props => {
  return (
    <Card>
      <h1>{props.data.name}</h1>
      <p>{props.data.birth_year}</p>
      <p>{props.data.gender}</p>
      <p>Home World</p>
      <p>Films</p>
    </Card>
  );
};

export default Character;
