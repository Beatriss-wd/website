import React from 'react'
import SectionTitle from './SectionTitle'
import styled from 'styled-components'
import ContactInfoItem from './ContactInfoItem'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import ContactForm from './ContactForm'

const ContactSectionStyle = styled.div `
padding: 2rem 0;
.contactSection-wrapper{
    display:flex;
    gap:6rem;
    margin-top:4rem;
    justify-content:space-between;
    position:relative;
}
.contactSection-wrapper::after{
    position: absolute;
    content:'';
    width: 2px;
    height:50%;
    background-color:white;
    left:50%;
    top:30%;
    transform: translate(-50%,-50%);
}
.left{
    width:100%;
    max-width: 500px;
}
.right{
    max-width:500px;
    width:100%;
}
@media only screen and (max-width:768px){
    .contactSection-wrapper{
        flex-direction:column;
    }
    .contactSection-wrapper::after{
        display:none;
    }
    .left,.right{
        max-width:100%;
    }
}
`

export default function ContactSection() {
    return (
        <ContactSectionStyle>
            <div className = "container">
            <SectionTitle
             heading="Contact"
              subheading="Get in touch"/>
              <div className ="contactSection-wrapper">
                  <div className = "left">
                    <ContactInfoItem
                        icon={<MdLocalPhone></MdLocalPhone>}
                        text="(+)40757539984"
                    />
                    <ContactInfoItem
                        icon={<MdEmail></MdEmail>}
                        text="bodron.beatris@gmail.com"
                    />
                    <ContactInfoItem
                        text="Cluj-Napoca, Romania"
                    />
                  </div>
                  <div className = "right">
                  <ContactForm/>
                  </div>
              </div>
            </div>
        </ContactSectionStyle>
    )
}
