import React from 'react'
import styled from 'styled-components'

const SectionTitleStyle = styled.div` 
text-align:center;
p{
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
    color: #A4A4A4;
}
h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 3rem;
    margin-top: .5rem;
    text-transform: uppercase;
    color: white;
}
@media only screen and (max-width: 758px){
    p{
        font-size:1.2rem;
    }
    h2{
        font-size: 2rem;
    }
}
`

export default function SectionTitle({
    subheading = 'This is subheading',
    heading = 'This is heading',
}) {
    return (
        <SectionTitleStyle className = "section-title">
            <p>{subheading}</p>
            <h2>{heading}</h2>
         </SectionTitleStyle>
    )
}
