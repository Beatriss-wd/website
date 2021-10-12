import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    margin-top: 1rem;
    .button{
        font-size:1.5rem;
        background-color: ${(props) =>
            props.outline ? 'transparent' : ' #BCB4B4'};
        padding: .5em 1em;
        border-radius: 8px;
        display:inline-block;
        border: 2px solid #BCB4B4;
        color: ${(props) => 
            props.outline ? ' #BCB4B4' : 'black'};
    }
    @media only screen and (max-width: 768px){
        .button{
            font-size:1.8rem;
        }
    }`;

export default function Button({ 
    btnLink ='test' , btnText='Test' ,outline = false }) {
    return (
        <ButtonStyle outline={outline}
        className = "button-wrapper">
            <Link className='button' to={btnLink}>{btnText}</Link>
        </ButtonStyle>
    )
}
