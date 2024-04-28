import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './store/Store';
import styled from 'styled-components';
import Routing from './utils/Routing';
import Loader from './components/Loader';

export default function App() {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let value;

  const onChange = (e) => {
    setSearch(e);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []); // Run only once on component mount

  let FilterName = (e)=>{
        value = e.target.value
        console.log(value)

  }

  return (
    <Store.Provider value={{ baseUrl, FilterName, onChange, search }}>
      <Container>
        {isLoading ? (
          <Loader/>
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
