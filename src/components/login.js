import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./shared/footer";
import Header from '../components/shared/header'

import Services from "../services/site.services";

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        emailErr: {},
        passwordErr: {},
        DbCheck: '',
        Flag: false
    }

    handleValidation() {
        const { email, password } = this.state;
        let formIsValid = true;
        let emailErr = {};
        let passwordErr = {}
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

        this.setState({
            emailErr, passwordErr
        })
        return formIsValid
    }


    clkSubmit(e) {

        e.preventDefault()
        if (this.handleValidation()) {
            let user = {
                email: this.state.email,
                password: this.state.password
            }
            Services.checkUser(user).then((res) => {
                this.setState({
                    DbCheck: res.data.message,
                    Flag: true
                })
                // alert(res.data.message);
                if (res.data.logged) {
                    let session = { email: user.email, logged: true }
                    localStorage.setItem('userSession', JSON.stringify(session))
                    this.props.history.push('/')
                }
            })
        } else {
            //alert("Form has errors.");
            //console.log(this.state.errors);
        }
    }

    render() {
        const { email, password, emailErr, passwordErr, DbCheck } = this.state
        //console.log(errors.email);
        return (
            <section className="navSec">
                <div className="page">
                    <section>
                        <Header />
                    </section>
                </div>
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
                                    <input type="email" class="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => {
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
                                    <input type="password" class="form-control" value={password} onChange={(e) => {
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
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" />
                                    <label class="form-check-label" >Keep me logged in</label>
                                </div>
                                <div class="row justify-content-center">
                                    <button type="submit" class="btn loginbtn">Continue</button><br></br>
                                </div>
                                {/* <div class="row justify-content-center">
                                    {Object.keys(errors).map((key) => {
                                        return <div style={{
                                            color: 'red'
                                        }}>
                                            {errors[emailLength]}
                                        </div>
                                    })}
                                </div> */}


                                <div class="form-text">By signing in, you agree to our website's
                                    <font color='#46b5e8'> Condtions of Use</font> and <font color='#46b5e8'> Privacy Notice.</font></div>
                                <div className="help">  <BsFillCaretRightFill className='icon' /><font color='#46b5e8' >Need help?</font></div>
                            </form><br />
                            <div className="line">
                                <span className="new" >
                                    New to our site?
                                </span>
                            </div><br />
                            <div className="row">
                                <div className="col-12">
                                    <Link to="/register">
                                        <button type="button" class="btn btn-primary w-100" id="btn" >Create your account</button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
                <Footer />
            </section>
        )
    }
}