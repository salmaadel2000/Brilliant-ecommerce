import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";


import { Link } from 'react-router-dom'
class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "550px",
      width: "400px",
      paddingTop: "30px",
      textAlign: "center",
      background: "#002244",
      color: "#FFF",
      fontFamily: "sans-serif",
      // fontSize: "12px",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div className="container tt" >

        <div style={MyCarousel.CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
            <div style={MyCarousel.CARD_STYLE}>
              <img src={process.env.PUBLIC_URL + `/img/Home/home8.webp`} className="ss" />
              <div className="cc"><p>Fashion means something that is trendy or valued in
                a certain time period. The prevailing fashion/
                trends/style is called ‘vogue’.
                .</p></div>
              <Link to="/gallery/men">

                <button className="bb">Men</button>
              </Link>
            </div>
            {/*  */}
            <div style={MyCarousel.CARD_STYLE}>
              <img src={process.env.PUBLIC_URL + `/img/Home/home3.webp`} className="ss" />
              <div className="cc"><p>Fashion means something that is trendy or valued in
                a certain time period. The prevailing fashion/
                trends/style is called ‘vogue’.

                .</p></div>
              <Link to="/gallery/women">

                <button className="bb">Women</button>
              </Link>
            </div>
            {/*  */}
            <div style={MyCarousel.CARD_STYLE}>
              <img src={process.env.PUBLIC_URL + `/img/Home/kid1.webp`} className="ss" />
              <div className="cc"><p>Fashion means something that is trendy or valued in
                a certain time period. The prevailing fashion/
                trends/style is called ‘vogue’.

                .</p></div>
              <Link to="/gallery/kids">

                <button className="bb">Kids</button>
              </Link>

            </div>

          </ReactCardCarousel>
        </div>
      </div>

    );
  }
}



export default MyCarousel;

