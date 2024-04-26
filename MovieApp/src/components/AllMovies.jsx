import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import store from "../store/Store";
import data from "../AllMovie";
import { Link } from "react-router-dom";
export default function AllMovies() {
  let { search, baseUrl } = useContext(store);
  let [originalData] = useState(data);
  let [database, setDataBase] = useState(originalData);

  let filterResult = database.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <Container>
        <Content>
          <SearchBar />
          <Movie>
            {filterResult.length === 0 ? (
              <Message>Try another Keyword</Message>
            ) : (
              filterResult.map((item, index) => {
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
              })
            )}
          </Movie>
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

let Movie = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

let Message = styled.div`
  color: white;
  overflow: hidden;
  text-align: center;
  /* border: 1px solid white; */
  width: 100%;
  font-size: 40px;
  font-weight: 500;
  padding-top: 10rem;
  height: 80vh;
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
