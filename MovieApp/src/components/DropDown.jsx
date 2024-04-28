import React, { useContext, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import styled from 'styled-components';
import store from '../store/Store';

export default function DropDown() {
    const [dropDown, setDropDown] = useState(false);
    let {FilterName} = useContext(store);

    const toggleDropDown = () => {
        setDropDown(!dropDown);
    };

    

    return (
        <>
            <Dropdown>
                <select onChange={(e)=>{FilterName(e)}} isOpen={dropDown}>
                    <option value='All'>All</option>
                    <option value='Movie'>Movie</option>
                    <option value='TV'>TV</option>
                </select>
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
    border-radius: 10px;
    overflow: hidden;   
    &:hover {
        background-color: #6556cd;
    }
`;
