import React from "react";
import Header from "./shared/header";


import Footer from "./shared/footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";






export default class AboutUs extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <section >
                    <div className="gallery-header">
                        <ul class="nav nav-pills nav-fill">
                            <li class="nav-item">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <button class="nav-link" >Home</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/gallery/women" style={{ textDecoration: 'none' }}>
                                    <button class="nav-link ">Gallery</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Login" style={{ textDecoration: 'none' }}>
                                    <button class="nav-link">Login</button>
                                </Link>
                            </li>
                            <li class="nav-item" >
                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                    <button class="nav-link">Register</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/aboutUs" style={{ textDecoration: 'none' }}>
                                    <button class="nav-link active" style={{ backgroundColor: '#EAEAE1', color: '#002244' }}>About Us</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" style={{ textDecoration: 'none' }}>
                                    <button class="nav-link">Contact Us</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/product" style={{ textDecoration: 'none' }}>
                                    <button class="nav-link">Product</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/cart" style={{ textDecoration: 'none' }}>
                                    <button class="nav-link">Cart</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <div class="bg-light">
                    <div class="container py-5">
                        <div class="row h-100 align-items-center py-5">
                            <div class="col-lg-6">
                                <h1 class="display-4"><b style={{ color: "#002244" }}>About us</b></h1>
                                <span class="lead text-muted mb-0">An exclusive connection to Egyptian designers for more meaningful buying.
                                    Menswear and womenwear crafted for you in numerous colours and refined materials.If you are feeling creative or if you can't find the style or fit that you are looking for, our custom offer is the answer. With our Custom Made and Made to Measure services.</span>

                            </div>
                            <div class="col-lg-6 d-none d-lg-block"><img src={process.env.PUBLIC_URL + `/img/Aboutus/Aboutus.jpg`} alt="" class="img-fluid" /></div>
                        </div>
                    </div>
                </div>

                <div class="bg-white py-5">
                    <div class="container py-5">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                                <h2 class="font-weight-light"><b style={{ color: "#002244" }}>Who we are</b></h2>
                                <p class="font-italic text-muted mb-4">Starting in 2014 out of our family workshop in cairo, Egypt; we have teamed up with 8 fellow Italian  craftsmen, all very eager to showcase their artisanal heritage and quintessential designs.From hand-hemmed tips to hand-stitched shoulders, our artisans craft all 40 Brilliant garments and accessories according to the highest quality standards to create hard-wearing everyday pieces for a timeless casual elegance.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                            </div>
                            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={process.env.PUBLIC_URL + `/img/Aboutus/Aboutus2.webp`}  alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-lg-5 px-5 mx-auto"><img src={process.env.PUBLIC_URL + `/img/Aboutus/Aboutus3.webp`} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                            <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                                <h2 class="font-weight-light"><b style={{ color: "#002244" }}>How we work</b></h2>
                                <p class="font-italic text-muted mb-4">We opted for a direct-to-artisan distribution model focused on made-to-order and custom services to ensure that we produce as much as possible what is needed exactly as needed by the final customer, with less compromises and wasteful use of resources. All with honest pricing, because more meaningful buying should not be a luxury.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

              
                <Footer />
            </div>
        )
    }
}



