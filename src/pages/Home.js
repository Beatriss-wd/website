import React from 'react'
import HelloSection from '../components/HelloSection'
import AboutSections from '../components/AboutSections'
import ContactBanner from '../components/ContactBanner'


export default function Home() {
    return (
        <div>
           <HelloSection/>
           <AboutSections/>
           <ContactBanner/>
           
        </div>
    )
}
