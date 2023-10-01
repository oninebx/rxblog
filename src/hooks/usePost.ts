import { withApiBase } from "../common/api-enhancer";
import { useConfig } from "../providers/Config";
import { Post } from "../types";
import { useFetch } from "./useFetch";

const usePost = (postId?: string) => {
  const{ name, repo } = useConfig();
  const apiUrl = withApiBase(`${name}/${repo}/issues/${postId}`);
  return useFetch<Post>(apiUrl, {
    headers: {
      Accept: 'application/vnd.github.squirrel-girl-preview, application/vnd.github.html+json, application/x-www-form-urlencoded',
    }
  }).data;
}

export default usePost;