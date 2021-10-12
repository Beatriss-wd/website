import React from 'react'
import Mytext from './Mytext'
import styled from 'styled-components'

const AboutItemStyle = styled.div`
display:flex;
position:relative;
align-items: center;
justify-content: flex-start;
margin-top:1.5rem;
.title{
    font-size: 1.5rem;
    color: #A4A4A4;
    
}
.items{
    display:flex;
    gap: 1.5rem;
    position:absolute;
    left: 18rem;
}
.item{
    background-color:#1E1E1E;
    padding: 1rem;
    border-radius: 8px;
}

@media only screen and(max-width:768px){
    flex-direction: column;
    align-items:flex-start;
    gap:1rem;
    .items{
        position: initial;
        gap:1rem;
    }
    .title{
        font-size:1.5rem;
    }
}
`

export default function AboutInfoItem({
    title="this is title",
    items=['HTML','CSS']
}) {
    return (
        <AboutItemStyle>
        <h1 className = "title">{title}</h1>
        <div className="items">
            {items.map((item,index)=> (
                <div className ="item" key={index}>
                    <Mytext>{item}</Mytext>
                </div>
            ))}
        </div>
        </AboutItemStyle>
    )
}
