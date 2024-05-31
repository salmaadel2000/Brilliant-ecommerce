import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./shared/footer";
import Header from "./shared/header";


export default class Contact extends React.Component {


    render() {
        return (
            <div>
                <section className="navSec">
                    <Header />

                    <div className="container mb-5 mt-5">
                        <div class="row justify-content-center">


                            <div class="col-lg-6 col-sm-12">
                                <h1 class="contact-h">LIFE<br />
                                    IT COULD BE <br />
                                    JUST THE THING<br />
                                    YOUR BRAND<br />
                                    NEEDS.</h1>

                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <form className="form">
                                    <div class=" justify-content-center">
                                        <h1 class="contact-header">Contact Us</h1>
                                    </div>

                                    <div class="mb-3">


                                        <label class="form-label">Name</label>
                                        <input type="text" class="form-control" placeholder="Please, Enter your name" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Email address</label>
                                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Please, Enter your email" />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Mobile</label>
                                        <input type="tel" class="form-control" placeholder="+123" />
                                    </div>
                                    <div class="mb-3 justify-content-center">
                                        <div class="form-group green-border-focus">
                                            <label class="form-label" >Your massage</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea5" rows="3" placeholder="Be nice!"></textarea>
                                        </div>
                                    </div>

                                    <div class="row justify-content-center">
                                        <button type="submit" class="btn loginbtn">Send it!</button>
                                    </div>

                                </form>
                            </div>


                        </div>
                    </div>
                    <Footer />
                </section>
            </div>
        )
    }
}