import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";
import Services from "../services/site.services";

export default class Admin extends React.Component{

    state={
        prodType:'',
        prodTitle:'',
        prodDesc:'',
        prodPrice:'',
        imgName:''
    }

    addingProduct = ()=>{
        let newProd = {
            prodType:this.state.prodType,
            title:this.state.prodTitle,
            desc:this.state.prodDesc,
            price:this.state.prodPrice,
            imgName:this.state.imgName
        }
        Services.addProduct(newProd).then((res)=>{
            alert(res.data.message)
        })
        console.log(newProd);
    }


     render(){
        const { prodType,prodTitle,prodDesc,prodPrice,imgName  } = this.state

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
                                            <input type="text" class="form-control" placeholder="Product Type*" value={prodType} onChange={(e) => {
                                            this.setState({
                                                prodType: e.target.value
                                            })
                                        }}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Title *" value={prodTitle} onChange={(e) => {
                                            this.setState({
                                                prodTitle: e.target.value
                                            })
                                        }}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Description *" value={prodDesc} onChange={(e) => {
                                            this.setState({
                                                prodDesc: e.target.value
                                            })
                                        }}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control"  placeholder="Price *" value={prodPrice} onChange={(e) => {
                                            this.setState({
                                                prodPrice: e.target.value
                                            })
                                        }}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control"  placeholder="Image Name *" value={imgName} onChange={(e) => {
                                            this.setState({
                                                imgName: e.target.value
                                            })
                                        }}/>
                                        </div>
                                        <input type="submit" onClick={this.addingProduct} class="btnRegister"  value="Add"/>
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