import { PropsWithChildren, createContext, useContext } from "react";

interface AuthUser {
  name?: string;
}

const useController = () => {
  // const []
  return {
    name: ''
  }
}
const AuthContext = createContext<ReturnType<typeof useController>>({
  name: ''
});
const useAuth= () => useContext(AuthContext);

const AuthProvider = ({children}: PropsWithChildren) => (
  <AuthContext.Provider value={useController()}>
    {children}
  </AuthContext.Provider>
);

export {
  AuthProvider,
  useAuth
};