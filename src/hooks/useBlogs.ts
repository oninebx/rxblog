import { useEffect, useState } from "react"
import { useConfig } from "../providers/Config";
import { Blog } from "../types";
import { withApiBase } from "../common/api-enhancer";
import { useFetch } from "./useFetch";

const useBlogs = (name: string, repo: string, page: number = 1, size: number = 10) => {
  
  const apiUrl = withApiBase(`${name}/${repo}/issues?state=open&page=${page}&per_page=${size}`);
  
  return useFetch<Blog[]>(apiUrl).data;
}

export {
  useBlogs
}
