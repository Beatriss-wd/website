import React from 'react'
import {MdPlace} from 'react-icons/md'
import Mytext from './Mytext'
import styled from 'styled-components'

const ItemStyle = styled.div `
padding : 1rem;
background-color:#1E1E1E;
display: flex;
align-items:center;
gap: 2rem;
border-radius: 8px;
margin-bottom:2rem;
.icon{
    color: white;
    background-color: #808080;
    padding: 1.2rem;
    align-items: center;
    justify-content:center;
    border-radius: 50%
}
svg{
    width:2rem;

}

`

export default function ContactInfoItem({
    icon = <MdPlace></MdPlace>,
    text = "this is an info"
}) {
    return (
        <ItemStyle>
            <div className="icon">{icon}</div>
            <div className="info">
                <Mytext>{text}</Mytext>
            </div>
        </ItemStyle>
    )
}
