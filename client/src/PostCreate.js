import React, { useState } from "react";
import axios from "axios";

export default function PostCreate()  {
  const [title, setTitle] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    axios.post("http://localhost:4000/posts", {
      title,
    }).then(res => {
      setTitle("");
    });

  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
