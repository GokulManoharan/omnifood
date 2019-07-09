import React from 'react'
import './cities.css'

import Person from 'react-ionicons/lib/IosPerson'
import Star from 'react-ionicons/lib/IosStar'
import Twitter from 'react-ionicons/lib/LogoTwitter'

import Lisbon from '../../../images/lisbon-3.jpg'
import SF from '../../../images/san-francisco.jpg'
import Berlin from '../../../images/berlin.jpg'
import London from '../../../images/london.jpg'

function Cities () {
    return (
        <section className="section-cities">
             <div className="row">
                <h2>We're currently in these cities</h2>
            </div>
            <div className="row">
                <div className="col span-1-of-4 box">
                    <img src={Lisbon} alt="Lisbon" />
                    <h3>Lisbon</h3>
                    <div className="city-features" >
                        <Person className="icon-small" fontSize="25px" color="#cf6d17"/> 1600+ happy eaters
                   </div>
                   <div className="city-features"  >
                        <Star className="icon-small" fontSize="25px" color="#cf6d17"/> 60+ top chefs
                   </div>
                   <div className="city-features" >
                        <Twitter className="icon-small" fontSize="25px" color="#cf6d17"/> 
                        <a href="#">@omnifood_lx</a>
                   </div>
                </div>

                <div className="col span-1-of-4 box">
                    <img src={SF} alt="Lisbon" />
                    <h3>San Francisco</h3>
                    <div className="city-features" >
                        <Person className="icon-small" fontSize="25px" color="#cf6d17"/> 3900+ happy eaters
                   </div>
                   <div className="city-features" >
                        <Star className="icon-small" fontSize="25px" color="#cf6d17"/> 160+ top chefs
                   </div>
                   <div className="city-features" >
                   <a href="#"><Twitter className="icon-small" fontSize="25px" color="#cf6d17"/> @omnifood_sf</a>
                   </div>
                </div>

                <div className="col span-1-of-4 box">
                    <img src={Berlin} alt="Lisbon" />
                    <h3>Berlin</h3>
                    <div className="city-features" >
                        <Person className="icon-small" fontSize="25px" color="#cf6d17"/> 2000+ happy eaters
                   </div>
                   <div className="city-features" >
                        <Star className="icon-small" fontSize="25px" color="#cf6d17"/> 100+ top chefs
                   </div>
                   <div className="city-features" >
                   <a href="#"><Twitter className="icon-small" fontSize="25px" color="#cf6d17"/> @omnifood_berlin</a>
                   </div>
                </div>

                <div className="col span-1-of-4 box">
                    <img src={London} alt="Lisbon" />
                    <h3>London</h3>
                    <div className="city-features" >
                        <Person className="icon-small" fontSize="25px" color="#cf6d17"/> 1000+ happy eaters
                   </div>
                   <div className="city-features" >
                        <Star className="icon-small" fontSize="25px" color="#cf6d17"/> 80+ top chefs
                   </div>
                   <div className="city-features" >
                   <a href="#"><Twitter className="icon-small" fontSize="25px" color="#cf6d17"/> @omnifood_london</a>
                   </div>
                </div>
               
            </div>
        </section>
    )
}

export default Cities
