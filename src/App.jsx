import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Summary from "./components/Summary";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import './App.css'

function App() {

  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTrans) => {
    setTransactions([newTrans, ...transactions]);
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <Balance transactions={transactions} />
      <Summary transactions={transactions} />
      <AddTransaction onAdd={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction}  />
    </div>
  );
}

export default App;