import React from "react";
import { useState, useEffect } from "react";

const Page = ({ match }) => {
  const { id } = match.params;
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (res.status === 404) {
          // Redirect
          // history.push('/not-found');
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
  }, [id]);
  if (!post) {
    return <h1>Loading...............</h1>;
  }

  return (
    <>
      <h1>Page: {post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Page;
