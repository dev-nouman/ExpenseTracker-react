import React, { useState } from 'react'
import TransactionItem from './TransactionItem'
import { CATEGORY_COLORS } from './constants'

const TransactionList = ({ transactions, onDelete }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Object.keys(CATEGORY_COLORS)];

  const filteredTransactions = selectedCategory === 'All'
    ? transactions
    : transactions.filter(t => t.category === selectedCategory);

  return (
    <div className='card h-250'>
      <div className='filter-header'>
        <p className='small'>Transactions</p>
        <select
          className='category-filter'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="list">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} onDelete={onDelete} />
          ))
        ) : (
          <p className='empty-state'>
            No transactions in this category
          </p>
        )}
      </div>
    </div>
  )
}

export default TransactionList
