import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import Post from "./Post";

export default function ItemList() {
  const [post, setPost] = useState([]);
  const [activePage, setPage] = useState(1);
  const [guestsPerPage] = useState(20);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        if (res.status === 404) {
          throw "Post not found";
        }
        return res.json();
      })
      .then((res) => {
        setPost(res);
      })
      .catch((error) => {
        console.log("error", error);
        setPost(undefined);
      });

    return () => {
      setPost(null);
    };
  }, []);

  const indexOfLastGuest = activePage * guestsPerPage;
  const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
  const currentGuest = post.slice(indexOfFirstGuest, indexOfLastGuest);

  const handlePageChange = () => {
    setPage(activePage + 1);
  };
  return (
    <>
      {currentGuest.map((item) => {
        return (
          <BrowserRouter>
            <NavLink
              key={item.id}
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
              exact
              to="/posts/:id">
              <li>
                {item.id}.{item.title}
              </li>
            </NavLink>
            <Switch>
              <Route
                key={item.id}
                exact
                path="/posts/:id"
                component={Post}
                body={item.title}
              />
            </Switch>
          </BrowserRouter>
        );
      })}
      <button onClick={handlePageChange}>Show more</button>
    </>
  );
}
