import React, { useState, createContext, useContext, useEffect } from "react";
import { getData } from "../service/axios"

const TasksStore = createContext()
const { Provider } = TasksStore;

const useStore = () => {
  const context = useContext(TasksStore);
  if (!context) {
    throw new Error(`useStore must be used within a Provider`);
  }
  return context;
};



const TaskAppProvider = ({ children }) => {
  let [campaign, setCampaign] = useState( {});

  useEffect(() => {
    async function fetchData() {
      setCampaign(await getData())
    }
    fetchData()
  }, []);

  const state = {
    campaign
  };
  // actions = callbacks to invoke
  const actions = {
    setCampaign
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
}

export { TaskAppProvider, useStore };
