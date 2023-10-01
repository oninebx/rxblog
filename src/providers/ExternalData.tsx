import { Config } from "@testing-library/react";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

interface ExternalData {
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
  
  const [externalData, setExternalData] = useState({} as ExternalData);
  useEffect(() => {
    const fetchConfig = fetchData<Config>('./config.json', (data: string) => {
      localStorage.setItem("config", JSON.stringify(data));
    });
    fetchConfig();
    

    const fetchMottoes = fetchData<string[]>('./mottoes.json', (data: string[]) => {
      setExternalData({mottoes: data});
    });
      
    fetchMottoes();
  }, []);
  return externalData;
};

const ExternalDataContext = createContext<ReturnType<typeof useController>>({
  
} as ExternalData);

const ExternalDataProvider = ({children}: PropsWithChildren) => (
  <ExternalDataContext.Provider value={useController()}>
    {children}
  </ExternalDataContext.Provider>
);

const useExternalData = () => useContext(ExternalDataContext);

export {
  ExternalDataProvider,
  useExternalData
}