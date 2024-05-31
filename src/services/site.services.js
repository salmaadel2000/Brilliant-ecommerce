import http from '../http-common';

class Services {
    getAll(){
        return http.get('/product')
    }

    addUser(newUser){
        return http.post('/register',newUser)
    }

    checkUser(inpEmail){
        return http.post('/login',inpEmail)
    }

    addProduct(newProd){
        return http.post('/addProduct',newProd)
    }

    getProducts(galleryType){
        return http.get(`/getProducts/${galleryType}`)
    }
}

export default new Services();