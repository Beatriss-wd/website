import React from 'react'
import Mytext from '../components/Mytext'
import Button from '../components/Button'
import AboutImage from '../assets/about-me.jpg'
import styled from 'styled-components'
import AboutInfoItem from '../components/AboutInfoItem'
import ContactBanner from '../components/ContactBanner'




const AboutPageStyle = styled.div`
padding: 7rem 0 10rem 0;
.top-section{
    display:flex;
    align-items: center;
    justify-content: center;
    gap:2rem;
}
.left{
    flex:3;
}
.right{
    flex:2;
}
.about-info-heading{
    color: #A4A4A4;
    text-transform: uppercase;
    font-size:2.5rem;
}
.about-subheading{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #A4A4A4;
    span{
        background-color:#1E1E1E;
        padding: 0.5rem;
        border-radius: 8px;
    }
}
.about-heading{
    font-size: 2rem;
    margin-bottom:3rem;
    color:white;
}
.about-info{
    margin-bottom: 2rem;
    .para{
        max-width:100%;
    }
}
.right{
    img{
        border:2px solid white;
    }
}
.about-info-items{
    margin-top: 10rem;
}
.about-info-item{
    margin-bottom: 10rem;
}
@media only screen and (max-width:768px){
    padding: 5rem 0;
    .top-section{
        flex-direction:column;
        gap:2rem;
    }
    .about-heading{
        font-size:1.5rem;
    }
    .about-subheading{
        font-size:1.2rem;
    }
    .about-info-heading{
    font-size: 1.5rem;
    }
}
`


export default function About() {
    return (
        <AboutPageStyle>
        <div className="container">
            <div className="top-section">
                <div className = "left">
                    <p className = "about-subheading">
                        Hi , I am <span>Bodron Beatrice</span>
                    </p>
                    <h2 className ="about-heading">
                        And I want to become a Web Developer
                    </h2>
                    <div className = "about-info">
                        <Mytext>
                        I am from Grumazesti , Neamt but I moved to study in Cluj Napoca about 6 years ago , and it became my second home. Since childhood , I’ve been atracted to art and design and with time I’ve discovered that my dream job needs to include that. Even though my favorite colour is black , I am a very positive person who loves to smile and to make others smile.
                        <br/><br/>
                        I started coding since I was in highschool,it was very interesting to me to discover that I also enjoy this domain but things were a little bit too technical by that time. When I was in my last year of college and I had to think about my bachelor’s degree project, I did a research about what can I do , and I’ve discovered the world of Front-End Development. It was such a pleasure for me to discover that I found the perfect combination between art and coding.
                        <br/><br/>My dream is to perform in this domain , to make art on the internet and not only, to create new experiences for the world and why not , to become the best. It is time for me to show what I can do!<br/><br/>
                        </Mytext>
                    </div>
                    <Button btnText="Download CV" btnLink='#'/>
                </div>
                <div className="right"> 
                <img src={AboutImage} alt='about'/>
                </div>
            </div>
            <div className = "about-info-items">
                <div className ="about-info-item">
                    <h1 className="about-info-heading">Education</h1>
                    <AboutInfoItem
                        title="School"
                        items={
                            ["Scoala cu clasele I-VIII , Grumazesti"]
                        }
                    /><br/>
                    <AboutInfoItem
                        title="High-School"
                        items={
                            ["Colegiul National Stefan cel Mare, Targu-Neamt"]
                        }
                    /><br/>
                    <AboutInfoItem
                        title="College"
                        items={
                            ["Faculty of Electronics , Telecommunications and Information Technology"]
                        }
                    />
                </div>
                <div className ="about-info-item">
                    <h1 className="about-info-heading">My Skills</h1>
                    <AboutInfoItem
                        title="Front-End"
                        items={
                            ['HTML','CSS','JAVASCRIPT','REACT']
                        }
                    /><br/>
                    <AboutInfoItem
                        title="Back-End"
                        items={
                            ["NODE JS", 'Express','JSON']
                        }
                    /><br/>
                    <AboutInfoItem
                        title="Frameworks"
                        items={
                            ['Bootstrap','Semantic UI']
                        }
                    />
                </div>
                <div className ="about-info-item">
                    <h1 className="about-info-heading">Experience</h1>
                    <AboutInfoItem
                        title="07.2019-08.2019"
                        items={
                            ['Practice at S.C ROBERT BOSCH SRL']
                        }
                    /><br/>
                </div>
            </div>
        </div>
        <ContactBanner/>
        </AboutPageStyle>
    )
}
