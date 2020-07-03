import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link as BrowserLink } from "@material-ui/core";
import axios from "axios";
import { BaseUrl } from "../../../BaseUrl";



export default class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: {},
      isFetching: false,
    };
  }
  componentDidMount() {
    this.setState({ isFetching: true });
    axios
      .get(`${BaseUrl}`)
      .then((response) => {
        this.setState({ posts: response.data, isFetching: false });
      })
      .catch((error) => this.setState({ error: error.response }));
  }
  
}

function BlogCard(props) {
  return (
    <>
      <Card>
        <div className="imageContainer">
          <img src={props.src} />
        </div>
        <div className="component">
          <span className="category">{props.categories}</span>

          <p className="title">{props.title}</p>
          <span className="content">{props.content}</span>
          <span>
            <a href="/blogPreview">...read more</a>
          </span>
          <div className="pr-d">
            <span className="postBy">{props.postBy}</span>
            <span className="date">{props.date}</span>
          </div>
        </div>
        <div></div>
      </Card>
    </>
  );
}

const Card = styled.div`
  margin: auto;
  width: 700px;
  display: flex;
  height: 150px;
  padding: 15px;
  border-bottom: solid 0.5px var(--colorAsh);
  .imageContainer {
    width: 20%;
    height: 100px;
    border: solid 0.4px var(--colorAsh);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .component {
    padding-left: 5px;
    .category {
      color: var(--colorAsh);
    }
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .content {
      height: 15px;
    }
    .pr-d {
      margin-bottom: 10px;
      .postBy {
        margin-right: 50px;
        color: var(--colorAsh);
      }
      .date {
        color: var(--colorAsh);
      }
    }
  }

  .button {
    font-size: 10px;
  }
`;