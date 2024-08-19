import { createContext, useEffect, useState } from 'react';

export const TabContext = createContext();
export const TabContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(sessionStorage.getItem('activeTab') || '토토로');

  useEffect(() => {
    sessionStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>;
};
