import { useMutation } from "react-query";
import { deletePost } from "../api";

export const useDeletePost = () => {
  return useMutation({
    mutationFn: (id) => {
      return deletePost(id);
    },
  });
};
