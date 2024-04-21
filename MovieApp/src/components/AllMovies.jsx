import React from 'react'
import SearchBar from './SearchBar'
import Trending from './Trending'
import Popular from './Popular'
import styled from 'styled-components'

export default function AllMovies() {
    return (
        <>
            <Container>
                <Content>
                    <Trending/>
                    <Popular/>
                </Content>
            </Container>
        </>
    )
}


let Container = styled.div`
width: 100%;
height:100%;

`
let Content = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`