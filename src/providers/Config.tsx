import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

interface Config {
  avatarUrl: string;
  title: string;
  name: string;
  repo: string;
  accessToken: string;
}

const useController = () => {
  
  const [config, setConfig] = useState({} as Config);
  useEffect(() => {
    const fetchConfig = async() => {
      const response = await fetch('./config.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
      });
      const configData = (await response.json()) as Config;
      setConfig(configData);
      localStorage.setItem("config", JSON.stringify(configData));
    }
    fetchConfig();
  }, []);
  return config;
};

const ConfigContext = createContext<ReturnType<typeof useController>>({
  
} as Config);

const ConfigProvider = ({children}: PropsWithChildren) => (
  <ConfigContext.Provider value={useController()}>
    {children}
  </ConfigContext.Provider>
);

const useConfig = () => JSON.parse(localStorage.getItem('config') ?? '{}') as Config;

export {
  ConfigProvider,
  useConfig
}