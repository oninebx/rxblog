import { useEffect, useState } from "react"
import { Blog } from "../types";
import { withApiBase } from "../common/api-enhancer";
import { useFetch } from "./useFetch";

interface BlogApiOptions {
  page?: number;
  size?: number;
  labels?: string[];
}
const useBlogs = (name: string, repo: string, options: BlogApiOptions = {page: 1, size: 10}) => {
  const {page, size, labels} = options;
  const apiUrl = withApiBase(`${name}/${repo}/issues?
  state=open&page=${page}&per_page=${size}${labels ? `&labels=${labels?.join(',')}` : ''}`);
  
  return useFetch<Blog[]>(apiUrl).data;
}

export {
  useBlogs
}
