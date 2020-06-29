import React from "react";
import Product from "../Pages/ProductsPage";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { ProductConsumer } from "../../context/context";

function AdsCategory() {
 
  return (
    <div className="Adscategory">
      <p> Top Selection</p>
      <hr />
      <div className="row">
        <ProductConsumer>
          {(product) => {
            return product.products.map((product) => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
      </div>
      <div className="row">
        <ProductConsumer>
          {(product) => {
            return product.products.map((product) => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
      </div>
      
    </div>
  );
}
export default AdsCategory;
