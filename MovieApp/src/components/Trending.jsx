import React, { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import TrendingSlider from "./TrendingSlider";
import data from "../Trending";
import Card from "./Card";
import store from "../store/Store";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Trending() {
  let [originalData] = useState(data);
  let [database, setDatabase] = useState(originalData);
  let { baseUrl, search } = useContext(store);
  console.log(originalData);

  let [skeleton, setSkeleton] = useState(true)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setSkeleton(false)
    }, 2000)
    return () => clearTimeout(timeout);
  })

  return (
    <>
      <Container>
        <Content>
          <SearchBar />
          <TrendingMovie>
            {skeleton ? (
              database.map((item, index) => {
                return (
                  <Box key={index}>
                    <Skeleton animation="wave" direction="1rt" baseColor="#000" count={1} width={195} height={200} />
                  </Box>
                )
              })
            ) :

              database
                .filter((item) => {
                  return item.title.toLowerCase().includes(search.toLowerCase());
                })
                .map((item, index) => {
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
          </TrendingMovie>

        </Content>
      </Container>
    </>
  );
}

let Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1f1e24;
`;

let Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

let TrendingMovie = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
`;

let Wrapper = styled.div`
  flex-shrink: 0;
  width: 250px;
  margin: 0px auto;
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
let Box = styled.div`
  padding: 0px 0px 0px 30px;
`