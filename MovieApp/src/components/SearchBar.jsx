import React from "react";
import styled from "styled-components";
export default function SearchBar() {
  return (
    <>
      <Container>
        <Icon>
          <img src="/search.svg" alt="" />
        </Icon>
        <input type="text" placeholder="Search" />
      </Container>
    </>
  );
}


let Container = styled.div`
width: 500px;
height: 50px;
display: flex;
margin: 20px 0px;
align-items: center;
gap: 50px;
justify-content: center;

input{
    width: 25%;
    background-color: transparent;
    border: none;
    color: white;   
    font-size: 1.5em;

    &:focus{
        outline: none;
    }
}

input::placeholder{
    color: white;
}
`

let Icon = styled.div`
    width: 30px;

    img{
        width: 100%;
    }
`