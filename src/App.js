import React from 'react';
import Header from './components/sections/Header/Header'
import Features from './components/sections/Features/Features'
import Meals from './components/sections/Meals/Meals'
import Steps from './components/sections/Steps/Steps'
import Cities from './components/sections/Cities/Cities'
import Testimonials from './components/sections/Testimonials/Testimonials'
import SignUp from './components/sections/SignUp/SignUp'
import ContactForm from './components/sections/ContactForm/ContactForm'
import Footer from './components/sections/Footer/Footer'
import './App.css';
import './queries.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Meals />
      <Steps />
      <Cities />
      <Testimonials />
      <SignUp />
      <ContactForm />
      <Footer />
    </div>
  );
}