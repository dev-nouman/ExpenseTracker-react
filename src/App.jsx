import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Summary from "./components/Summary";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import './App.css'
import ExpenseChart from "./components/ExpenseChart";

function App() {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  const [transactions, setTransactions] = useState(()=>{
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(()=>{
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const addTransaction = (newTrans) => {
    setTransactions([newTrans, ...transactions]);
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  }

  return (
    <div className="app">
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <Balance transactions={transactions} />
      <Summary transactions={transactions} />
      <ExpenseChart transactions={transactions} />
      <AddTransaction onAdd={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction}  />
    </div>
  );
}

export default App;