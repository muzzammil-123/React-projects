import React from 'react'
import styled from 'styled-components'
import Siderbar from './Siderbar'
import MainContent from './MainContent'
import Suggestion from './Suggestion'
export default function Home() {
  return (
    <Container>
        <Content>
            <Siderbar/>
            <MainContent/>
            <Suggestion/>
        </Content>
    </Container>
  )
}

let Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    background-color: black;
`
let Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`