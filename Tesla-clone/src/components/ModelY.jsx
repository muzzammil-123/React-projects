import React from 'react'
import styled from 'styled-components'
export default function ModelY() {
    return (
        <>
            <Container>
                <Content>
                    <Wrap>
                        <h1>Model Y</h1>
                        <Description>
                        From $37,490* <br /> <span>After Federal Tax Credit</span>
                        </Description>
                    </Wrap>
                    <Wraps>
                        <Par>
                        <Button >Shop Available</Button>
                        <BlackButton>Demo Drive</BlackButton>  
                        </Par>
                        <Policy>*Price before incentives is $44,990, excluding taxes and fees. Subject to change.</Policy>
                    </Wraps>
                </Content>
            </Container>
        </>
    )
}

let Container = styled.div`
    width: 100%;
    margin-top:775px;
    height: 790px;
    background-image: url('/images/modelY.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

let Content = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
text-align: center;
padding: 55px 0;
`

let Wrap = styled.div` 
padding: 55px 0;

h1{
    font-size: 40px;
    letter-spacing:1px;
    margin-top: 20px;
}
`
let Wraps = styled.div` 
/* padding: 55px 0; */
display: flex;
flex-direction: column;
justify-content: space-between;
/* border: 2px solid ; */
height: 100px;
h1{
    font-size: 40px;
    letter-spacing:1px;
    margin-top: 20px;
}
`


let Button = styled.button`
    
    margin-bottom: 0px;
    padding: 10px 30px;
    margin-right:24px;
    font-size: 14px;
    overflow-y: hidden;
    font-weight: 500;
    border: none;
    width: 250px;
    height: 45px;
    background: rgb(296,296, 296);
    border-radius: 5px;
    `

let BlackButton = styled.button`
/* margin-top: 24px; */
margin-bottom: 0;
padding: 10px 30px;
margin-right:24px;
font-size: 14px;
overflow-y: hidden;

font-weight: 500;
border: none;
color: white;
width: 250px;
height: 45px;
background-color:rgba(0, 0, 0, 0.728) ;
border-radius: 5px;
`

let Description = styled.p`
    color: black;
    font-size: 20px;
    font-weight: 500;
    /* line-height: 1.5; */
    overflow: hidden;
    margin-top: 5px;
    letter-spacing: 1px;
    span{
        display: inline-block;
        font-weight: lighter;
        font-size: 11px;
        margin-bottom: 5px ;
    }
` 

let Policy = styled.p`
    font-size: 14px;
    font-weight: lighter;   
    /* margin-top: px; */
    /* display: inline-block; */
    color: #5c5b5b;

`

let Par = styled.div`
    
`