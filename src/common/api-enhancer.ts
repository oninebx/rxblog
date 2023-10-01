import React from "react";
const withApiBase = (path: string) => {
  return `${process.env.REACT_APP_API_BASE}/${path}`;
}

export {
  withApiBase
}