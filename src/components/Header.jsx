import React from 'react'

const Header = ({ onToggleTheme, theme }) => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h2>Expense Tracker</h2>
        <button className='theme-toggle' onClick={onToggleTheme} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  )
}

export default Header
