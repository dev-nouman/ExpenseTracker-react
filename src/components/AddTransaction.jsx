import React, { useState } from 'react'

const AddTransaction = ({ onAdd }) => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('food')


  const submitForm = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: parseFloat(amount),
      category: category
    };

    onAdd(newTransaction);
    setText('');
    setAmount('');
    setCategory('');
  }

  return (
    <form className='card h-250 add-transaction' onSubmit={submitForm}>
      <p className='small'>Add Transaction</p>
      <input type="text" placeholder='Enter title' value={text} onChange={(e) => setText(e.target.value)} />
      <input type="number" placeholder='Amount(+/-)' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select
        name="category"
        id="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Shopping">Shopping</option>
        <option value="Salary">Salary</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>
      <button>Add</button>
    </form>
  )
}

export default AddTransaction
