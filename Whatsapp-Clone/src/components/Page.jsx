import React from 'react'
import styled from 'styled-components'
import { IoMdCall } from "react-icons/io";

export default function Page() {
  return (
    <>
        <Container>
            <Content>
                <Wrap>
                    <LeftSide>
                    <Logo>
                        <img src="/dp.jpeg" alt="" />
                    </Logo>
                    <Details>
                        Shanawer
                        <span>
                            3/12/2024
                        </span>
                    </Details>
                    </LeftSide>
                    <RightSide>
                        <IoMdCall style={{color: '#0c6157'}}/>
                    </RightSide>
                </Wrap>
                <hr />
                <Wrap>
                    <LeftSide>
                    <Logo>
                        <img src="/dp.jpeg" alt="" />
                    </Logo>
                    <Details>
                        Shanawer
                        <span>
                            3/12/2024
                        </span>
                    </Details>
                    </LeftSide>
                    <RightSide>
                        <IoMdCall style={{color: '#0c6157'}}/>
                    </RightSide>
                </Wrap>
                <hr />
                <Wrap>
                    <LeftSide>
                    <Logo>
                        <img src="/dp.jpeg" alt="" />
                    </Logo>
                    <Details>
                        Shanawer
                        <span>
                            3/12/2024
                        </span>
                    </Details>
                    </LeftSide>
                    <RightSide>
                        <IoMdCall style={{color: '#0c6157'}}/>
                    </RightSide>
                </Wrap>
                <hr />
                <Wrap>
                    <LeftSide>
                    <Logo>
                        <img src="/dp.jpeg" alt="" />
                    </Logo>
                    <Details>
                        Shanawer
                        <span>
                            3/12/2024
                        </span>
                    </Details>
                    </LeftSide>
                    <RightSide>
                        <IoMdCall style={{color: '#0c6157'}}/>
                    </RightSide>
                </Wrap>
                <hr />
                <Wrap>
                    <LeftSide>
                    <Logo>
                        <img src="/dp.jpeg" alt="" />
                    </Logo>
                    <Details>
                        Shanawer
                        <span>
                            3/12/2024
                        </span>
                    </Details>
                    </LeftSide>
                    <RightSide>
                        <IoMdCall style={{color: '#0c6157'}}/>
                    </RightSide>
                </Wrap>
                <hr />
                <Wrap>
                    <LeftSide>
                    <Logo>
                        <img src="/dp.jpeg" alt="" />
                    </Logo>
                    <Details>
                        Shanawer
                        <span>
                            3/12/2024
                        </span>
                    </Details>
                    </LeftSide>
                    <RightSide>
                        <IoMdCall style={{color: '#0c6157'}}/>
                    </RightSide>
                </Wrap>
                <hr />
                <Wrap>
                    <LeftSide>
                    <Logo>
                        <img src="/dp.jpeg" alt="" />
                    </Logo>
                    <Details>
                        Shanawer
                        <span>
                            3/12/2024
                        </span>
                    </Details>
                    </LeftSide>
                    <RightSide>
                        <IoMdCall style={{color: '#0c6157'}}/>
                    </RightSide>
                </Wrap>
                
            </Content>
        </Container>
    </>
  )
}


let Container = styled.div`
width: 100%;
height: 100%;
`

let Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;
hr{
    border-color: grey;
    width: 90%;
    text-align: center;
}
`

let Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 15px ;
`

let LeftSide= styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 10px;
`


let Logo = styled.div`
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        
    }
`

let Details = styled.div`
    font-weight: 500;
    display: flex;
    flex-direction: column;
    span{
font-size: 12px;
font-weight: 400;
margin-top: -2px;
    }    
`

let RightSide =styled.div`
    
`