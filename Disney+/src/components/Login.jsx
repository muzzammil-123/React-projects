import React from 'react'
import styled from 'styled-components'
import Header from './Header'
export default function Login() {
    return (
        <>
            <Container>
                <Content>
                    <CTA>
                        <CTALogoOne src='/images/cta-logo-one.svg' />
                        <SignUp>GET ALL THERE</SignUp>
                        <Description>Get premier access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21. the price of Disney+ and The Disney Bundle will increase by $1</Description>
                        <CTALogoTwo src='/images/cta-logo-two.png' />
                    </CTA>
                    <BgImage />
                </Content>
            </Container>
        </>
    )
}


const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`

const Content = styled.div`
margin-bottom: 10vw;
width : 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`

let BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
right: 0 ;
z-index: -1;
left: 0;
background-image: url("/images/login-background.jpg");
`
let CTA = styled.div`
max-width: 650px;
width:100%;
display:flex;
flex-direction:column;
margin-bottom: 2vw;
flex-wrap:wrap;
justify-content:center;
margin-top: 0;
align-items:center;
text-align:center;
margin-left:auto;
margin-right:auto;
transition-timing-function: ease-out;
transition-opacity: 0.2s;

`

let CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-width:1px;
display:block;
width:100%;
`


let SignUp = styled.a`
font-weight:bold;
color: #f9f9f9;
background-color: #0063ef;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`

let Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`

let CTALogoTwo = styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
width:100%;
`

