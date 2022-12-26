export const fetchPosts =
  (page = 1) =>
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page + 1}`
    );
    return await response.json();
  };

export const deletePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
