import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
export default function Details({ page, play, handleTrailer, trailerUrl }) {
    let baseUrl = "https://image.tmdb.org/t/p/original/"
    let { id } = useParams()

    const filteredArray = page.filter((item) => {
        let filterOut = item.id == id;
        return filterOut;
    });

    console.log(filteredArray)

    return (
        <>

            {filteredArray.map((item) => {
                return (
                    <Container>
                        <Background>
                            <img src={`${baseUrl}${item.backdrop_path}`} alt="" />
                        </Background>
                        <ImageTitle>
                            <img src={`${baseUrl}${item.poster_path}`} alt="" />
                        </ImageTitle>
                        <ContentMeta>
                            <Controls>
                                <Player>
                                    <img src="/images/play-icon-black.png" alt="" />
                                    <span>Play</span>
                                </Player>
                                <Trailer onClick={() => { handleTrailer(item) }}>
                                    <img src="/images/play-icon-white.png" alt="" />
                                    <span>Trailer</span>
                                </Trailer>
                                <AddList>
                                    <span></span>
                                    <span></span>
                                </AddList>
                                <GroupWatch>
                                    <div>
                                        <img src="/images/group-icon.png" alt="" />
                                    </div>
                                </GroupWatch>
                            </Controls>
                            <Subtitle>
                                {item.original_name}
                            </Subtitle>
                            <Description>
                                {item.overview}
                            </Description>
                        </ContentMeta>
                        {play && <iframe width="1000" height="500" style={{marginLeft: '15rem'}} src={item.youtube_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
                    </Container>
                )
            })}
        </>
    )
}


let Container = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
background: none;
padding: 0 calc(3.5vw + 5px);
`

let Background = styled.div`
    left: 0px;
    opacity: .8;
    position: fixed;
    background: none;
    right: 0px;
    top: 0px;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;
        background: none;


        @media (max-width: 768px){
            width: initial;
        }
    }
`

let ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    img{
        max-width: 600px;
        min-width:200px;
        width: 15vw;
    }
`

let ContentMeta = styled.div`
    max-width: 874px;
    background: none;
`
let Controls = styled.div`
background: none;
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`


let Player = styled.button`
font-size: 15px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
height: 56px;
border-radius:4px;
align-items: center;
display: flex;
cursor: pointer;
justify-content: center;
background: none;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgb(249, 249, 249);
border: none;
color: rgb(0,0,0);
img{
    width: 32px;
}

&:hover{
    background: rgb(198,198,198);
}

@media (max-width : 768px) {
    height: 45px;
    padding: 0x 22px;
    font: 12px;
    margin: 0px 10px 0px 0px;
    
    img{
        width: 25px ;
    }
}
`
let Trailer = styled(Player)`
    background: rgba(0, 0,0 ,0.3);
    border: 2px solid rgb(249,249,249);
    color: rgb(249, 249, 249);
`

let AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span{
        background-color: rgb(249,249,249);
        display: inline-block;

        &:first-child{
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2){
                height: 16px;
                transform: translate(-8px) rotate(0deg);
                width: 2px;
        }
    }
`

let GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;

    div{
        height: 40px;
        width: 40px;
        background-color: rgb(0,0,0);
        border-radius: 50%;
    }

    img{
        width: 100%;
    }
`

let Subtitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;



@media (max-width: 768px){
    font-size: 12px;
}
`

let Description = styled.div`
line-height: 1.4;
font-size: 20px;
padding: 16px 0px;
color:  rgb(249, 249, 249);
@media (max-width: 768px){
    font-size: 14px;
}
`