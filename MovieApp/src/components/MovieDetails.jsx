import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import store from "../store/Store";
import styled from "styled-components";
import data from "../AllMovie";
import TrendingSlider from "./TrendingSlider";
export default function MovieDetails() {
  let { id } = useParams();
  let { baseUrl } = useContext(store);
  let movieArray = [
    data.find((item) => {
      return item.id == id;
    }),
  ];

  console.log(movieArray);
  return (
    <>
      {movieArray.map((item) => {
        return (
          <Container>
            <Backdrop>
              <img src={`${baseUrl}${item.backdrop_path}`} alt="" />
            </Backdrop>
            <Gradient />
            <Content>
              <ImageTitle>
                <img src={`${baseUrl}${item.poster_path}`} alt="" />
              </ImageTitle>
              <ContentMeta>
                <Controls>
                  <Player>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                  </Player>
                  <Trailer>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                  </Trailer>
                  <AddList>
                    <span></span>
                    <span></span>
                  </AddList>
                  <GroupWatch>
                    <div>
                      <img src="/images/group-icon.png" alt="" />
                    </div>
                  </GroupWatch>
                </Controls>
                <Subtitle>{item.title}</Subtitle>
                <Description>{item.overview}</Description>
              </ContentMeta>
              <Wrapper>
                <TrendingSliderHeader>
                  <h2>Trending Movies</h2>
                </TrendingSliderHeader>
                <TrendingSlider />
              </Wrapper>
            </Content>
          </Container>
        );
      })}
    </>
  );
}

let Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

let Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

let Gradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 1;
`;

let Content = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid white; */
  margin-top: 10rem;
  background: transparent;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;

let ImageTitle = styled.div`
  width: 100%;
  background: transparent;
  height: 100%;
  /* border: 2px solid white; */
  position: relative;
  z-index: 200;
  img {
    width: 200px;
    height: 300px;
    z-index: 200;
  }
`;

let ContentMeta = styled.div`
  max-width: 874px;
  background: none;
  z-index: 200;
`;
let Controls = styled.div`
  background: none;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

let Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  background: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  background: none;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
    background: none;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
  span {
    background: none;
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0x 22px;
    background: none;
    font: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
      background: none;
    }

    span {
      background: none;
    }
  }
`;
let Trailer = styled(Player)`
  background: none;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

let AddList = styled.div`
  background: none;
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

let GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;

  div {
    height: 40px;
    width: 40px;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;
  }

  img {
    width: 100%;
  }
`;

let Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 24px;
  min-height: 20px;
  background: none;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

let Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  background: none;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    background: none;
    font-size: 14px;
  }
`;

let Wrapper = styled.div`
  z-index: 200;
  width: 95%;
  height: 100%;
  background: #000000bd;
`;

let TrendingSliderHeader = styled.div`
  z-index: 200;
  overflow: hidden;
  background: none;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  padding-top: 20px;
  h2 {
    font-size: 30px;
    overflow: hidden;
    color: rgb(249, 249, 249);
  }
`;
