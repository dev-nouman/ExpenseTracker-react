import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className='card h-250'>
      <p className='small'>Transactions</p>
      <div className="list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

export default TransactionList
