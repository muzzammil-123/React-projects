import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
export default function ImgSlider() {
    let setting = {
        // dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScoll: 1,
        autoplay: true
    }
    return (
        <>
            

                <Carousel {...setting}>
                    <Wrap>
                        <a href="#">
                            <img src="/images/bg1.jpg" alt="" />
                            <GradientOverlay/>
                        </a>
                    </Wrap>
                    <Wrap>
                        <a href="#">
                            <img src="/images/bg2.jpg" alt="" />
                            <GradientOverlay/>
                        </a>
                    </Wrap>
                    <Wrap>
                        <a href="#">
                            <img src="/images/bg3.jpg" alt="" />
                            <GradientOverlay/>
                        </a>
                    </Wrap>
                    <Wrap>
                        <a href="#">
                            <img src="/images/bg4.jpg" alt="" />
                            <GradientOverlay/>
                        </a>
                    </Wrap>
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

let Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    /* height: 100%; */
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)); linear gradient from top to bottom */


    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
    }

    img{
        width: 100%;
        height: 100%;
    }

    /* &:hover{
        padding: 0;
        border: 4px solid rgba(249, 249, 249, .8);
        transition-duration: 300ms;
    } */
`


const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)); /* Adjust opacity for darker gradient */
    border-radius: 4px;
    opacity: 1;
`
