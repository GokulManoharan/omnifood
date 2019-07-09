import React from 'react'
import './footer.css'

import Facebook from 'react-ionicons/lib/LogoFacebook'
import Twitter from 'react-ionicons/lib/LogoTwitter'
import GooglePlus from 'react-ionicons/lib/LogoGoogleplus'
import Instagram from 'react-ionicons/lib/LogoInstagram'

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-links">
                        <li><a href="#"><Facebook className="fb" fontSize="20px" color="#888" /></a></li>
                        <li><a href="#"><Twitter className="twitter" fontSize="20px" color="#888"/></a></li>
                        <li><a href="#"><GooglePlus className="gp" fontSize="20px" color="#888"/></a></li>
                        <li><a href="#"><Instagram className="insta" fontSize="20px" color="#888"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p>Copyright &copy; by Omnifood. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer