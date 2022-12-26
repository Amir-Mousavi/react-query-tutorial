import { useQuery } from "react-query";
import { fetchPosts } from "../api";

export const usePostsQuery = (page = 0) => {
  return useQuery([`posts_${page}`], fetchPosts(page));
};
