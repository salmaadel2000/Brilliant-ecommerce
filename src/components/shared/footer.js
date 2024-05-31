import React from "react";
import { Link } from "react-router-dom";
//import classes from '../css/footer.module.css';

export default class Footer extends React.Component {


    render() {
        return (

            <section>
                <div className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col fw-bold">
                                <p>Get connected with us on social networks:</p>
                            </div>
                            <div className="col d-flex flex-row-reverse">

                                <a href="" class="me-4 text-reset">
                                    <i class="fa fa-facebook-f"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fa fa-twitter"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fa fa-google"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fa fa-instagram"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fa fa-github"></i>
                                </a>

                            </div>
                            <hr></hr>

                        </div>
                        <div className="row mt-5 mb-4">

                            <div className="col fw-bold">
                                Brilliant
                            </div>
                            <div className="col fw-bold" >
                                Products
                            </div>
                            <div className="col fw-bold">
                                Useful Links
                            </div>
                            <div className="col fw-bold">
                                Contact
                            </div>
                        </div>
                        <div className="row mb-3" >
                            <div className="col">
                                <p className="lead">Brilliant is an international online market
                                    for clothes trading for both genders with best prices available at market </p>
                            </div>
                            <div className="col">
                                <p className="ms-3" >
                                    <a href="#!" class="text-reset">Men</a>
                                </p>
                                <p className="ms-1">
                                    <a href="#!" class="text-reset">Women</a>
                                </p>
                                <p className="ms-1">
                                    <a href="#!" class="text-reset">Children</a>
                                </p>

                            </div>
                            <div className="col">
                                <p>
                                    <a href="#!" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help</a>
                                </p>
                            </div>
                            <div className="col">
                                <p><i class="fa fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i class="fa fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i class="fa fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i class="fa fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center p-4 foot fw-bold">
                        <p> © 2021 Copyright :</p>
                        <a class="text-reset " href="#">All copy rights are reserved</a>
                    </div>
                </div>
            </section >
        )
    }
}