import React from 'react'
import Mytext from './Mytext'
import SectionTitle from './SectionTitle'
import Button from './Button'
import AboutImg from '../assets/about-sec-img.png'
import styled from 'styled-components'


const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .about__left,.about__right{
        flex: 1;
    }

    .section-title{
        text-align: left;
    }
    .para{
        margin-top: 2rem;
        margin-left : 0;
    }

    .aboutSection__buttons{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }
    @media only screen and (max-width:950px){
        .about__left{
            flex: 4;
        }
        .about__right{
            flex: 3;
        }
    }
    @media only screen and (max-width:768px){
        .container{
            flex-direction: column;
            text-align: center;
        }
        .about__left,.about__right{
            width: 100%;
        }
        .about__right{
            margin-top:3rem;
        }
        .section-title{
            text-align:center;
        }
        .para{
            margin: 0 auto;
            margin-top: 2rem;
        }
        .aboutSection__buttons{
            flex-direction: column;
            gap:0;
            .button-wrapper{
                a{
                    width:100%;
                    text-align: center;
                }
            }
        }
    }

`


export default function AboutSections() {
    return (
        <AboutSectionStyle>
            <div className ='container'>
                <div className="about__left">
                <SectionTitle
                 subheading ="Let me introduce myself"
                 heading="About me"
                />
                <Mytext>
                    I am a graduate from the Faculty of Electronics ,Telecomunications and Informations Technology. I've discovered my passion for web development about a year ago and since then I've been trying to improve my programming skills in order to become the best.
                </Mytext>
                <div className="aboutSection__buttons">
                    <Button btnLink = "/contact" btnText="Contact me"/>
                    <Button btnLink = "/about" btnText="Read More" outline />
                </div>
                </div>
                <div className="about__right">
                    <img src={AboutImg} alt=''/>
                </div>
            </div>
        </AboutSectionStyle>
    )
}
