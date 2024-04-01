import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import data from '../disneyPlusMovieData'
import store from '../store/Store'
export default function NewDisney() {
    let {detailsPage} = useContext(store)
    return (
        <>
            <Container>
                <h4>New to Disney</h4>
                <Content>
                    {data.filter((item) => {
                        return item.type === 'new'
                    })
                        .map((item, index) => {
                            return (
                                <Wrap key={index} onClick={()=>{detailsPage(item)}}>
                                    {item.id}
                                    <Link to={`/details/${item.id}`}>
                                        <img src={item.cardImg} alt="" />
                                    </Link>
                                </Wrap>

                            )
                        })}
                </Content>
            </Container>
        </>
    )
}
const Container = styled.div`
    padding: 0 0 26px;
 `

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(2. minmax(0,1fr));
    }
 `

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
border: 3ps solid rgba(249, 249, 2491 0.1);

img{
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
}

&:hover{
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color:rgba(249, 249, 249, 0.8);
}
;
`