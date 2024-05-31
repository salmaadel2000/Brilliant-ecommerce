import React from "react";
// import firstd from '../components/img/d1.jpg'
// import secondd from '../components/img/d2.jpg'
// import thirdd from '../components/img/d3.jpg'
import Footer from "./shared/footer";
import { Link } from "react-router-dom";
import Header from "./shared/header";


export default class Product extends React.Component {
    state = {
        cartProd: [],
        prod: this.props.location.product,
        prodTitle: this.props.location.product.title,
        prodDesc: this.props.location.product.desc,
        prodPrice: this.props.location.product.price,
        prodType:this.props.location.product.prodType,
        imgName:this.props.location.product.imgName,
        logged: false,
        isBought: false

    }

    componentDidMount() {
        let cartProds = JSON.parse(localStorage.getItem('cartArr'))
        this.setState({
            cartProd: cartProds
        })
        let userSession = JSON.parse(localStorage.getItem('userSession'))
        if (userSession) {
            this.setState({
                logged: userSession.logged
            })
        }
    }

    componentWillUnmount() {
        localStorage.setItem('cartArr', JSON.stringify(this.state.cartProd))
    }

    render() {
        const{imgName,prodType} = this.state
        return (
            <section className="productDetails">
                <Header />
                <div className="container">
                    {
                        <div style={this.state.isBought ? {} : { display: 'none' }} className="alert alert-success text-center">
                            You have completed your purchase
                        </div>
                    }
                    <div className="row mb-5">
                        <div className="product">
                            {/* <li class="carousel-indicators bg-dark">
                                <img src={firstd} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></img>
                                <img src={firstd} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></img>
                                <img src={firstd} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></img>
                            </li> */}
                        </div>
                        <div className=" col-xs-12 col-lg-5">
                            <div id="carouselExampleIndicators" class="carousel slide mb-5" data-bs-ride="carousel">
                                <div class="carousel-inner mb-4">
                                    <div class="carousel-item active">
                                        <img src={process.env.PUBLIC_URL + `/img/${prodType}/${imgName}.webp`} class="d-block w-100" alt="..." />
                                    </div>
                                    {/* <div class="carousel-item">
                                        <img src={process.env.PUBLIC_URL + `/img/Product/d2.jpg`} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={process.env.PUBLIC_URL + `/img/Product/d3.jpg`} class="d-block w-100" alt="..." />
                                    </div> */}
                                </div>
                                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button> */}
                            </div>
                        </div>

                        <div className="col-xs-12 col-lg-5">
                            <h5>{this.state.prodTitle}</h5>
                            <p class="mb-2 text-muted text-uppercase small">Shirts</p>
                            <ul class="rating">
                                <li>
                                    <i class="fa fa-star fa-sm text-primary"></i>
                                    <i class="fa fa-star fa-sm text-primary"></i>
                                    <i class="fa fa-star fa-sm text-primary"></i>
                                    <i class="fa fa-star fa-sm text-primary"></i>
                                    <i class="fa fa-star fa-sm text-primary"></i>
                                </li>
                            </ul>
                            <p><span class="mr-1"><strong>{this.state.prodPrice}</strong></span></p>
                            <p class="pt-1">{this.state.prodDesc}</p>

                            <div class="table-responsive mb-4">
                                <table class="table table-sm table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th class="w-25" ><strong>Model</strong></th>
                                            <td>Shirt 5407X</td>
                                        </tr>
                                        <tr>
                                            <th class="w-25"><strong>Color</strong></th>
                                            <td>Black</td>
                                        </tr>
                                        <tr>
                                            <th class="w-25"><strong>Delivery</strong></th>
                                            <td>USA, Europe</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr></hr>
                            <div class="table-responsive mb-2">
                                <table class="table table-sm table-borderless">
                                    <tbody>
                                        <tr className="mb-3">
                                            <td class="pl-0 pb-0 w-25">Quantity</td>
                                            <td class="pb-0">Select size</td>
                                        </tr>
                                        <tr>
                                            <td class="pl-0">
                                                <div class="me-4">
                                                    <input class="form-control" min="0" name="quantity" value="1" type="number" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="row mt-2 ms-2">
                                                    <div class="col-xs-12 col-lg-3 form-check form-check-inline pl-0">
                                                        <input type="radio" class="form-check-input" id="small" name="radio" checked />
                                                        <label class="form-check-label text-uppercase"
                                                            for="small">Small</label>
                                                    </div>
                                                    <div class="col-xs-12 col-lg-3 form-check form-check-inline pl-0">
                                                        <input type="radio" class="form-check-input" id="medium" name="radio" />
                                                        <label class="form-check-label text-uppercase"
                                                            for="medium">Medium</label>
                                                    </div>
                                                    <div class="col-xs-12 col-lg-3 form-check form-check-inline pl-0">
                                                        <input type="radio" class="form-check-input" id="large" name="radio" />
                                                        <label class="form-check-label text-uppercase"
                                                            for="large">Large</label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>



                            <button onClick={() => {
                                if (!this.state.logged) {
                                    return (
                                        this.props.history.push('/Login')
                                    )
                                } else {
                                    this.setState({
                                        isBought: true
                                    })
                                    this.setState({
                                        cartArr: []
                                    })
                                    localStorage.setItem('cartArr', ['[]'])
                                }
                            }} type="button" id="buynow" class="btn btn-primary ms-1 mb-2">Buy now</button>

                            <button onClick={() => {
                                this.state.cartProd.push(this.state.prod)
                            }} type="button" class="btn btn-secondary ms-1 mb-2"><i
                                class="fa fa-shopping-cart me-1 text-secondary"></i>Add to cart</button>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}