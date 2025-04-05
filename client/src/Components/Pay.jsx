import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const public_stripe_key = "pk_test_51PzeUPLebJs2nV4g2W1iqS67NqLXfG9RmWsKMuZfyQGfFPJLXFZeVPUK4v4wgW0jkEGKjDjomPb6XBEOwS2YAsjp00BNORNyer"

const Pay = () => {

    const[stripetoken, setStripetoken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripetoken(token)
    }
    
    useEffect(() => {
        // console.log("gajendra")
        const makerequest = async () => {
            try {
                const res = await axios.post("http://localhost:8000/api/checkout/payment", {
                    tokenId : stripetoken.id,
                    amount : 200000000
                })
                // console.log(res.data);
                navigate('/success');
            } catch (error) {
                console.log(error);
            }
        }
        makerequest();
    },[stripetoken])

  return (
    <Container>
        <StripeCheckout
            name='stylenest'
            billingAddress
            shippingAddress
            description='Your total is 2000rs'
            amount={2000}
            token={onToken}
            stripeKey={public_stripe_key}
        >
            <Button>
                <span>PayNow</span>
            </Button>
        </StripeCheckout>
    </Container>
  )
}

export default Pay

const Container = styled.div`
    height : 100vh;
    width : 100vw;
    display : flex;
    justify-content : center;
    align-items: center;
`

const Button = styled.button`
    border : 1px solid black;
    background-color : lightblue;
    color : black;
    padding : 10px;
    cursor : pointer;
`