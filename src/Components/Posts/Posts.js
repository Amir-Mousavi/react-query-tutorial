import { useState } from "react";

import { usePostsQuery } from "./hooks";

import Pagination from "../pagination/pagination";

const Posts = () => {
  const [page, setPage] = useState(0);
  const { isLoading, data, isError, error } = usePostsQuery(page);

  const handlePageChange = (newPage) => setPage(newPage);

  if (isLoading) {
    return "Loading the posts...";
  }

  if (isError) {
    return <span style={{ color: "red" }}>{error.message}</span>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <Pagination page={page} onPageChange={handlePageChange} />
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Posts;
