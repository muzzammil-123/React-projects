import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import styled from 'styled-components';

export default function DropDown() {
    const [dropDown, setDropDown] = useState(false);

    const toggleDropDown = () => {
        setDropDown(!dropDown);
    };

    return (
        <>
            <Dropdown>
                <Wrap onClick={toggleDropDown}>
                    <FilterName>Filter</FilterName>
                    <Icon><IoIosArrowDown/></Icon>
                </Wrap>
                <DropdownMenu isOpen={dropDown}>
                    <Item>All</Item>
                    <Item>Movie</Item>
                    <Item>TV</Item>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}

const Dropdown = styled.div`
    overflow: hidden;
    position: relative;
    width: 350px;
    background-color: #00000037;
`;

const Wrap = styled.div`
    width: 100%;
    display: flex;
    padding: .5rem 1rem;
    justify-content: space-between;
    align-items: center;
`;

const FilterName = styled.div`
    color: white;
    font-size: 1.2rem;
`;

const Icon = styled.div`
    width: 30px;
    color: white;
`;

const DropdownMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: max-height 0.3s ease-in-out;
    max-height: ${props => (props.isOpen ? '200px' : '0px')};
    overflow: hidden;
`;

const Item = styled.div`
    padding: .9rem 1.5rem;
    color: white;
    overflow: hidden;   
    border-radius: 10px;
    &:hover {
        background-color: #6556cd;
    }
`;
