import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Cart from "./components/cart"
import Product from "./components/product"
import Contact from './components/contactUs'
import AboutUs from './components/aboutUs'
import MenGallery from './components/menGallery'
import WomenGallery from './components/womenGallery'
import KidsGallery from './components/kidsGallery'
import Admin from "./components/admin";

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/home' component={Home} exact />
      <Route path='/register' component={Register} exact />
      <Route path='/Login' component={Login} exact />
      <Route path='/cart' component={Cart} exact />
      <Route path='/product' component={Product} exact />
      <Route path='/contact' component={Contact} exact />
      <Route path='/aboutUs' component={AboutUs} exact />
      <Route path='/gallery' component={MenGallery} exact />
      <Route path='/gallery/men' component={MenGallery} exact />
      <Route path='/gallery/women' component={WomenGallery} exact />
      <Route path='/gallery/kids' component={KidsGallery} exact />
      <Route path='/admin' component={Admin} exact />
    </Router>
  );
}

export default App;
