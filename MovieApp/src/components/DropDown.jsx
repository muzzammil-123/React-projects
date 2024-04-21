import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import styled from 'styled-components';

export default function DropDown() {
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
    </>
  )
}


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