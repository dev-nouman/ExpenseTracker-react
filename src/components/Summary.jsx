import React from 'react'

const Summary = ({ transactions }) => {

  const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + Math.abs(t.amount), 0);

  return (
    <div className='summary'>
      <div className="box income">
        <p>Income</p>
        <h3>+{income.toFixed(2)}</h3>
      </div>
      <div className="box expense">
        <p>Expense</p>
        <h3>-{expense.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default Summary
