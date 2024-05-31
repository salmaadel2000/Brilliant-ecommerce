import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";
import './css/style.css';


import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";


export default class Cart extends React.Component {

    state = {
        cartArr: [],
        logged: false,
        isBought: false
    }

    componentDidMount() {
        let userSession = JSON.parse(localStorage.getItem('userSession'))
        if (userSession) {
            this.setState({
                logged: userSession.logged
            })
        }
        this.setState({
            cartArr: JSON.parse(localStorage.getItem('cartArr'))
        })

    }

    render() {

        let isLogged = this.state.logged
        return (
            <>
                <Header />
                <div class="container padding-bottom-3x mb-1">
                    {
                        <div style={this.state.isBought ? {} : { display: 'none' }} className="alert alert-success text-center">
                            You have completed your purchase
                        </div>
                    }
                    <div class="alert alert-info alert-dismissible fade show text-center" >
                        <span class="alert-close" data-dismiss="alert"></span>
                        <img class="d-inline align-center" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAzIDUxMi4wMDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDMgNTEyLjAwMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMjU2LjAwMSw2NGMtNzAuNTkyLDAtMTI4LDU3LjQwOC0xMjgsMTI4czU3LjQwOCwxMjgsMTI4LDEyOHMxMjgtNTcuNDA4LDEyOC0xMjhTMzI2LjU5Myw2NCwyNTYuMDAxLDY0eiAgICAgIE0yNTYuMDAxLDI5OC42NjdjLTU4LjgxNiwwLTEwNi42NjctNDcuODUxLTEwNi42NjctMTA2LjY2N1MxOTcuMTg1LDg1LjMzMywyNTYuMDAxLDg1LjMzM1MzNjIuNjY4LDEzMy4xODQsMzYyLjY2OCwxOTIgICAgIFMzMTQuODE3LDI5OC42NjcsMjU2LjAwMSwyOTguNjY3eiIgZmlsbD0iIzUwYzZlOSIvPgoJCQk8cGF0aCBkPSJNMzg1LjY0NCwzMzMuMjA1YzM4LjIyOS0zNS4xMzYsNjIuMzU3LTg1LjMzMyw2Mi4zNTctMTQxLjIwNWMwLTEwNS44NTYtODYuMTIzLTE5Mi0xOTItMTkycy0xOTIsODYuMTQ0LTE5MiwxOTIgICAgIGMwLDU1Ljg1MSwyNC4xMjgsMTA2LjA2OSw2Mi4zMzYsMTQxLjE4NEw2NC42ODQsNDk3LjZjLTEuNTM2LDQuMTE3LTAuNDA1LDguNzI1LDIuODM3LDExLjY2OSAgICAgYzIuMDI3LDEuNzkyLDQuNTY1LDIuNzMxLDcuMTQ3LDIuNzMxYzEuNjIxLDAsMy4yNDMtMC4zNjMsNC43NzktMS4xMDlsNzkuNzg3LTM5Ljg5M2w1OC44NTksMzkuMjMyICAgICBjMi42ODgsMS43OTIsNi4xMDEsMi4yNCw5LjE5NSwxLjI4YzMuMDkzLTEuMDAzLDUuNTY4LTMuMzQ5LDYuNjk5LTYuNGwyMy4yOTYtNjIuMTQ0bDIwLjU4Nyw2MS43MzkgICAgIGMxLjA2NywzLjE1NywzLjU0MSw1LjYzMiw2LjY3Nyw2LjcyYzMuMTM2LDEuMDY3LDYuNTkyLDAuNjQsOS4zNjUtMS4yMTZsNTguODU5LTM5LjIzMmw3OS43ODcsMzkuODkzICAgICBjMS41MzYsMC43NjgsMy4xNTcsMS4xMzEsNC43NzksMS4xMzFjMi41ODEsMCw1LjEyLTAuOTM5LDcuMTI1LTIuNzUyYzMuMjY0LTIuOTIzLDQuMzczLTcuNTUyLDIuODM3LTExLjY2OUwzODUuNjQ0LDMzMy4yMDV6ICAgICAgTTI0Ni4wMTcsNDEyLjI2N2wtMjcuMjg1LDcyLjc0N2wtNTIuODIxLTM1LjJjLTMuMi0yLjExMi03LjMxNy0yLjM4OS0xMC42ODgtMC42NjFMOTQuMTg4LDQ3OS42OGw0OS41NzktMTMyLjIyNCAgICAgYzI2Ljg1OSwxOS40MzUsNTguNzk1LDMyLjIxMyw5My41NDcsMzUuNjA1TDI0Ni43LDQxMS4yQzI0Ni40ODcsNDExLjU2MywyNDYuMTY3LDQxMS44NCwyNDYuMDE3LDQxMi4yNjd6IE0yNTYuMDAxLDM2Mi42NjcgICAgIEMxNjEuOSwzNjIuNjY3LDg1LjMzNSwyODYuMTAxLDg1LjMzNSwxOTJTMTYxLjksMjEuMzMzLDI1Ni4wMDEsMjEuMzMzUzQyNi42NjgsOTcuODk5LDQyNi42NjgsMTkyICAgICBTMzUwLjEwMywzNjIuNjY3LDI1Ni4wMDEsMzYyLjY2N3ogTTM1Ni43NTksNDQ5LjEzMWMtMy40MTMtMS43MjgtNy41MDktMS40NzItMTAuNjg4LDAuNjYxbC01Mi4zNzMsMzQuOTIzbC0zMy42NDMtMTAwLjkyOCAgICAgYzQwLjM0MS0wLjg1Myw3Ny41ODktMTQuMTg3LDEwOC4xNi0zNi4zMzFsNDkuNTc5LDEzMi4yMDNMMzU2Ljc1OSw0NDkuMTMxeiIgZmlsbD0iIzUwYzZlOSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" width="18" height="18" alt="Medal icon" />&nbsp; &nbsp; With this purchase you will earn <strong>290</strong> Reward Points.</div>
                    <div class="table-responsive shopping-cart">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th class="text-center">Quantity</th>
                                    <th class="text-center">Subtotal</th>
                                    <th class="text-center"><a onClick={() => {
                                        this.setState({
                                            cartArr: []
                                        })
                                        localStorage.setItem('cartArr', ['[]'])
                                    }} class="btn btn-sm btn-outline-danger" href="#">Clear Cart</a></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <tr>
                                        <td colSpan="4">
                                            <p style={this.state.cartArr.length == 0 ? {} : { display: 'none' }} className="alert alert-warning text-center">
                                                There's nothing to see here, please add some items :)
                                            </p>
                                        </td>
                                    </tr>
                                }
                                {this.state.cartArr.map((prod, index) => {
                                    return (
                                        <tr>
                                            <td>




                                                <div class="product-item">
                                                    <img className="myimg" src={process.env.PUBLIC_URL + `/img/${prod.prodType}/${prod.imgName}.webp`} alt="Product" />&nbsp; &nbsp;
                                                    <div class="product-info">
                                                        <h4 class="product-title">{prod.title}</h4>
                                                        <span>{prod.desc}.</span>
                                                        <br /><span><em>Size:</em> L</span><br /><span><em>Color:</em> Medium Heather Gray</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                <div class="count-input">
                                                    <select class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td class="text-center text-lg text-medium">{prod.price}</td>
                                            <td class="text-center"><BsTrash style={{ cursor: "pointer" }} onClick={() => {
                                                this.state.cartArr.splice(index, 1)
                                                localStorage.setItem('cartArr', JSON.stringify(this.state.cartArr))
                                                this.setState({
                                                    cartArr: this.state.cartArr
                                                })
                                            }} className="myicon" /></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div class="shopping-cart-footer">
                        <div class="column">
                            <form class="coupon-form" method="post">
                                <input class="form-control form-control-sm" type="text" placeholder="Coupon code" required="" />&nbsp; &nbsp;
                                <button class="btn btn-outline-primary btn-sm" type="submit">Apply Coupon</button>
                            </form>
                        </div>
                        <div class="column text-lg">Subtotal: <span class="text-medium">$289.68</span></div>
                    </div>
                    <div class="shopping-cart-footer">
                        <div class="column"><Link to="/gallery"><button class="btn btn-outline-secondary" > Back to Shopping</button></Link></div>
                        <div class="column">
                            {isLogged
                                ? <a onClick={() => {
                                    this.setState({
                                        isBought: true
                                    })
                                    this.setState({
                                        cartArr: []
                                    })
                                    localStorage.setItem('cartArr', ['[]'])


                                }} class="btn btn-success" href="#">Checkout</a>
                                : <Link to="/Login" class="btn btn-success" href="#">Checkout</Link>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
        // } else {
        //     return (
        //         <div>nothing to buy</div>
        //     )
        // }

    }
}