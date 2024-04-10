import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function VideoCarousel() {
    const bgVideoSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: 17000, // Disable autoplay, we'll handle it manually
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const textCarouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the speed of text carousel
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Container>
                <Slider {...bgVideoSettings}>
                    <BgVideo>
                        <video autoPlay loop playsInline src="/videos/bg1.webm"></video>
                    </BgVideo>
                    <BgVideo>
                        <video autoPlay loop playsInline src="/videos/bg2.webm"></video>
                    </BgVideo>
                    <BgVideo>
                        <video autoPlay loop playsInline src="/videos/bg3.webm"></video>
                    </BgVideo>
                </Slider>
                <TextCarouselContainer>
                    <Slider {...textCarouselSettings}>
                        <TextSlide>
                            <H6>
                                Model Y Starting at $37,490 After Federal Tax Credit
                            </H6>
                            <Description>
                                Eligible buyers qualify for a $7,500 federal tax credit. Applied at time of Model Y delivery.
                               <br /> <Link style={{textDecoration: 'underline', color: 'white'}} to="">See Details.</Link>
                            </Description>
                            <Button >Shop Available</Button>
                            <BlackButton>Demo Drive</BlackButton>
                        </TextSlide>
                        <TextSlide>
                            <H6>New Model 3</H6>
                            <Description>
                                Reengineered from the ground up, <br />
                                Be the first to get bhind the wheel. Demo drive now.
                            </Description>
                            <Button>Demo Drive</Button>
                            <BlackButton>Custom Order</BlackButton>
                        </TextSlide>
                        <TextSlide>
                            <H6>Find The Tesla For You</H6> 
                            <Description>
                                Discover which model is best for you based on your budget, driving habits and lifestyle.
                            </Description>
                            <Button>Help Me Choose</Button>
                        </TextSlide>
                    </Slider>
                </TextCarouselContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`;

const BgVideo = styled.div`
  width: 100%;
  z-index: -1;
  position: relative;

  video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const TextCarouselContainer = styled.div`
  position: absolute;
  bottom: 60px;
  left: 20px;
  width: 100%; /* Adjust the width of the text carousel container */
  z-index: 10;
`;

const TextSlide = styled.div`
  text-align: left;
  margin-left: 10px;
  width: 100%;
`;

const H6 = styled.p`
  color: white;
  font-size: 40px;
  width: 800px;
  font-weight: bold;
  margin-bottom: 5px;
`;

let Description = styled.p`
    color: white;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 10px;
    
` 

let Button = styled.button`
    margin-top: 24px;
    margin-bottom: 0px;
    padding: 10px 30px;
    margin-right:24px;
    font-size: 14px;
    overflow-y: hidden;
    font-weight: 500;
    border: none;
    width: 200px;
    height: 45px;
    background: rgb(296,296, 296);
    border-radius: 5px;
    `

let BlackButton = styled.button`
margin-top: 24px;
padding: 10px 30px;
margin-right:24px;
font-size: 14px;
overflow-y: hidden;
font-weight: 500;
border: none;
color: white;
width: 200px;
height: 45px;
background-color:rgba(0, 0, 0, 0.728) ;
border-radius: 5px;
`