import React from 'react'
import './contactForm.css'

function ContactForm() {
    return (
        <section className="section-form">
            <div className="row">
                <h2>We're happy to hear from you</h2>
            </div>
            <div className="row">
                <form method="post" className="contact-form">
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label>Name</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input type="text" name="name" placeholder="Your name" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label>Email</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input type="email" name="email" placeholder="Your Email" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label>How did you find us?</label>
                        </div>
                        <div className="col span-2-of-3">
                            <select >
                                <option>Friends</option>
                                <option>Search Engine</option>
                                <option>Advertisement</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label>Newsletter?</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input type="checkbox" checked />Yes, please
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label>Drop us a line</label>
                        </div>
                        <div className="col span-2-of-3">
                            <textarea placeholder="Your message"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Send it!" className="btn btn-full"></input>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default ContactForm