import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import MainLayout from "./hoc/mainLayout";
import Home from "./components/home";
import Header from "./components/includes/header";
import Post from "./components/post";
import Contact from "./components/contact";
import PostList from "./components/post_list";
import Footer from "./components/includes/footer";
import Data from "./components/data";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainLayout>
          <Switch>
          <Route path="/mongo" element={<Data />}></Route>
            <Route path="/post/:id" element={<Post />}></Route>
            <Route path="/posts" element={<PostList />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Switch>
        </MainLayout>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routes;
