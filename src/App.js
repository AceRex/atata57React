import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Pages//

import Page from "../src/components/Pages/MainPage";
import NotFound from "./components/Pages/pageNotFound/PageNotFound";
import MainScreen from "../src/components/accounts/mainScreen";
import Login from "../src/components/accounts/Login";
import AdminLogin from "../src/components/admin/adminlogin";
import Register from "../src/components/accounts/registerPages/RegisterMain";
import RegisterUser from "../src/components/accounts/registerPages/registerUser";
import Cart from "./components/Pages/CartCss/cart";
import RFQ from "../src/components/Pages/rfq";
import Wishlist from "../src/components/Pages/wishlist";
import ProductPage from "./components/Pages/ProductsPage";
import PreviewPage from "./components/Pages/PreviewPage";
import AtataCareer from "../src/components/AtataServicesPage/Atata-careerPage";
import AtataInsurance from "../src/components/AtataServicesPage/Atata-insurancePage";
import AtataLogistics from "../src/components/AtataServicesPage/Atata-logisticsPage";
import AtataWallet from "../src/components/AtataServicesPage/Atata-walletPage";
import AtataWarehouse from "../src/components/AtataServicesPage/Atata-warehousePage";
import AtataPay from "../src/components/AtataServicesPage/AtataPay-Page";
import TopSelling from "./components/Pages/TopSelling";
import Blog from "./components/blog/Blog";
import Checkout from "./components/Pages/Checkout";
import AdminDashboard from "./components/admin/dashboard";
import BlogPreview from "./components/blog/BlogPreview";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Page} />
        <Route exact path="/MyAccount" component={MainScreen} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/SignIn" component={Login} />
        <Route exact path="/AdminLogin" component={AdminLogin} />
        <Route exact path="/AdminDashboard" component={AdminDashboard} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/RFQ" component={RFQ} />
        <Route exact path="/Whislist" component={Wishlist} />
        <Route exact path="/ProductPage" component={ProductPage} />
        <Route exact path="/Details" component={PreviewPage} />
        <Route exact path="/TopSelling" component={TopSelling} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/blogPreview" component={BlogPreview} />
        <Route exact path="/IndividualRegistration" component={RegisterUser} />
        <Route exact path="/atataPay" component={AtataPay} />
        <Route exact path="/atataWallet" component={AtataWallet} />
        <Route exact path="/atataWarehouse" component={AtataWarehouse} />
        <Route exact path="/atataLogistics" component={AtataLogistics} />
        <Route exact path="/atataInsurance" component={AtataInsurance} /> 
     <Route exact path="/checkout" component={Checkout} />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
