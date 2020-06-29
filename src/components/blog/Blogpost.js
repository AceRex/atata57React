import React, { Component } from "react";
import Axios from "axios";
import { BaseUrl } from "../BaseUrl";
import { CircularProgress } from "@material-ui/core";

export default class Blopost extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      error: null,
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    Axios.get(`${BaseUrl}/${this.props.id}`)
      .then((res) => {
        this.setState({ isLoading: false });
        this.setState({ post: res.data });
      })
      .catch((err) => this.setState({ error: err.respose, isLoading: false }));
  }
  render() {
    const { post, error } = this.state;
    return this.state.isLoading ? (
      <CircularProgress />
    ) : (
      <div>
        <div className="imageContainer">
          <img src={post.image} />
        </div>
        <div className="Content">
          <h1>{post.title}</h1>
          <p className="p-content">{post.body}</p>
        </div>
      </div>
    );
  }
}
