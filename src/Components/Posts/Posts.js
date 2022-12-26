import { useState, useEffect } from "react";

import { usePostsQuery } from "./hooks";
import Pagination from "../pagination/pagination";

const Posts = () => {
  const [page, setPage] = useState(0);
  const { isLoading, data, isError, error, prefetch } = usePostsQuery(page);

  useEffect(() => {
    prefetch(1);
  }, [prefetch]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    prefetch(newPage + 1);
  };

  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <span>Loading...</span>}
      {isError && <span style={{ color: "red" }}>{error.message}</span>}
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
