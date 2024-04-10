import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export default function Navbar() {
    return (
        <nav>
            <Container>
                <Content>
                    <Link to='/'>
                        <LogoWrapper>
                            <img src='/images/logo.svg' alt="" />
                        </LogoWrapper>
                    </Link>
                    <LinkWrapper>
                        <Link style={{ textDecoration: 'none', color: 'white', margin: '0px 8px' }} to='/vehicles'>Vehicles</Link>
                        <Link style={{ textDecoration: 'none', color: 'white', }} to='/energy'>Energy</Link>
                        <Link style={{ textDecoration: 'none', color: 'white', }} to='/charging'>Charging</Link>
                        <Link style={{ textDecoration: 'none', color: 'white', }} to='/discover'>Discover</Link>
                        <Link style={{ textDecoration: 'none', color: 'white', }} to='/shop'>Shop</Link>
                    </LinkWrapper>
                    <HamBurger>
                        <BlurBackground>

                        </BlurBackground>
                        <Link style={{textDecoration: 'none',zIndex: 99999 ,color: 'white'}}>Menu</Link>
                    </HamBurger>
                    <IconWrapper>
                        <img src="/images/help.svg" alt="" />
                        <img src="/images/globe.svg" alt="" />
                        <img src="/images/person.svg" alt="" />
                    </IconWrapper>
                </Content>
            </Container>
        </nav>
    )
}

let Container = styled.div`    
    width: 100vw;
    display: flex;
    align-items: center;
    z-index: 20;
    background: transparent;
    position: relative;
    overflow-x: hidden;
    padding: 15px 35px;
    @media (max-width: 768px) {
        padding: 15px 15px;
    }
`

let Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

let LogoWrapper = styled.div`
    width: 100%;
    display: block;
    img{
        width: 120px;
        height: 24px;
        color: white;
    }
`

let LinkWrapper = styled.div`
    /* width: 100%; */
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 30px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1.5px;
    margin-right: 60px;
    text-decoration: none;
    /* background-color: black; */

    @media (max-width: 768px) {
        display: none;

    }
`

const HamBurger = styled.div`
    position: relative;
    display: none;
    text-transform: uppercase;
    font-size: 10px;
    padding: 5px 10px;
    border-radius: 4px;
    /* background-color: black; */
    color: white;
    @media (max-width: 768px) {
        display: inline-block;
    }
`

const BlurBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000000d;
    backdrop-filter: blur(16px);
    z-index: -1;
    color: white;
`

let IconWrapper = styled.div`
display: flex; 
gap: 10px;

@media (max-width: 768px){
    display: none;
}

    /* width: 100%; */
    img{
        width: 24px;
        height: 24px;
        border: white   ;
    }

`