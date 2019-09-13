import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
`;

const Characters = props => {
  return (
    <Container>
      {props.data.map(el => (
        <Character data={el} key={el.url} />
      ))}
      ;
    </Container>
  );
};

export default Characters;
