import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await axios.get("api/transactions/");
    setTransactions(response.data);
  };

  const addTransaction = async (data) => {
    const response = await axios.post("api/transactions/", data);
    setTransactions((prev) => [...prev, response.data]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
