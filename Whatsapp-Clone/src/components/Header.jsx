import React from 'react'
import styled from 'styled-components';
export default function Header() {
  return (
    <>
    <Container>
            <Logo>
                <Text>Whatsapp</Text>
            </Logo>
            <Nav>
                <First>Chats</First>
                <Sec>Status</Sec>
                <Third>Call</Third>
            </Nav>
          </Container>
    </>
  )
}


let Container = styled.div`
  background-color: #0c6157;
  width: 100%;
  height: 100px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;

let Logo = styled.div`
  /* border: 2px solid; */
  padding: 20px 25px 10px;
  display: flex;
  gap: 1px;
  align-items: center;
  img{
    width: 35px;
  }
  `;

let Text = styled.div`
  color: white;
  font-weight: 600;
  `;


let Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    justify-content: space-around;
    `

let First = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
color: #6fa29c;

padding-bottom: 10px;
span{
  font-size: 12px;
  padding-top: 3px;
}`

let Sec = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
color: #6fa29c;
padding-bottom: 10px;

span{
  padding-top: 3px;
}`

let Third = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
font-weight: 500;
padding-bottom: 6px;
border-bottom: 3px solid white;
width: 50px;
span{
  padding-top: 3px;
}
`