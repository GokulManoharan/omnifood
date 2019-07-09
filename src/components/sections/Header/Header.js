import React from 'react'
import pageLogo from '../../../images/logo-white.png'

function Header () {
    return(
        <header>
            <nav className="row">
            <img src={pageLogo} alt="Logo here" className="logo"/>
            <ul className="main-nav">
                <li><a href="#">Food delivery</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Our cities</a></li>
                <li><a href="#">Sign up</a></li>

            </ul>
            </nav>
            <div className="hero-text-box">
            <h1>Goodbye junk food.<br/> Hello super healthy meals.</h1>
            <a href="#" className="btn btn-full">I’m hungry</a>
            <a href="#" className="btn btn-ghost">Show me more</a>
            </div>
        </header>
    )
}

export default Header