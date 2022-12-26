import { useQuery } from "react-query";
import { fetchPosts } from "../api";
import { queryClient } from "../../../App";

function prefetch(newPage) {
  queryClient.prefetchQuery({
    queryFn: fetchPosts(newPage),
    queryKey: [`posts_${newPage}`],
  });
}

export const usePostsQuery = (page = 0) => {
  return { ...useQuery([`posts_${page}`], fetchPosts(page)), prefetch };
};

/*
 * { pages_0: [], pages_1: [] }
 */
