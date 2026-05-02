import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { CATEGORY_COLORS } from './constants'; 

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ transactions }) => {
  const expenseTransactions = transactions.filter(t => t.amount < 0);

  const categoryTotals = expenseTransactions.reduce((acc, curr) => {
    // 1. Get the raw category string and trim spaces
    const rawCategory = curr.category ? curr.category.trim() : 'Other';

    // 2. Find the matching key in CATEGORY_COLORS regardless of uppercase/lowercase
    const matchedCategory = Object.keys(CATEGORY_COLORS).find(
      (key) => key.toLowerCase() === rawCategory.toLowerCase()
    ) || 'Other';

    // 3. Add to the total using the perfectly matched key
    acc[matchedCategory] = (acc[matchedCategory] || 0) + Math.abs(curr.amount);
    return acc;
  }, {});

  const labels = Object.keys(categoryTotals);
  
  const backgroundColors = labels.map(
    (category) => CATEGORY_COLORS[category] || CATEGORY_COLORS.Other
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(categoryTotals),
        backgroundColor: backgroundColors,
        borderColor: 'var(--bg-secondary)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    respoonsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    }
  };

  return (
    <div className="chart-wrapper card">

      <h3 className='h3'>Expense Breakdown</h3>

    <div className="chart-container" style={{ position: 'relative', height: '300px', width: '100%' }}>
      {labels.length > 0 ? (
          <Pie data={data} options={options} />
        ) : (
            <p style={{ textAlign: 'center' }}>No expenses to display</p>
        )}
    </div>
        </div>
  );
};

export default ExpenseChart;