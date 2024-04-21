import React, { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import TrendingSlider from './TrendingSlider'
import data from '../Original'
import Card from './Card'
import store from '../store/Store'

export default function Popular() {
    let [originalData] = useState(data)
    let [database, setDatabase] = useState(originalData)
    let { baseUrl } = useContext(store)
    console.log(originalData)
    return (
        <>
            <Container>
                <Content>
                    <TrendingMovie>
                        {database.map((item ,index) => {
                            return (
                                <Wrapper key={index}>
                                    <CardImage><img src={`${baseUrl}${item.poster_path}`} alt="" /></CardImage>
                                    <CardTitle>{item.title}</CardTitle>
                                </Wrapper>
                            )
                        })}
                    </TrendingMovie>
                </Content>
            </Container>
        </>
    )
}

let Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1f1e24;
`

let Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

let TrendingMovie = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
padding-left: 1rem;
`

let Wrapper = styled.div`
flex-shrink: 0;
width: 250px;
margin: 0px auto;
display: flex;
flex-direction: column;
`


let CardImage = styled.div`
    width: 198px;
    height: 300px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
let CardTitle = styled.div`
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
    height: 3rem; /* Limit the height */
    overflow: hidden; /* Hide overflow */
    text-overflow: ellipsis; /* Show ellipsis for overflow text */
`
