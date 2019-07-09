import React from 'react'
import './SignUp.css'

import Checkmark from 'react-ionicons/lib/IosCheckmark'
import Close from 'react-ionicons/lib/IosClose'

function SignUp(){
    return(
        <section className="section-plans">
            <div className="row">
                <h2>Start eating healthy today</h2>
            </div>
            <div className="row">
                <div className="col span-1-of-3">
                    <div className="plan-box">
                        <div>
                            <h3>Premium</h3>
                            <p className="plan-price">399$ <span>/ month</span> </p>
                            <p className="plan-price-meal">That’s only 13.30$ / meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />1 meal every day</li>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />Order 24/7</li>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />Access to newest creations</li>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="btn btn-full">Sign up now</a>
                        </div>
                    </div>
                </div>

                <div className="col span-1-of-3">
                    <div className="plan-box">
                        <div>
                            <h3>Pro</h3>
                            <p className="plan-price">149$<span>/ month</span> </p>
                            <p className="plan-price-meal">That’s only 14.90$ / meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />1 meal every day</li>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />Order 24/7</li>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />Access to newest creations</li>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="btn btn-ghost">Sign up now</a>
                        </div>
                    </div>
                </div>

                <div className="col span-1-of-3">
                    <div className="plan-box">
                        <div>
                            <h3>Starter</h3>
                            <p className="plan-price">19$<span> / meal</span></p>
                            <p className="plan-price-meal"></p>
                        </div>
                        <div>
                            <ul>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />1 meal</li>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />Order from 8 am to 12 pm</li>
                                <li><Close className="icon-small" fontSize="25px" color="#cf6d17" />Access to newest creations</li>
                                <li><Checkmark className="icon-small" fontSize="25px" color="#cf6d17"  />Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="btn btn-ghost">Sign up now</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SignUp