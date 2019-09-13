import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import Characters from './components/Characters';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  .button {
    width: 75px;
    height: 75px;
    border-radius: 20px;
    color: white;
    background-color: black;
    margin: auto auto;
  }
`;

const App = () => {
  const [characterData, setCharacters] = useState(null);
  const [url, changeUrl] = useState('https://swapi.co/api/people/?format=json');

  useEffect(() => {
    axios.get(url).then(res => {
      setCharacters(res.data);
      console.log(res.data.results);
    });
    // .then(() => console.log(characterData));
  }, [url]);

  const handleClick = e => {
    e.preventDefault();
    if (characterData.next) changeUrl(characterData.next);
  };

  return (
    characterData && (
      <div>
        <h1 className="Header">React Wars</h1>
        <Container>
          <button className="button" onClick={handleClick}>
            Previous
          </button>
          <Characters data={characterData.results} />
          <button className="button" onClick={handleClick}>
            Next
          </button>
        </Container>
      </div>
    )
  );
};

export default App;
