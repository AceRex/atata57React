import React, { Component } from "react";
import styled from "styled-components";
import Header from "../header/header";
import Footer from "../footer/footer";
import ItemCards from "../card/card";
import Pagetitle from "../card/pagetitle";
import Img1 from "../Pages/categoryImages/clothes.png";
import Img2 from "../Pages/categoryImages/Computer.png";
import Img3 from "../Pages/categoryImages/Furniture.png";
import Img4 from "../Pages/categoryImages/gadgets.png";
import Img5 from "../Pages/categoryImages/machine.png";
import Img6 from "../Pages/categoryImages/phones.png";
import Img7 from "../Pages/categoryImages/shoes.png";
import Img8 from "../Pages/categoryImages/appliance.png";
import Img9 from "../Pages/categoryImages/accessories.png";
import Img10 from "../Pages/categoryImages/Computer.png";

class TopSelling extends Component {
  render() {
    return (
      <>
        <Pagetitle Tag="Top Selling" />
        <div className="row mt-5">
          <div className="col-12">
            <CardRow>
              <div className="d-flex">
                <ItemCards
                  img={Img2}
                  title="Laptop"
                  amount1="20000"
                  amount2="100000"
                />
                <ItemCards
                  img={Img1}
                  title="Red Sweater from Congo"
                  amount1="200"
                  amount2="2000"
                />
                <ItemCards
                  img={Img10}
                  title="Brand New Laptop"
                  amount1="15000"
                  amount2="200000"
                />
                <ItemCards img={Img5} title="Tractors" amount1="2000000" />
                <ItemCards
                  img={Img3}
                  title="Furniture"
                  amount1="20000"
                  amount2="200000"
                />
              </div>
            </CardRow>
            <CardRow>
              <div className="d-flex">
                <ItemCards
                  img={Img4}
                  title="X-box Console"
                  amount1="2000"
                  amount2="20000"
                />
                <ItemCards
                  img={Img6}
                  title="I phone 7"
                  amount1="20000"
                  amount2="50000"
                />
                <ItemCards
                  img={Img7}
                  title="Children Sneakers"
                  amount1="500"
                  amount2="700"
                />
                <ItemCards
                  img={Img8}
                  title="Binatone Blender"
                  amount1="2000"
                  amount2="5000"
                />
                <ItemCards
                  img={Img9}
                  title="Red Sweater from Congo"
                  amount1="350"
                  amount2="2000"
                />
              </div>
            </CardRow>
            <CardRow>
              <div className="d-flex">
                <ItemCards
                  img={Img2}
                  title="Laptop"
                  amount1="20000"
                  amount2="200000"
                />
                <ItemCards
                  img={Img3}
                  title="Home Furniture"
                  amount1="20000"
                  amount2="20000"
                />
                <ItemCards
                  img={Img4}
                  title="X-box Console"
                  amount1="2000"
                  amount2="10000"
                />
                <ItemCards
                  img={Img6}
                  title="I phone"
                  amount1="10000"
                  amount2="50000"
                />
                <ItemCards
                  img={Img5}
                  title="Tractor"
                  amount1="100000"
                  amount2="200000"
                />
              </div>
            </CardRow>
            <CardRow>
              <div className="d-flex">
                <ItemCards
                  img={Img1}
                  title="Sweater"
                  amount1="2000"
                  amount2="20000"
                />
                <ItemCards
                  img={Img7}
                  title="Sneaker"
                  amount1="2000"
                  amount2="20000"
                />
                <ItemCards
                  img={Img5}
                  title="Tractor Machine"
                  amount1="2000"
                  amount2="20000"
                />
                <ItemCards
                  img={Img2}
                  title="Laptop Used from China"
                  amount1="2000"
                  amount2="20000"
                />
                <ItemCards
                  img={Img10}
                  title="Nigeria Used Laptop"
                  amount1="2000"
                  amount2="20000"
                />
              </div>
            </CardRow>
            <CardRow></CardRow>
          </div>
        </div>

        <Header />
        <Footer />
      </>
    );
  }
}
const CardRow = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export default TopSelling;
