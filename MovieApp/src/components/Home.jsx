import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
export default function Home() {
    return (
        <>
            <Container>
                <Content>
                    <SearchBar>
                        <Icon><img src="/search.svg" alt="" /></Icon>
                        <input type="text" placeholder="Search" />
                    </SearchBar>
                    <Carousel/>
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

let SearchBar = styled.div`
width: 500px;
height: 50px;
display: flex;
margin: 20px 0px;
align-items: center;
gap: 50px;
justify-content: center;

input{
    width: 25%;
    background-color: transparent;
    border: none;
    color: white;   
    font-size: 1.5em;

    &:focus{
        outline: none;
    }
}

input::placeholder{
    color: white;
}
`

let Icon = styled.div`
    width: 30px;

    img{
        width: 100%;
    }
`