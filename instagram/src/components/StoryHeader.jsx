import React from "react";
import styled from "styled-components";

export default function StoryHeader() {
  return (
    <>
      <Container>
        <Content>
          <Wrapper>
            <Logo>
              <img
                src="img1.jpg"
                alt=""
              />
            </Logo>
            <div>
                shahee_rrk
            </div>
          </Wrapper>
          <Wrapper>
            <Logo>
              <img src="img2.jpg" alt="" />
            </Logo>
            <div>
                call_me_ho...
            </div>
          </Wrapper>
          <Wrapper>
            <Logo>
              <img src="img3.jpg" alt="" />
            </Logo>
            <div>
                a_rehman_...
            </div>
          </Wrapper>
        </Content>
      </Container>
    </>
  );
}

let Container = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  background-color: #000;
`;

let Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  padding: 30px 15px 0px 6rem;
  gap: 30px;
`;

let Wrapper = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  /* border: 1px solid red; */

  div{
    text-align: center;
    font-size: 13px;
    
    color: #9b9b9b;
  }
`;

let Logo = styled.div`
width: 100%;
height: 100%;
margin-bottom: 8px;
img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;

}
`;
