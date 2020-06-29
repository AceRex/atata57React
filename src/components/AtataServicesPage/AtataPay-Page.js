import React, { Component } from "react";
import styled from "styled-components";
import ImageWallet from "../Image/5ee108f9178fd.png";

export default class AtataPay extends Component {
  render() {
    return (
      <Container>
            <div className=" top d-flex">
                <div className="content">
<p> </p>
                </div>
                <div className="DisplayImage">

                    <img src={ImageWallet} />
                </div>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: var(--colorWhite);
  background: 
  .top{
      overflow: hidden;
      height: 325px;
      .content{
          width:70%
      }
      .DisplayImage{
          img{
              width: 500px;
          }
      }
  }
`;
