import React, { Component } from "react";
import "../account.css";
import { Link } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import styled from "styled-components";

class Register extends Component {
  render() {
    return (
      <>
        <div className="registerMain">
          <p class="regH">Choose an Account Type</p>
          <Contains>
            <Link to="/IndividualRegistration" className="accountCard user">
              <i class="fas fa-user"></i>
              <p>Buyer</p>
            </Link>
            <Link to="/CompanyReg" class="accountCard company">
              <i class="fas fa-building"></i>
              <p>Service Provider</p>
            </Link>
            <Link to="/ProductSellerRegistration" class="accountCard seller">
              <i class="fas fa-briefcase"></i>
              <p>Products Suppliers</p>
            </Link>
            <Link to="/WarehouseRegistration" class="accountCard warehouse">
              <i class="fas fa-warehouse"></i>
              <p>Warehouse</p>
            </Link>
          </Contains>
          <div
            className="register"
            style={{ margin: "5% auto", padding: "2%" }}
          >
            <p>
              Already have an account?
              <Link to="/SignIn">
                <span>Signin</span>
              </Link>
            </p>
          </div>
        </div>
        <Header />
        <Footer />
      </>
    );
  }
}

const Contains = styled.div`
  display: flex;
  margin-top: 20px;
  i{
    font-size: 40px;
  }
  a{
    text-align: center;
    padding: 30px;
    margin: 20px;
    width: 20%;
    p{
      font-size: 17px;
    }
  }
`;

export default Register;
