import React from 'react'
import style from 'styled-components'

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free shipping on Orders over 500Rs.
    </Container>
  )
}

export default Announcement

const Container = style.div`
height : 30px;
background-color : teal;
color : white;
display : flex;
justify-content : center;
align-items : center;
font-size : 14px;
font-weight : 500;

`