// import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";


export default function Section() {
    let [dropDown, setDropDown] = useState(false);
    let Toggle = () =>{
        if(dropDown){
            setDropDown(false)
        }else{
            setDropDown(true)
        }
    }
  return (
    <>
      <Container>
        <Content>
          <Header>
            <Heading>Trending</Heading>
            <Dropdown>
                <Wrap onClick={()=>{Toggle()}}>
                    <FilterName>Filter</FilterName>
                    <Icon><IoIosArrowDown/></Icon>
                </Wrap>
                {dropDown ? 
                <DropdownMenu>
                    <Item>All</Item>
                    <Item>Movie</Item>
                    <Item>TV</Item>
                </DropdownMenu> :
                null
                }
            </Dropdown>
          </Header>
        </Content>
      </Container>
    </>
  );
}
let Container = styled.div`
  width: 100%;
  /* height: 100%; */
`;
let Content = styled.div`
  width: 100%;
  height: 100%;
`;

let Header = styled.div`
  width: 100%;
  /* height: 100px; */
  padding: 1.5rem 1.5rem;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  /* border: 2px solid white; */
`;

let Heading = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

let Dropdown = styled.div`
overflow: hidden;
width: 350px;
background-color: #00000037;
`;

let Wrap = styled.div`
width: 100%;
display: flex;
padding: .5rem 1rem;
justify-content: space-between;
align-items: center;
/* border: 2px solid white; */
`

let FilterName = styled.div`
color: white;
font-size: 1.2rem;
`

let Icon = styled.div`
    width: 30px;
    color: white;
`
let DropdownMenu = styled.div`
width: 100%;
display: flex;
flex-direction: column;

`

let Item = styled.div`
    padding: .9rem 1.5rem;
    color: white;
    border-radius:10px;
    &:hover{
        background-color: #6556cd;
    }
`