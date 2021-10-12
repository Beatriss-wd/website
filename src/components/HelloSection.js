import React from 'react'
import styled from 'styled-components'
import HelloImg from '../assets/hello.jpg'
import Button from './Button'
import MyText from './Mytext'

const HelloStyles = styled.div`
    .helo{
        height: 100vh;
        width: 100%;
        margin-top: 30px;
        text-align: center;
        align-items: center;
        justify-content: center;
        position: relative;
        
    }
    .helo__heading{
        font-size: 1.5rem;
        position:relative;
        
        span{
            display:inline-block;
            width:100%;
            color: #A4A4A4;
            font-weight: normal;
            font-family: 'Roboto Mono', monospace;
        }
        .helo__name{
            font-size: 3rem;
            font-weight:bold;
            color: white;
            font-family: 'Montserrat', sans-serif;
        }
    }
        .helo__img{
            border: 2px solid #BCB4B4;
            margin-top: -28px;
        }

        .helo__info{
            margin-top:-160px;
        }
    }`



export default function HelloSection() {
    return (
        <HelloStyles>
        <div className='helo'>
         <div className='container'>
            <h1 className= 'helo__heading'>
            <span>Hello, This is</span>
            <span className = 'helo__name'>Bodron Beatrice</span>
            </h1>
            <div>
                <img className='helo__img' src={HelloImg} alt=''/>
            </div>
            <div className = 'helo__info'>
                       <MyText>I am a fresh graduate from Technical University of Cluj-Napoca. I love to design and create new web experiences.</MyText>
                       <Button btnLink='/about' btnText='See more !'/>
             </div>
         </div>
        </div>
         </HelloStyles>
        
    )
}
