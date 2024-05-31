import React from "react";
import { Link } from "react-router-dom";
import Footer from "./shared/footer";
import Header from "./shared/header";
import Services from "../services/site.services";


export default class Register extends React.Component {
    state = {
        email: '',
        password: '',
        mobile: '',
        address: '',
        gender: '',
        emailErr: {},
        passwordErr: {},
        mobileErr: {},
        addressErr: {},
        genderErr: {},
        DbCheck: '',
        Flag: false
    }

    handleValidation() {
        const { email, password, mobile, address } = this.state;
        let formIsValid = true;
        let emailErr = {};
        let passwordErr = {};
        let mobileErr = {};
        let addressErr = {};
        //Email Validation

        if (!email) {
            emailErr.emailLength = "Email cannot be empty";
            formIsValid = false
        }
        let emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        if (!email.match(emailReg)) {
            emailErr.email = "Email is not valid, Please enter valid email"
            formIsValid = false;
        }

        //End of Email Validation



        //Password Validation
        if (!password) {
            passwordErr.passwordLength = "Password cannot be empty"
            formIsValid = false
        }
        let passwordReg = /(?=.*[0-9])/
        if (!password.match(passwordReg)) {
            passwordErr.password = "Password is not valid, must contain at least 10 chars special characters and numbers"
            formIsValid = false;
        }
        //End of Password Validation


        //Mobile Validation
        if (!mobile) {
            mobileErr.mobileLength = "Phone Number cannot be empty"
            formIsValid = false
        }
        let mobileReg = /^01[0125][0-9]{8}$/
        if (!mobile.match(mobileReg)) {
            mobileErr.mobile = "Phone Number is not valid, ex:  + 01 234 567 88"
            formIsValid = false;
        }

        if (!address) {
            addressErr.addressLength = "Address cannot be empty"
            formIsValid = false
        }
        // let mobileReg=/^01[0125][0-9]{8}$/
        // if (!mobile.match(mobileReg)) {
        //     mobileErr.mobile = "Phone Number is not valid, ex:01012345678"
        //     formIsValid = false;
        // }
        this.setState({
            emailErr, passwordErr, mobileErr, addressErr
        })
        return formIsValid
    }


    clkSubmit(e) {

        e.preventDefault()
        if (this.handleValidation()) {
            let newUser = {
                email: this.state.email,
                password: this.state.password,
                mobile: this.state.mobile,
                address: this.state.address,
                gender: this.state.gender,
            }

            Services.addUser(newUser).then((res) => {
                this.setState({
                    DbCheck: res.data.message,
                    Flag: true
                })
            })


        } else {
            //alert("Form has errors.");
            //console.log(this.state.errors);
        }
    }

    render() {
        const { email, password, mobile, address, emailErr, passwordErr, mobileErr, addressErr, DbCheck } = this.state
        return (
            <div>
                <section className="navSec">
                    <Header />
                    <div className="container-fluid mb-5 mt-5">
                        <section className="row justify-content-center">
                            <section className="col-12 col-sm-6 col-md-6 col-lg-3">
                                <form className="form" onSubmit={(e) => {
                                    this.clkSubmit(e)

                                }}>
                                    <div className="mt-3 mb-3">
                                        {
                                            <div style={this.state.Flag ? {} : { display: 'none' }} className="alert alert-danger">
                                                {DbCheck}
                                            </div>
                                        }
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Email address</label>
                                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="your email please" value={email} onChange={(e) => {
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }} />
                                    </div>
                                    <div className="mt-3 mb-3">
                                        {Object.keys(emailErr).map((key) => {
                                            return <div key={key} className="alert alert-danger">
                                                {emailErr[key]}
                                            </div>
                                        })}
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" minlength="5" placeholder="At Least 10 characters" value={password} onChange={(e) => {
                                            this.setState({
                                                password: e.target.value
                                            })
                                        }} />
                                    </div>

                                    <div className="mt-3 mb-3">
                                        {Object.keys(passwordErr).map((key) => {
                                            return <div key={key} className="alert alert-danger">
                                                {passwordErr[key]}
                                            </div>
                                        })}
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Phone Number</label>
                                        <input type="tel" class="form-control" placeholder="01012345678" value={mobile} onChange={(e) => {
                                            this.setState({
                                                mobile: e.target.value
                                            })
                                        }} />
                                    </div>
                                    <div className="mt-3 mb-3">
                                        {Object.keys(mobileErr).map((key) => {
                                            return <div key={key} className="alert alert-danger">
                                                {mobileErr[key]}
                                            </div>
                                        })}
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Address</label>
                                        <input type="text" class="form-control" placeholder="your adress please" value={address} onChange={(e) => {
                                            this.setState({
                                                address: e.target.value
                                            })
                                        }} />
                                    </div>
                                    <div className="mt-3 mb-3">
                                        {Object.keys(addressErr).map((key) => {
                                            return <div key={key} className="alert alert-danger">
                                                {addressErr[key]}
                                            </div>
                                        })}
                                    </div>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-4">
                                                <label class="form-label">Gender</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="radio" id="contactChoice1"
                                                    name="contact" value="Male" checked={this.state.gender === 'Male'} onChange={(e) => {
                                                        this.setState({
                                                            gender: e.target.value
                                                        })
                                                    }} />
                                                <label for="contactChoice1" className="ms-1" >Male</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="radio" id="contactChoice1"
                                                    name="contact" value="Female" checked={this.state.gender === 'Female'} onChange={(e) => {
                                                        this.setState({
                                                            gender: e.target.value
                                                        })
                                                    }} />
                                                <label for="contactChoice1" className="ms-1" >Female</label>
                                            </div>
                                        </div>



                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" />
                                        <label class="form-check-label" >Keep me logged in</label>
                                    </div>
                                    <div class="row justify-content-center">
                                        <button type="submit" class="btn loginbtn">Sign up!</button>
                                    </div>


                                </form><br />
                                <div className="line ">
                                    <p className="new" >
                                        Aleardy have an account?
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <Link to="/Login">
                                        <button type="button" class="btn btn-primary  w-100 mt-2" id="btn" >Sign in</button>
                                    </Link>

                                </div>


                            </section>
                        </section>
                    </div>
                    <Footer />
                </section>
            </div>
        )
    }
}