import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

// interface BlogIndex {
//   number: number;
//   title: string;
// }

const indexBase: Record<string, string> = {};

const useController = () => {
  // const [indexes, setIndexes] = useState({} as BlogIndex[]);
  
  return {
    // indexes,
    // setIndexes,
    indexBase
  };
};

const BlogBaseContext = createContext<ReturnType<typeof useController>>({
  // indexes: [],
  // setIndexes: () => {},
  indexBase: {}
});

const BlogBaseProvider = ({children}: PropsWithChildren) => (
  <BlogBaseContext.Provider value={useController()}>
    {children}
  </BlogBaseContext.Provider>
);

const useBlogBase= () => useContext(BlogBaseContext);

export {
  BlogBaseProvider,
  useBlogBase,
  indexBase
}