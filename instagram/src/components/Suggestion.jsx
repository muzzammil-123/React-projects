import React from "react";
import styled from "styled-components";

export default function Suggestion() {
  return (
    <>
      <Container>
        <Content>
          <Wrapper>
            <User>
              <Image>
                <img src="img4.jpg" alt="" />
              </Image>
              <div>
                <UserName>_muz_zam_mil</UserName>
                <Name>MuzzammilSiddiqui</Name>
              </div>
            </User>
            <Button>Switch</Button>
          </Wrapper>
          <Wrap>
            <Parent>
              <Heading>Suggested for you</Heading>
              <SeeAll>See All</SeeAll>
            </Parent>
            <Wrapper style={{ padding: "0px 36px 0px 0px", marginTop: "15px" }}>
              <User>
                <Image>
                  <img src="img6.jpg" alt="" />
                </Image>
                <div>
                  <UserName>tried._.zainn</UserName>
                  <Name style={{ fontSize: "12px" }}>Suggested for you</Name>
                </div>
              </User>
              <Button>Follow</Button>
            </Wrapper>
            <Wrapper style={{ padding: "0px 36px 0px 0px", marginTop: "15px" }}>
              <User>
                <Image>
                  <img src="img7.jpg" alt="" />
                </Image>
                <div>
                  <UserName>user.__.not.found</UserName>
                  <Name style={{ fontSize: "12px" }}>Suggested for you</Name>
                </div>
              </User>
              <Button>Follow</Button>
            </Wrapper>
            <Wrapper style={{ padding: "0px 36px 0px 0px", marginTop: "15px" }}>
              <User>
                <Image>
                  <img src="img8.jpg" alt="" />
                </Image>
                <div>
                  <UserName>mussab.khurram</UserName>
                  <Name style={{ fontSize: "12px" }}>Suggested for you</Name>
                </div>
              </User>
              <Button>Follow</Button>
            </Wrapper>
            <Footer>
              <Item>About . Help . Press . API . Jobs . Terms . Locations . Language . Meta Verified</Item>
              <Copy>© 2024 INSTAGRAM FROM META</Copy>
            </Footer>
          </Wrap>
        </Content>
      </Container>
    </>
  );
}

let Container = styled.div`
  width: 30%;
  height: 100%;
  position: relative;
  background-color: #000;
`;

let Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px 0px 0px 15px;
`;

let Wrapper = styled.div`
  width: 319px;
  margin-top: 35px;
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 16px;
`;

let User = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

let UserName = styled.div`
  font-weight: 600;
  font-size: 13px;
`;
let Name = styled.div`
  color: #a8a8a8;
  font-size: 14px;
  margin-top: 3px;
`;

let Image = styled.div`
  width: 45px;
  height: 45px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

let Button = styled.div`
  color: #0095f6;
  font-size: 12px;
  font-weight: 500;
`;

let Wrap = styled.div`
  width: 319px;
  margin-top: 24px;
  height: 200px;
  margin-bottom: 8px;
  padding: 0px 16px;
  /* background-color: red; */
`;

let Parent = styled.div`
  width: 100%;
  height: 19px;
  padding: 4px 2px;
  display: flex;
  justify-content: space-between;
`;

let Heading = styled.div`
  color: #a8a8a8;
  font-weight: 500;
  font-size: 14px;
`;
let SeeAll = styled.div`
  font-size: 12px;
  font-weight: 500;
`;


let Footer = styled.div`
  width: 95%;
  color: #a8a8a8;
  margin-top: 20px;
  `
  
  
  let Item = styled.div`
  font-size:12px;
  line-height: 1.5;
  color: #737373;
  `
  
  let Copy = styled.div`
  margin-top: 20px;
  /* color: #a8a8a8; */
  color: #737373;
  font-size: 12px;
`