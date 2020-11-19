import React, { Component } from "react";
import { useState, useEffect } from "react";

export default function Post({ match }) {
  const [comments, setComments] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        if (res.status === 404) {
          throw "Post not found";
        }
        return res.json();
      })
      .then((res) => {
        setComments(res);
      })
      .catch((error) => {
        console.log("error", error);
        setComments(undefined);
      });

    return () => {
      setComments(null);
    };
  }, [id]);
  console.log(id);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <p key={comment.id}>
            {comment.id}
            {comment.body}
          </p>
        );
      })}
      <button>Comments</button>
    </div>
  );
}
