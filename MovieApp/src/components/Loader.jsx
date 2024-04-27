import React from 'react'
import styled from 'styled-components';

export default function Loader() {
  return (
    <>
      <Container>
            <img src="/loader.gif" alt="" />
          </Container>
    </>
  )
}


const Container = styled.div`
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
