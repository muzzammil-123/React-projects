import React from "react";
import styled from "styled-components";
import SuggestedPost from "./SuggestedPost";

export default function Main() {
  return (
    <>
      <Container>
        <Content>
          <Wrapper>
            <Image>
              <img src="tick.png" alt="" />
            </Image>
            <Text>You're all caught up</Text>
            <Span>You've seen all new posts from the past 3 days.</Span>
          </Wrapper>
            <SuggestedPost />
        </Content>
      </Container>
    </>
  );
}

let Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: relative;
`;

let Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

let Wrapper = styled.div`
  width: 470px;
  height: 234px;
  background-color: black;
  margin-bottom: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  flex-direction: column;
  padding: 32px 12px;
  border-bottom: 2px solid #262626;
`;

let Image = styled.div`
  width: 96px;
  height: 96px;
  margin-bottom: 16px;
  img {
    width: 100%;
    height: 100%;
  }
`;

let Text = styled.div`
  text-align: center;
  font-size: 20px;
  color: white;
  margin-bottom: 0.5rem;
`;
let Span = styled.div`
  text-align: center;
  font-size: 14px;
  color: #8a8a8a;
`;
