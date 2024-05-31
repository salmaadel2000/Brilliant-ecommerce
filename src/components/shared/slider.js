import React from "react";
//import classes from '../css/slider.module.css';
// import firstImg from '../img/img1.jpg'
// import secondImg from '../img/img2.jpg'
// import thirdImg from '../img/img3.jpg'
// import fourthImg from '../img/img4.jpg'
// import sixthImg from '../img/img6.jpg'
// import first from '../img/slider1.jpg'
// import second from '../img/slider2.jpg'
// import third from '../img/slider3.jpg'


export default class Slider extends React.Component {


    render() {
        return (
            <section>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={process.env.PUBLIC_URL + `/img/slider/slider1.jpg`} style={{
                                height: '400px'
                            }} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={process.env.PUBLIC_URL + `/img/slider/slider2.jpg`} style={{
                                height: '400px'
                            }} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={process.env.PUBLIC_URL + `/img/slider/slider3.jpg`} style={{
                                height: '400px'
                            }} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        )
    }
}