import React from "react";
import Header from "./shared/header";
import Slider from "./shared/slider";
import Footer from "./shared/footer";
import MyCarousel from "./shared/MyCarousel";
import Imgcenter from "./shared/Imgcenter";
// import first from '../components/img/home4.webp'
// import second from '../components/img/home7.webp'
// import third from '../components/img/home3.webp'
// import fourth from '../components/img/home1.webp'
// import fifth from '../components/img/home8.webp'
// import sixth from '../components/img/home6.webp'
import { GiMoneyStack, GiClothes } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { FaRoad } from "react-icons/fa";

//
export default class Home extends React.Component {
  componentDidMount() {
    let cartProds = JSON.parse(localStorage.getItem("cartArr"));
    if (cartProds && cartProds !== null) {
      console.log("already got cart");
    } else {
      localStorage.setItem("cartArr", JSON.stringify([]));
    }
  }

  render() {
    return (
      <section className="home">
        <Header />
        <Slider />

        <div className="container">
          <div className="home-4">
            <h1 className="home-4-h text-center">
              We bring best things <span className="for">For</span> clients
            </h1>
            <div className="row justify-content-between  ">
              <div className="col-4  card">
                <GiMoneyStack className="icon-home" />

                <p class="card-text">
                  Our prices are suitable for everyone and are equal to world
                  market prices,Our prices are suitable for everyone and are
                  equal to world market prices,Our prices are suitable for
                  everyone and are equal to world market prices
                </p>
              </div>
              <div className="col-4 card">
                <AiOutlineCar className="icon-home" />
                <p class="card-text">
                  We can help you and deliver anywhere in the world to keep you
                  warm and stylish, We can help you and deliver anywhere in the
                  world to keep you warm and stylish ,We can help you and
                  deliver anywhere in the world to keep you warm and stylish
                </p>
              </div>
              <div className="col-4 card">
                <GiClothes className="icon-home" />
                <p class="card-text">
                  Our clothes are made with the best types of fabrics, with
                  love, especially for you .Our clothes are made with the best
                  types of fabrics, with love, especially for youOur clothes are
                  made with the best types of fabrics, with love, especially for
                  you.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h4 className="home-p">
                Fashion and garments take a big place in the minds of people,
                especially celebrities, where they show us the personality of
                the person who wears them. Fashion is a world that has developed
                over the years to become one of the most important trends of our
                time.
              </h4>
            </div>
            <div className="col-xs-12 col-lg-6">
              <MyCarousel />
            </div>
          </div>
        </div>
        <Imgcenter />

        <div className="home-3 container ">
          <h2 className="home-eve">
            <span className="for">For</span> you
          </h2>
          <div className="row">
            <div className="col">
              <img
                src={process.env.PUBLIC_URL + `/img/Home/home1.webp`}
                class="border-button"
              ></img>
            </div>

            <div className="col ">
              <h4 className="home-p">
                Fashion and garments take a big place in the minds of people,
                especially celebrities, where they show us the personality of
                the person who wears them. Fashion is a world that has developed
                over the years to become one of the most important trends of our
                time.
              </h4>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    );
  }
}
