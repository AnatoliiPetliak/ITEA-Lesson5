import React from "react";
import { useState, useEffect } from "react";

export default function ItemList() {
  const [post, setPost] = useState([]);

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

  return (
    <div>
      {post.map((item) => {
        return <h5 key={item.id}>{item.title}</h5>;
      })}

      <img
        src="https://c.files.bbci.co.uk/4F09/production/_115133202_002716794.jpg"
        alt=""
      />
    </div>
  );
}
