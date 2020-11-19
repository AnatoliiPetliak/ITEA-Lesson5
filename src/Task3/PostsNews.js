import React from "react";
import { useState, useEffect } from "react";

export default function PostsNews({ match }) {
  const [news, setNews] = useState([]);
  const { id } = match.params;

  //Here get id from route as quantity => limit=${id}

  useEffect(() => {
    fetch(` https://jsonplaceholder.typicode.com/users?_start=0&_limit=${id}`)
      .then((res) => {
        if (res.status === 404) {
          throw "Post not found";
        }
        return res.json();
      })
      .then((res) => {
        setNews(res);
      })
      .catch((error) => {
        console.log("error", error);
        setNews(undefined);
      });

    return () => {
      setNews(null);
    };
  }, [id]);

  return (
    <div>
      <h3>Posts news// filtered elements by quantity</h3>
      {news.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}
