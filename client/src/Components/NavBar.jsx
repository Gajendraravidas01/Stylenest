import React from 'react'
import style, { styled } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color : 'gray',fontSize : "16px"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to={"/"}><Logo>StyleNest</Logo></StyledLink>
        </Center>
        <Right>
          <StyledLink to={"/login"}><MenuItem>Login</MenuItem></StyledLink>
          <StyledLink to={"/register"}><MenuItem>Sign Up</MenuItem></StyledLink>
          <StyledLink to={"/cart"}>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar

const Container = style.div`
 height = 40px;
 ${mobile({ height: "50px" })}
`
const Wrapper = style.div`
padding : 10px 20px;
display : flex;
justify-content : space-between;
align-items : center;
//  background-color : #ffeef9;
${mobile({ padding: "10px 0px" })}
`
const SearchContainer = style.div`
border : 0.5px solid lightgray;
display : flex;
align-items : center;
margin-left : 25px;
padding : 5px;
`
const Logo = style.h1`
text-align : center;
${mobile({ fontSize: "24px" })}
`
const Input = style.input`
border : none;
outline : none;
${mobile({ width: "50px" })}
`
const Language = style.span`
  font-size : 14px;
  cursonr : pointer;
  ${mobile({ display: "none" })}
`
const Left = style.div`
flex : 1;
display : flex;
align-items : center;
`
const Center = style.div`
flex : 1;
`
const Right = style.div`
flex : 1;
display : flex; 
align-items : center;
justify-content : flex-end;
${mobile({ flex: 2, justifyContent: "center" })}

`
const MenuItem = style.div`
font-size : 14px;
cursor : pointer;
margin : 10px;
padding : 5px;
border-radius : 5px;
&:hover {
    border : 1px solid black;
    transform: scale(1.05);      /* Adds a slight zoom effect */
  }
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const StyledLink = styled(Link)`
  text-decoration: none;    /* Removes underline */
  color: black;             /* Sets text color */

`