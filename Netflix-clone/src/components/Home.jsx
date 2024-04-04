import React from 'react'
import ImgSlider from './ImgSlider'
import styled from 'styled-components'
import Original from './Original'
import Trending from './Trending'
import ActionMovie from './ActionMovie'
import ComedyMovie from './ComedyMovie'
import HorrorMovie from './HorrorMovies'
import Documentraies from './Documentraies'
export default function Home({ movieDetail }) {

  return (
    <>
      <Container>

        <ImgSlider />
        <Original movieDetail={movieDetail} />
        <Trending movieDetail={movieDetail} />
        <ActionMovie movieDetail={movieDetail} />
        <ComedyMovie movieDetail={movieDetail} />
        <HorrorMovie movieDetail={movieDetail} />
        <Documentraies movieDetail={movieDetail} />
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