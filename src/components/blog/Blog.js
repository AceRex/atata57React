import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import Footer from "../footer/footer";
import Sidebar from "./Sidebar";

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

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
           
            <Grid item xs={8}>
              
            <BlogCard src={mainFeaturedPost.image} categories="Information Technology" title="Think Tech Space" content={mainFeaturedPost.description} postBy="Osobee" date="31/02/2020" link="/"/>
            <BlogCard src={mainFeaturedPost.image} categories="Accounting" title="Money, Money, Money" content={mainFeaturedPost.description} postBy="Osobee" date="31/2/2020" />
            <BlogCard src={mainFeaturedPost.image} categories="Marketing" title="How to gain followers on Instagram" content={mainFeaturedPost.description} postBy="Osobee" date="31/2/2020" />
            <BlogCard src={mainFeaturedPost.image} categories="Marketing" title="What you should not do with your salary" content={mainFeaturedPost.description} postBy="Osobee" date="31/2/2020" />
            <BlogCard src={mainFeaturedPost.image} categories="Accounting" title="New CBN policy" content={mainFeaturedPost.description} postBy="Osobee" date="31/2/2020" />
            <BlogCard src={mainFeaturedPost.image} categories="Accounting" title="Forex Trading; Gold selling +5" content={mainFeaturedPost.description} postBy="Osobee" date="31/2/2020" />
            <BlogCard src={mainFeaturedPost.image} categories="Accounting" title="Investment and Banking" content={mainFeaturedPost.description} postBy="Osobee" date="31/2/2020" />
            <BlogCard src={mainFeaturedPost.image} categories="Accounting" title="BLOOMBERG:Things are not going well" content={mainFeaturedPost.description} postBy="Osobee" date="31/2/2020" />
            <BlogCard src={mainFeaturedPost.image} categories="Information Techology" title="How Facebook was built" content={mainFeaturedPost.description} postBy="Osobee" date="31/2/2020" />
            </Grid>
              <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              />
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
