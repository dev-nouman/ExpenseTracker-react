import React, { useState } from 'react'

const AddTransaction = ({ onAdd }) => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')


  const submitForm = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: parseFloat(amount)
    };

    onAdd(newTransaction);
    setText('');
    setAmount('');
  }

  return (
    <form className='card' onSubmit={submitForm}>
      <p className='small'>Your Transactions</p>
      <input type="text" placeholder='Enter title' value={text} onChange={(e) => setText(e.target.value)} />
      <input type="number" placeholder='Amount(+/-)' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default AddTransaction
