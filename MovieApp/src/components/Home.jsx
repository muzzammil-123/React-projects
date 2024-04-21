import React from 'react'
import styled from 'styled-components'
import Carousel from './Slider'
import SearchBar from './SearchBar'
import Section from './Section'
import TrendingSlider from './TrendingSlider'
import Nav from './Nav'
export default function Home() {
    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <SearchBar />
                    <Carousel />
                    <Section />
                    <TrendingSlider />
                </Content>
            </Container>
        </>
    )
}


let Container = styled.div`
width: 100%;
height: 100vh;
background-color: #1f1e24;
`

let Content = styled.div`
width:100%;
height:100%;
`
