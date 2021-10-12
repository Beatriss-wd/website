import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ColStyle = styled.div`
.link-style{
    color: #808080;
    text-decoration: none;
}

.heading{
    font-size:1.8rem;
    color: #A4A4A4;
    margin-bottom: 2rem;
}
li{
    margin-bottom: 1rem;
    display:flex;
}
a{
    font-size: 1.3rem;
    color: #808080;
    text-decoration: none;
}
`


export default function FooterCol({
    heading = 'col heading',
    links = [
        {
            type:'Link',
            title:'Home',
            path:'/home'
        },
        {
            type:'Link',
            title:'About',
            path:'/about'
        },
    ]
}) {
    return (
        <ColStyle>
            <h1 className = "heading">{heading}</h1>
            <ul>
                {
                    links.map((item,index) =>(
                        <li key ={index}>
                            {item.type === 'Link' ? (
                                <Link to={item.path} className = "link-style">{item.title}</Link>
                            ): (
                                <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>
                            )}
                        </li>
                    ))
                }
            </ul>
        </ColStyle>
    )
}
