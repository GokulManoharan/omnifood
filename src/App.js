import React from 'react';
import './App.css';
import Steps from './components/sections/Steps/Steps'
import Cities from './components/sections/Cities/Cities'

import pageLogo from './images/logo-white.png'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img8 from './images/8.jpg'

// import Icon from 'react-ionicons'
import IosInfinite from 'react-ionicons/lib/IosInfinite'
import IosStopwatch from 'react-ionicons/lib/IosStopwatch'
import IosNutrition from 'react-ionicons/lib/IosNutrition'
import Ioscart from 'react-ionicons/lib/IosCart'
function App() {
  return (
    <div className="App">
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

      <section className="section-features">
        <div className="row">
          <h2>Get food fast &mdash; not fast food.</h2>
          <p className="long-copy">
            Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
          </p>
        </div>

        <div className="row">
          <div className="col span-1-of-4 box">
          <IosInfinite className="icon-big" fontSize="60px" color="#cf6d17" />
            <h3>Up to 365 days/year</h3>
            <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
          </div>
          <div className="col span-1-of-4 box">
          <IosStopwatch className="icon-big" fontSize="60px" color="#cf6d17"/>
            <h3>Ready in 20 minutes</h3>
            <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
          </div>
          <div className="col span-1-of-4 box">
          <IosNutrition className="icon-big" fontSize="60px" color="#cf6d17"/>
            <h3>100% organic</h3>
            <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
          </div>
          <div className="col span-1-of-4 box">
          <Ioscart className="icon-big" fontSize="60px" color="#cf6d17"/>
            <h3>Order anything</h3>
            <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
          </div>
        </div>
      </section>

      <section className="section-meals">
        <ul className="meals-showcase clearfix">
          <li>
            <figure className="meal-photo">
              <img src={img1} alt="Image 1" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img2} alt="Image 2" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img3} alt="Image 3" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img4} alt="Image 4" />
            </figure>
          </li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <ul className="meals-showcase clearfix">
          <li>
            <figure className="meal-photo">
              <img src={img5} alt="Image 5" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img6} alt="Image 6" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img7} alt="Image 7" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img8} alt="Image 8" />
            </figure>
          </li>
        </ul>
     </section>
      <Steps />
      <Cities />
    </div>
  );
}

export default App;
