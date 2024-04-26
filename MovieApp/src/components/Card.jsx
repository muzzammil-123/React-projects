import React, { useContext, useState } from "react";
import styled from "styled-components";
import store from "../store/Store";
import Trending from "../Trending";
import { Link } from "react-router-dom";
export default function Card() {
  const { baseUrl } = useContext(store);
  let [orginalDatabase] = useState(Trending);
  let [database, setDatabase] = useState(orginalDatabase);
  return (
    <>
      <Container>
        <Content>
          {database.map((item, index) => {
            return (
              <Wrapper key={index}>
                <Link to={`/movie/${item.id}`}>
                  <CardImage>
                    <img src={`${baseUrl}${item.poster_path}`} alt="" />
                  </CardImage>
                  <CardTitle>
                    {" "}
                    {item.title.length > 12
                      ? `${item.title.slice(0, 13)}...`
                      : item.title}
                  </CardTitle>
                </Link>
              </Wrapper>
            );
          })}
        </Content>
      </Container>
    </>
  );
}

let Container = styled.div`
  width: 100%;
`;
let Content = styled.div`
  width: auto; /* Adjust width as needed */
  display: flex;
  gap: px;
  align-items: center;
  padding: 1.5rem 2rem 0px;
  overflow-x: auto; /* Enable overflow on the x-axis */
  white-space: nowrap; /* Prevent wrapping */
  &::-webkit-scrollbar {
    width: 12px;
    // border:1px solid white;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 6px;

    &:hover {
      background-color: #6556cd;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: #000;
    border-radius: 6px;
    display: none;
  }
`;

let Wrapper = styled.div`
  flex-shrink: 0;
  width: 250px;
  display: flex;
  flex-direction: column;
`;

let CardImage = styled.div`
  width: 198px;
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
let CardTitle = styled.div`
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
  height: 3rem; /* Limit the height */
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Show ellipsis for overflow text */
`;
