import React from 'react'
import styled from 'styled-components'


const MyStyle= styled.div`
max-width: 500px;
margin: 0 auto;
font-size: 1.3rem;
line-height: 1.3rem;
color: #808080;

}
@media only sreen and(max-width: 768px){
    font-size:1.4rem;
`

export default function MyText({children}) {
    return (
        <MyStyle className = "para"> 
            <p>{children}</p>
        </MyStyle>
    )
}
