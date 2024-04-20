// import { Container } from 'postcss'
import React from 'react'
import Card from './Card'
import styled from 'styled-components'

export default function TrendingSlider() {
  return (
    <>
        <Container>
            <Content>
                <Card/>
            </Content>
        </Container>
    </>
  )
}

let Container = styled.div`
    width: 100%;

`

let Content = styled.div`
    width: 100%;
    height: 100%;
`