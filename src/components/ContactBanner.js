import React from 'react'
import Mytext from './Mytext'
import Button from './Button'
import styled from 'styled-components'

const ContactBannerStyle = styled.div`
padding: 10rem 0;
.contactBanner-wrapper{
    background-color:#1E1E1E;
    border-radius: 10px;
    padding: 3rem 0rem;
    text-align: center;
}
.contactBanner-heading{
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #A4A4A4;;
}
@media only screen and (max-width: 768px){
    .contactBanner-heading{
        font-size: 2.8rem;
    }
}
`

export default function ContactBanner() {
    return (
        <ContactBannerStyle>
            <div className = "container">
                <div className = "contactBanner-wrapper">
                <Mytext>
                    Want me to join your team?
                </Mytext> 
                <h3 className="contactBanner-heading"> Let me know ! </h3>
                <Button btnText='Contact Now' btnLink='/contact'></Button>
                </div>
            </div>
        </ContactBannerStyle>
    )
}
