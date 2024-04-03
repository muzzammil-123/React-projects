import axios from '../Axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import  { NavLink } from 'react-router-dom'
import Youtube from 'react-youtube'
export default function Row({ title, fetchUrl, movieDetail }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/"
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [])

  console.log(movies)
  return (
    <>
      <div className="row">
        <Title style={{ background: 'transparent' }}>{title}</Title>
        <RowPoster>
          {movies.map((movies) => {
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