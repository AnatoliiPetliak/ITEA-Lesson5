import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

//Task1_2
import Home from "./HomeWorkTask_5/Lesson5/Home";
import About from "./HomeWorkTask_5/Lesson5/About";
import ItemList from "./HomeWorkTask_5/Lesson5/ItemList";
import Page from "./HomeWorkTask_5/Lesson5/Page";

//Task3
import PostsList from "./Task3/PostsList";
import PostsNews from "./Task3/PostsNews";

import "./App.css";

function App() {
  const supportHistory = "pushState" in window.history;
  return (
    <BrowserRouter forceRefresh={!supportHistory}>
      <h1>NAVIGATION</h1>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        exact
        to="/">
        Home
      </NavLink>

      <Switch>
        <Route exact path="/" component={PostsList} />
        <Route exact path="/posts/:id" component={PostsNews} />
      </Switch>

      {/* <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        exact
        to="/posts/:postid">
        Post
      </NavLink> */}

      {/* <div>
        <PostsList />
      </div> */}

      {/* <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/home">
        Home
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/about">
        About
      </NavLink>

      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/ItemList">
        ItemList
      </NavLink>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ItemList" component={ItemList} />
        <Route path="/ItemList/:id" component={Page} />     
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;
