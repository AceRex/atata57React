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

        <ContentView>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <div className="imageContainer">
                <img src={mainFeaturedPost.image} />
              </div>
              <div className="Content">
                <h1>{mainFeaturedPost.title}</h1>
                <p className="p-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Massa id neque aliquam vestibulum morbi blandit cursus.
                  Habitant morbi tristique senectus et. Pellentesque pulvinar
                  pellentesque habitant morbi tristique senectus. Consequat nisl
                  vel pretium lectus quam id. Elit sed vulputate mi sit amet.
                  Vitae suscipit tellus mauris a diam maecenas sed. Diam sit
                  amet nisl suscipit adipiscing bibendum est ultricies integer.
                  Pellentesque habitant morbi tristique senectus et. Leo vel
                  orci porta non pulvinar. Vitae turpis massa sed elementum
                  tempus egestas. Libero volutpat sed cras ornare arcu. Diam
                  maecenas sed enim ut sem viverra aliquet.
                </p>
                <p className="p-content">
                  <h2 className="p-header">{mainFeaturedPost.title}</h2>
                  Velit ut tortor pretium viverra. Tincidunt augue interdum
                  velit euismod in pellentesque massa. Pretium nibh ipsum
                  consequat nisl vel pretium. Odio pellentesque diam volutpat
                  commodo sed. Varius vel pharetra vel turpis. Augue interdum
                  velit euismod in. Nisl vel pretium lectus quam id. Malesuada
                  fames ac turpis egestas maecenas pharetra convallis. Malesuada
                  fames ac turpis egestas maecenas pharetra convallis posuere.
                  Commodo viverra maecenas accumsan lacus vel.
                </p>
                <p className="p-content">
                  <h2 className="p-header">{mainFeaturedPost.title}</h2>
                  Tincidunt arcu non sodales neque sodales ut. Ac turpis egestas
                  sed tempus urna et. Velit ut tortor pretium viverra. Egestas
                  erat imperdiet sed euismod. Pellentesque nec nam aliquam sem
                  et tortor consequat id. Pretium quam vulputate dignissim
                  suspendisse in est ante in. Nulla facilisi cras fermentum odio
                  eu feugiat pretium. Sed viverra ipsum nunc aliquet bibendum
                  enim facilisis. Nec dui nunc mattis enim ut tellus elementum
                  sagittis vitae. Neque convallis a cras semper auctor neque
                  vitae. Quis varius quam quisque id diam vel.
                </p>
                <p className="p-content">
                  <h2 className="p-header">{mainFeaturedPost.title}</h2>
                  Non pulvinar neque laoreet suspendisse interdum. Turpis nunc
                  eget lorem dolor sed viverra. Risus in hendrerit gravida
                  rutrum quisque non. Neque convallis a cras semper auctor
                  neque. Pellentesque massa placerat duis ultricies lacus. Et
                  egestas quis ipsum suspendisse ultrices. Diam quam nulla
                  porttitor massa id neque. Id donec ultrices tincidunt arcu.
                  Commodo sed egestas egestas fringilla phasellus. Auctor urna
                  nunc id cursus. Nulla pellentesque dignissim enim sit amet
                  venenatis urna. Est velit egestas dui id ornare arcu odio ut
                  sem. Pulvinar proin gravida hendrerit lectus. Cursus turpis
                  massa tincidunt dui ut ornare lectus sit. Egestas maecenas
                  pharetra convallis posuere morbi leo urna. Sit amet facilisis
                  magna etiam tempor.
                </p>
                <p className="p-content">
                  <h2 className="p-header">{mainFeaturedPost.title}</h2>
                  Massa ultricies mi quis hendrerit dolor magna. Adipiscing
                  bibendum est ultricies integer quis auctor elit. Fermentum
                  iaculis eu non diam phasellus vestibulum. Molestie ac feugiat
                  sed lectus vestibulum mattis. Ipsum suspendisse ultrices
                  gravida dictum fusce ut placerat orci nulla. Euismod lacinia
                  at quis risus. Arcu cursus euismod quis viverra nibh cras
                  pulvinar. Rhoncus dolor purus non enim praesent. Nisi vitae
                  suscipit tellus mauris a diam maecenas sed enim. Purus non
                  enim praesent elementum. Aenean sed adipiscing diam donec
                  adipiscing tristique risus nec. Senectus et netus et malesuada
                  fames. Sed tempus urna et pharetra pharetra. Lectus vestibulum
                  mattis ullamcorper velit sed. Magnis dis parturient montes
                  nascetur ridiculus mus mauris vitae. Ornare quam viverra orci
                  sagittis eu volutpat. Faucibus pulvinar elementum integer enim
                  neque volutpat. Enim nulla aliquet porttitor lacus. Vel quam
                  elementum pulvinar etiam non quam lacus suspendisse. Feugiat
                  scelerisque varius morbi enim nunc.
                </p>
                <p className="p-content">
                  <h2 className="p-header">{mainFeaturedPost.title}</h2>
                  Pellentesque sit amet porttitor eget dolor. Orci nulla
                  pellentesque dignissim enim sit amet. Donec adipiscing
                  tristique risus nec feugiat in. Ornare arcu odio ut sem nulla
                  pharetra diam. Varius duis at consectetur lorem donec. Sem
                  nulla pharetra diam sit amet. Amet cursus sit amet dictum.
                  Etiam non quam lacus suspendisse faucibus interdum posuere.
                  Nunc congue nisi vitae suscipit tellus mauris a diam maecenas.
                  Purus semper eget duis at tellus at. Nam libero justo laoreet
                  sit amet cursus sit. Ut tellus elementum sagittis vitae et.
                  Urna neque viverra justo nec ultrices dui sapien eget. Morbi
                  tempus iaculis urna id. Mauris pharetra et ultrices neque
                  ornare aenean. Pellentesque eu tincidunt tortor aliquam nulla
                  facilisi. Ultrices neque ornare aenean euismod elementum nisi
                  quis.
                </p>
                <p className="p-content">
                  <h2 className="p-header">{mainFeaturedPost.title}</h2>
                  Hendrerit dolor magna eget est. Amet nisl suscipit adipiscing
                  bibendum est. Quam lacus suspendisse faucibus interdum
                  posuere. Faucibus pulvinar elementum integer enim. Lobortis
                  elementum nibh tellus molestie nunc. Id volutpat lacus laoreet
                  non. Quis auctor elit sed vulputate mi sit amet mauris.
                  Malesuada fames ac turpis egestas integer eget aliquet. Urna
                  et pharetra pharetra massa massa ultricies. Adipiscing at in
                  tellus integer feugiat scelerisque varius. Sit amet justo
                  donec enim diam vulputate ut pharetra. Lectus quam id leo in
                  vitae turpis. Fusce id velit ut tortor pretium. Nunc faucibus
                  a pellentesque sit amet porttitor eget dolor. Id diam vel quam
                  elementum pulvinar etiam non quam lacus. Scelerisque eu
                  ultrices vitae auctor eu. Turpis massa sed elementum tempus
                  egestas sed sed risus. Aliquam sem et tortor consequat id
                  porta. Odio euismod lacinia at quis risus sed vulputate.
                </p>
                <p className="p-content">
                  Iaculis nunc sed augue lacus viverra vitae. Vulputate mi sit
                  amet mauris commodo quis imperdiet massa tincidunt. Turpis
                  massa tincidunt dui ut ornare lectus sit. Enim lobortis
                  scelerisque fermentum dui faucibus. Arcu bibendum at varius
                  vel pharetra vel turpis. Lacus luctus accumsan tortor posuere
                  ac. Mi tempus imperdiet nulla malesuada pellentesque. Ultrices
                  sagittis orci a scelerisque purus semper eget. Duis tristique
                  sollicitudin nibh sit amet. Ut ornare lectus sit amet. Lorem
                  ipsum dolor sit amet.
                </p>
                <p className="p-content">
                  <h2 className="p-header">{mainFeaturedPost.title}</h2>
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                  Praesent semper feugiat nibh sed. Enim ut sem viverra aliquet
                  eget. Libero enim sed faucibus turpis in eu. Et netus et
                  malesuada fames ac turpis egestas sed. Venenatis tellus in
                  metus vulputate eu scelerisque felis. Volutpat blandit aliquam
                  etiam erat velit scelerisque in dictum. Eget nunc scelerisque
                  viverra mauris in aliquam sem fringilla. At ultrices mi tempus
                  imperdiet nulla malesuada pellentesque. Duis ultricies lacus
                  sed turpis tincidunt. Molestie ac feugiat sed lectus
                  vestibulum mattis ullamcorper velit. Adipiscing elit ut
                  aliquam purus sit amet luctus venenatis lectus. Tellus rutrum
                  tellus pellentesque eu tincidunt tortor aliquam nulla
                  facilisi. Id semper risus in hendrerit gravida rutrum quisque.
                  Mattis aliquam faucibus purus in massa tempor. Adipiscing elit
                  pellentesque habitant morbi tristique senectus et netus et.
                  Interdum consectetur libero id faucibus nisl tincidunt eget.
                  Sit amet facilisis magna etiam tempor orci eu lobortis. Id
                  aliquet risus feugiat in ante metus dictum. Risus commodo
                  viverra maecenas accumsan lacus.
                </p>
              </div>
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
