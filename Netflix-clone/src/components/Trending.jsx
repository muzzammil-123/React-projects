import React, { useState } from 'react'
import Data from '../Trending'
import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
export default function Trending({movieDetail}) {
    let [originalData] = useState(Data)
    let [movie, setMovie] = useState(originalData)
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    console.log(movie)
  return (
    <>
         <div className="row">
        <Title style={{ background: 'transparent' }}>Trending</Title>
        <RowPoster>
          {movie.map((movies) => {
            return (
              <NavLink className='wrapper' to={`/movie/${movies.id}`} key={movies.id}>
                <RowPosters key={movies.id} onClick={() => { movieDetail(movies) }} src={`${baseUrl}${movies.poster_path}`} alt={movies.name} />
              </NavLink>
            )
          })}
        </RowPoster>
      </div>
    </>
  )
}



let Title = styled.h2`
/* background: transparent !important; */
  text-align: left;
  margin-left: 10px;
`

let RowPoster = styled.div`
display: flex;
overflow-y: hidden;
overflow-x: scroll ;
background: transparent;
padding: 20px;
position: relative;
&::-webkit-scrollbar {
  display: none;
}
`
let RowPosters = styled.img`
  width: 200px;
  max-height: 300px;
  height: auto;
  object-fit: contain;
  margin-right: 10px;
  transition: transform 450ms;

  &:hover{
    transform: scale(1.08);
  }

`