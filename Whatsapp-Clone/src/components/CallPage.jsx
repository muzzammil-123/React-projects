import React from "react";
import styled from "styled-components";
import { IoMdCall } from "react-icons/io";
import { BsFillChatSquareFill } from "react-icons/bs";
import Header from "./Header";
import Page from "./Page";


export default function CallPage() {
  return (
    <>
      <Container>
        <Content>
          <Header/>
          <Page/>
        </Content>
      </Container>
    </>
  );
}
let Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

let Content = styled.div`
  position: absolute;
  overflow:hidden;
  top: 85px;
  /* left: 70%; */
  right: 7px;
  border-radius: 50px;
  width: 285px;
  height: 605px;
  background-color: white;
`;
