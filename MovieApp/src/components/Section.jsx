// import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";


export default function Section() {

  return (
    <>
      <Container>
        <Content>
          <Header>
            <Heading>Trending</Heading>
          <DropDown/>
          </Header>
        </Content>
      </Container>
    </>
  );
}
let Container = styled.div`
  width: 100%;
`;
let Content = styled.div`
  width: 100%;
  height: 100%;
`;

let Header = styled.div`
  width: 100%;
  padding: 1.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
`;

let Heading = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;
