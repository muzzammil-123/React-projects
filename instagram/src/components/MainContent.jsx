import React from "react";
import styled from "styled-components";
import StoryHeader from "./StoryHeader";
import Main from "./Main";

export default function MainContent() {
  return (
    <>
      <Container>
        <Content>
          <StoryHeader />
          <Main />
        </Content>
      </Container>
    </>
  );
}

let Container = styled.div`
  width: 53%;
  height: 100%;
  position: relative;
  background-color: black;
`;

let Content = styled.div`
  width: 100%;
  height: 100%;
`;
