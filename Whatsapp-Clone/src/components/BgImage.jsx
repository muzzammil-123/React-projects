import React from 'react'
import styled from'styled-components'
export default function BgImage() {
  return (
    <>
    <Container>
        <Content>
            <BgImg>
                <img src="/R.jfif" alt="" />
            </BgImg>
        </Content>
    </Container>
    </>
  )
}

let Container  = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
`

let Content  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

`

let BgImg  = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;

 img{
    width: 800px;
    height:800px;
 }
`