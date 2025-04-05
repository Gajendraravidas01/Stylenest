import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import React from "react";

const Container = styled.div`
  position : relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LinkText = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const StyledLink = styled(Link)`
  text-decoration: none;    /* Removes underline */
  color: black;             /* Sets text color */

`
const OuterContainer = styled.div`
  height : 100vh;
  overflow-X : hidden;
  overflow-Y : hidden;
`

const Login = () => {
  return (
    <OuterContainer>
    <NavBar/>
    <Container>

      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <StyledLink><LinkText>DO NOT YOU REMEMBER THE PASSWORD?</LinkText></StyledLink>
          <StyledLink to={"/register"}><LinkText >CREATE A NEW ACCOUNT</LinkText></StyledLink>
        </Form>
      </Wrapper>
    </Container>
    </OuterContainer>
  );
};

export default Login;