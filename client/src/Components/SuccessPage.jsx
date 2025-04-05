import React from 'react'
import styled from 'styled-components'

const SuccessPage = () => {
  return (
    <Container>
        <Div className="">
            <SpanLink href='/'>Go to Homepage</SpanLink>
            <Image src='https://icpih.com/media-intestinal-health-ihsig/PAYMENT-SUCCESS.png'></Image>
        </Div>
    </Container>
  )
}

export default SuccessPage

const Container = styled.div`
    height:100vh;
    width:100vw;
    display : flex;
    justify-content:center;
    align-items : center;
`
const Div = styled.div`
    border:1px solid green;
    padding:20px;
    border-radius: 10px;
    display :flex;
    flex-direction : column;
    gap:10px;
`
const SpanLink = styled.a`
    color:black;
    
`
const Image = styled.img`

`