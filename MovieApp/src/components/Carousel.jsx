import { Button } from 'bootstrap'
import React from 'react'
import styled from 'styled-components'
export default function Carousel() {
    return (
        <>
            <Container>
                <Background>
                    <Content>
                        <Title>
                            Blood For Dust
                        </Title>
                        <Description>
                            Reckless Ricky makes serious money dealing illegal weapons throughout the tri-state area and loves to flaunt it. Traveling salesman Cliff, covers the same territory Ricky runs guns through. Desperate ...more
                        </Description>
                        <Detail>
                            <Megaphone>
                                <img src="/megaphone.svg" alt="" />
                                <span>20-05-2022</span>
                            </Megaphone>
                            <Categories>
                                <img src="/movie-yellow.svg" alt="" />
                                <span>Movie</span>
                            </Categories>
                        </Detail>

                        <Watch>Watch Trailer</Watch>
                    </Content>

                </Background>
            </Container>
        </>
    )
}




let Container = styled.div`
width:100%;
height:100%;
`


let Background = styled.div`
width: 100%;
height:420px;
background-image: url('https://image.tmdb.org/t/p/original//bkENfmxUY3UYsRLizJAhF5IQPvS.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
z-index: -1;
overflow: hidden;
`

let Content = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.71) 100%);
height: 100%;
`

let Title = styled.div`
color: white;
font-size: 40px;
font-weight: Bolder;
margin-top: 100px;
margin-left: 50px;
`

let Description = styled.div`
color: white;
font-size: 16px;
// border: 3px solid black;
width: 720px;
margin-left: 50px;
margin-top: 20px;
margin-right: 50px;

`

let Detail = styled.div`
margin-left: 50px;
margin-top: 20px;
margin-right: 50px;
color: white;
display: flex;
gap: 20px;

`

let Megaphone = styled.div`
display: flex;
gap: 10px;
img{
 width: 20px;   
}
`

let Categories = styled.div`
display: flex;
gap: 10px;
img{
 width: 20px;   
}
`

let Watch = styled.button`
margin-left: 50px;
margin-top: 20px;
margin-right: 50px;
color: white;
background-color: #6556cd;
border: none;
padding: 15px 20px;
border-radius: 5px;
`