import { Config } from "@testing-library/react";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

interface Environment {
  mottoes: string[]
}

const fetchData = <T, >(path: string, callback: Function) => async() => {
  const response = await fetch(path, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
  });
  callback(await response.json());
}

const useController = () => {
  
  const [environment, setEnvironment] = useState({} as Environment);
  useEffect(() => {
    const fetchConfig = fetchData<Config>('./config.json', (data: string) => {
      localStorage.setItem("config", JSON.stringify(data));
    });
    fetchConfig();
    const fetchMottoes = fetchData<string[]>('./mottoes.json', (data: string[]) => {
      setEnvironment({mottoes: data});
    });
    fetchMottoes();
    
  }, []);
  return environment;
};

const EnvironmentContext = createContext<ReturnType<typeof useController>>({
  
} as Environment);

const EnvironmentProvider = ({children}: PropsWithChildren) => (
  <EnvironmentContext.Provider value={useController()}>
    {children}
  </EnvironmentContext.Provider>
);

const useEnvironment= () => useContext(EnvironmentContext);

export {
  EnvironmentProvider,
  useEnvironment
}