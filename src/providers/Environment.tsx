import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

interface Environment {
  mottoes: string[];
}

interface Config {
  avatarUrl: string;
  title: string;
  name: string;
  repo: string;
  accessToken: string;
  categories: string[];
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
      console.log(data)
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
const useConfig = () => JSON.parse(localStorage.getItem('config') ?? '{}') as Config;

export {
  EnvironmentProvider,
  useEnvironment,
  useConfig
}