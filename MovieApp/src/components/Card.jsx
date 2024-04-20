import React from 'react'
import styled from 'styled-components'

export default function Card() {
  return (
    <>
        <Container>
            <Content>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
                <Wrapper>
                    <CardImage><img src="/card.jpg" alt="" /></CardImage>
                    <CardTitle>Dune Blood Blue White Dust 2</CardTitle>
                </Wrapper>
            </Content>
        </Container>
    </>
)
}

let Container = styled.div`
    width: 100%;
`
let Content = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
    /* overflow-x: scroll; */
    padding: 1.5rem;
    flex-wrap: wrap;
    /* white-space: nowrap; */
`

let Wrapper = styled.div`
display:flex;
flex-direction: column;
width: 200px;
/* border: 1px solid white; */
`

let CardImage = styled.div`
    width: 100%;
    overflow: hidden;
    img{
        width: 198px;
        height: 200px;
        object-fit: cover;
    }
`

let CardTitle =  styled.div`
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
`