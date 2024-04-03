import React from 'react'
import request from '../Netflix-data'
import Row from './Row'
import ImgSlider from './ImgSlider'
import styled from 'styled-components'
export default function Home({movieDetail}) {
  
  return (
    <>
    <Container>
      
    <ImgSlider/>
        <Row movieDetail={movieDetail} title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
        <Row movieDetail={movieDetail} title="Trending" fetchUrl={request.fetchTrending}/>
        {/* <Row title="Top Rated" fetchUrl={request.fetchTopRated}/> */}
        <Row movieDetail={movieDetail} title="Action Movies" fetchUrl={request.fetchActionMovies}/>
        <Row movieDetail={movieDetail} title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
        <Row movieDetail={movieDetail} title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
        <Row movieDetail={movieDetail} title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
        <Row movieDetail={movieDetail} title="Documentraies" fetchUrl={request.fetchDocumentaries}/>
    </Container>
    </>
  )
}
let Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
/* top: 72px; */
padding: calc(0vw + 5px);
`