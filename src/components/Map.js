import React from 'react'
import Mytext from './Mytext'
import styled from 'styled-components'
import MapImg from '../assets/location-img.PNG'

const MapStyle=styled.div`
    background:url(${MapImg}) no-repeat center / cover;
    min-height:400px;
    .container{
        position:relative;
        min-height: 400px;
    }
    .map-card-heading{
        color:white;
        margin-bottom:0.5rem;
    }
    .map-card{
        position:absolute;
        right: 10%;
        bottom:10%;
        padding: 1rem;
        background-color:#1E1E1E;
        width: 100%;
        max-width:300px;
        border-radius: 12px;
    }
    a{
        color: #808080;
        
    }
    .map-card-link{
        display:inline-block;
        font-size:1.2rem;
        margin-top: 2rem;
    }
    @media only screen and (max-width:768px){
        background-position: 80% center;
    }
    @media only screen and (max-width:400px){
        .map-card{
            max-width:none;
            right:auto;
        }
    }
`

export default function Map() {
    return (
        <MapStyle>
            <div className='container'>
                <div className='map-card'>
                    <h3 className= 'map-card-heading'>
                        Here is me
                    </h3>
                    <Mytext>Str.Grigore Alexandrescu, Cluj-Napoca, Romania</Mytext>
                    <a href='https://www.google.ro/maps/place/Strada+Grigore+Alexandrescu+7,+Cluj-Napoca+400000/@46.7686364,23.5596645,12z/data=!4m5!3m4!1s0x47490e66154f281f:0xd4b3bbfc234e0ad9!8m2!3d46.757208!4d23.554007'
                     target="_blank"
                     rel="noreferrer"
                     className = "map-card-link">Open in Google Map</a>
                </div>
            </div>
        </MapStyle>
    )
}
