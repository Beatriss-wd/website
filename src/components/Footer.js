import React from 'react'
import MyText from './Mytext'
import FooterCol from './FooterCol'
import styled from 'styled-components'


const FooterStyle= styled.div`
padding-top:5rem;
background-color:#1E1E1E;
.container{
    display: flex;
    gap: 3rem;
}
.footer-col1{
    flex:2;
}
.footer-col1, .footer-col2, .footer-col3{
    flex:1;
}
.footer-col1-title{
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #A4A4A4;
}
@media only screen and (max-width: 768px){
    .container{
        flex-direction:column;
        gap:0rem;
        & > div{
            margin-top: 5rem;
        }
        .footer-col1 .para{
        max-width: 100%;
        }
    }
}
`

export default function Footer() {
    return (
        <FooterStyle>
            <div className = "container">
                <div className ="footer-col1">
                    <h1 className = "footer-col1-title">
                        Bodron Beatrice
                    </h1>
                    <MyText>
                        A freshgraduate from Cluj-Napoca, Romania  with a strong passion for web development and also a strong desire to perform in this domain. 
                    </MyText>
                </div>
                <div className = "footer-col2">
                    <FooterCol
                    heading = "Important Links"
                    links={[
                        {
                        type:'Link',
                        title:"Home",
                        path: "/",
                    },
                    {
                        type:'Link',
                        title:"About",
                        path: "/about",
                    },
                    {
                        type:'Link',
                        title:"Contact",
                        path: "/contact",
                    },
                    ]} />
                </div>
                <div className = "footer-col2">
                <FooterCol
                heading ="Contact Info"
                 links={
                     [
                         {
                             title:'(+)40757539984',
                             path:'tel:0757539984',
                         },
                         {
                             title:'bodron.beatris@gmail.com',
                             path:'mailto:bodron.beatris@gmail.com',
                         },
                         {
                             title: 'Cluj-Napoca, RO',
                             path:'https://google.com/maps',
                         },
                     ]
                 }/>
                </div>
                <div className = "footer-col2">
                <FooterCol
                    heading = "Social Links"
                    links={[
                        {
                        title:"LinkedIn",
                        path: "https://www.linkedin.com/in/beatrice-bodron-893816175/",
                    },
                    {
                        title:"Instagram",
                        path: "https://www.instagram.com/beatricebodron/?hl=ro",
                    },
                    {
                        title:"Facebook",
                        path: "https://www.facebook.com/B.Beatrisss/",
                    },
                    ]} />
                </div>
            </div>
        </FooterStyle>
    )
}
