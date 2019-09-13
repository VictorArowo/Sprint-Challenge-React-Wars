import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    border-radius: 50%;
    color: white;
    background-color: black;
    margin: auto auto;
    border: none;
    border: 2px solid white;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      outline: none;
    }

    &:disabled {
      transform: scale(1);
      cursor: not-allowed;
    }
  }
`;

const Header = styled.div`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-size: 70px;
  margin-bottom: 20px;
  text-align: center;
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
        <Header>React Wars</Header>
        <Container>
          <button
            className="button"
            disabled={!characterData.previous}
            onClick={handleClick}
          >
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
