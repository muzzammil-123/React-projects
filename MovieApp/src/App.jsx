import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './store/Store';
import styled from 'styled-components';
import Routing from './utils/Routing';

export default function App() {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onChange = (e) => {
    setSearch(e);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []); // Run only once on component mount

  return (
    <Store.Provider value={{ baseUrl, onChange, search }}>
      <Container>
        {isLoading ? (
          <Loader>
            <img src="/loader.gif" alt="" />
          </Loader>
        ) : (
          <Routing />
        )}
      </Container>
    </Store.Provider>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh: 
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black !important;
  align-items: center;
  img{
    object-fit:cover;
  }
`;
