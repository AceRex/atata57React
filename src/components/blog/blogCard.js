import React, { Component } from "react";
import styled from "styled-components";
import { Button, ListItem, List } from "@material-ui/core";
import { Link as BrowserLink } from "@material-ui/core";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";
import { useHistory } from "react-router-dom";
export default class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: {},
      isFetching: false,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ isFetching: true });
    axios
      .get(`${BaseUrl}`)
      .then((response) => {
        this.setState({ posts: response.data, isFetching: false });
      })
      .catch((error) => this.setState({ error: error }));
  }

  render() {
    return (
      <>
        {this.state.posts.length > 0 ? (
          this.state.posts.map((post, key) => (
            <React.Fragment key={key}>
              <List>
                <BlogCard post={post} />
              </List>
            </React.Fragment>
          ))
        ) : (
          <>
            {" "}
            {this.state.error ? (
              this.state.error.response ? (
                <>Network error</>
              ) : (
                <p className="alert alert-danger">
                  {JSON.stringify(this.state.error.message) ||
                    JSON.stringify(this.state.error.response).message || (
                      <>Network error</>
                    )}
                </p>
              )
            ) : (
              <p>empty posts</p>
            )}{" "}
          </>
        )}
      </>
    );
  }
}

function BlogCard(props) {
  const { post } = props;
  let history = useHistory();
  const handleNavigate = (id) =>
    history.push({
      pathname: "/blogPreview/" + id,
    });
  return (
    <>
      <ListItem button onClick={() => handleNavigate(post.id)}>
        <Card>
          <div className="imageContainer">
            <img src={post.src} alt="" />
          </div>
          <div className="component">
            <span className="category">{post.categories}</span>

            <p className="title">{post.title}</p>
            <span className="content">{post.body.substring(1, 50)}</span>
            <span>
              <a href="/blogPreview">...read more</a>
            </span>
            <div className="pr-d">
              <span className="postBy">{props.postBy}</span>
              <span className="date">{post.date}</span>
            </div>
          </div>
        </Card>
      </ListItem>
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
