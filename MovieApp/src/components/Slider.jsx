import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Trending from '../Trending'
import store from '../store/Store'
import { Link } from 'react-router-dom'
export default function ImgSlider() {
    let [data] = useState(Trending)
    let { baseUrl } = useContext(store)
    let setting = {
        // dots: true,
        infinite: true,
        speed: 400,
        slideToShow: 1,
        slideToScoll: 1,
        autoplay: true
    }
    return (
        <>


            <Carousel {...setting}>
                {data.map((item, index) => {
                    return (
                        <Wrap key={index}>
                            <Link to={`/movie/${item.id}`}>
                                <img src={`${baseUrl}${item.backdrop_path}`} alt="" />
                                <Description>
                                    <p>{item.title}</p>
                                    <Overview>
                                        {item.overview.length > 150 ? (
                                            <span>
                                                {item.overview.slice(0, 200)}
                                                &nbsp; <span style={{ color: 'blue' }}>...more</span>
                                            </span>
                                        ) : (
                                            item.overview
                                        )}
                                    </Overview>
                                
                                </Description>
                                <GradientOverlay />
                            </Link>
                        </Wrap>
                    )
                })}
            </Carousel>

        </>
    )
}




const Carousel = styled(Slider)`
    margin-top:20px ;
    
    &> button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        
            &:hover{
                    opacity: 1;
                    transition: opacity 0.2s ease 0s;
            }
    }

    ul li button{
        &:before{
            font-size: 12px;
            color: rgb(150,158,171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left: -75px;
    }

    .slick-next{
        right: -75px;
    }
    `
const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)); /* Adjust opacity for darker gradient */
    border-radius: 4px;
    opacity: 1; /* Show by default */
    transition: opacity 0.3s ease; /* Add transition for smooth visibility change */
    z-index: 2; /* Ensure the overlay is above the image */
`

let Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    position: relative; /* Ensure proper positioning for z-index to work */
    overflow: hidden; /* Ensure child elements don't overflow */
    /* height: 100%; */
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)); linear gradient from top to bottom */


    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        color: white;
        z-index: 1; /* Ensure links are above the overlay */
    }

    img{
        width: 100%;
        height: 500px;
        z-index: 0; /* Ensure images are behind the overlay */
    }

    &:hover ${GradientOverlay} {
        opacity: 1;
    }
`


let Description = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    
    p{
        color: white;
        font-size: 4rem;
        font-weight: 900;
        margin: 8rem 2.5rem 1rem;
        // line-height: 1.5rem;
        // max-width: 90%;
        overflow: hidden;        
    }
`

let Overview = styled.div`
font-size: 1.2rem;
margin: 0rem 2.5rem;
max-width: 700px;
// border: 1px solid white;
`
