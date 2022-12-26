import { useState, useEffect } from "react";

import { usePostsQuery } from "./hooks/usePostsQuery";
import { useDeletePost } from "./hooks/useDeletePost";
import Pagination from "../pagination/pagination";

const Posts = () => {
  const [page, setPage] = useState(0);
  const { isLoading, data, isError, error, prefetch } = usePostsQuery(page);
  const { mutate: deletePost, isLoading: isDeleting } = useDeletePost();

  useEffect(() => {
    prefetch(1);
  }, [prefetch]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    prefetch(newPage + 1);
  };

  const handleDeletePost = (id) => () => {
    deletePost(id);
  };

  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <span>Loading...</span>}
      {isDeleting && <span>Deleting the item...</span>}
      {isError && <span style={{ color: "red" }}>{error.message}</span>}
      <Pagination page={page} onPageChange={handlePageChange} />
      {data &&
        data.map((post) => (
          <div style={{ border: "1px solid #eee" }} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={handleDeletePost(post.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default Posts;
