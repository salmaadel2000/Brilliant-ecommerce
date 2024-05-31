import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";

export default class Admin extends React.Component{
     render(){
         return(
             <>
             <Header/>
             <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                    </div>
                    <div class="col-md-9 register-right">
                       
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Add Product</h3>
                                <div class="row register-form">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Product Type*" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Title *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Description *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Price *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Image Name *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Add"/>
                                    </div>
                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
             </>
         )
     }
}