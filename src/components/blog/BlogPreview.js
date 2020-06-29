import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import BlogCard from "./blogCard";
import Sidebar from "./Sidebar";
import Footer from "../footer/footer"
import Blopost from "./Blogpost";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();
  let param = useParams()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />

        <ContentView>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Blopost id={param.id}/>
            </Grid>
            <Grid item xs={4}>
              <h3 className="tag">Related Posts</h3>
              <div className="related">
                <p className="categories">Information Technology</p>
                <span className="c-title">
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </span>
              </div>
              <div className="related">
                <p className="categories">Marketing</p>
                <span className="c-title">
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </span>
              </div>
              <div className="related">
                <p className="categories">Accounting</p>
                <span className="c-title">
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </span>
              </div>
              <div className="related">
                <p className="categories">Accounting</p>
                <span className="c-title">
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </span>
              </div>
              <div className="related">
                <p className="categories">Marketing</p>
                <span className="c-title">
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </span>
              </div>
              <div className="related">
                <p className="categories">Information Technology</p>
                <span className="c-title">
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </span>
              </div>
              <div className="related">
                <p className="categories">Information Technology</p>
                <span className="c-title">
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </span>
              </div>
              <div className="related">
                <p className="categories">Information Technology</p>
                <span className="c-title">
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </span>
              </div>
              <div className="social-links">
                <Sidebar archives={sidebar.archives} social={sidebar.social} />
              </div>
            </Grid>
          </Grid>
        </ContentView>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

const ContentView = styled.div`
  padding: 15px;
  .imageContainer {
    width: 800px;
    height: 450px;
    overflow: hidden;
    img {
      width: 800px;
      height: 450px;
    }
  }
  .Content {
    margin-top: 20px;
    .p-content {
      font-size: 15px;
      margin: 20px 0;
      justify-text: center;
    }
    .p-header {
      margin: 15px 0;
    }
  }
  .tag {
    width: 70%;
    margin: auto;
    margin-bottom: 15px;
  }
  .related {
    width: 70%;
    margin: auto;
    padding: 10px 0;
    border-bottom: solid 0.5px var(--colorAsh);
    .c-title {
      font-size: 17px;
      font-weight: bold;
      text-align: center;
      width: 80%;
      margin: auto;
    }
  }
  .social-links {
    width: 70%;
    margin: auto;
  }
`;
