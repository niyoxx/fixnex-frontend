import React from 'react'

const BudgetCard = ({ title, description, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer group
        ${isActive 
          ? 'border-green-500 bg-gradient-to-br from-green-50 to-cyan-50 shadow-lg scale-105' 
          : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md hover:-translate-y-1'
        }`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className={`text-2xl font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent pb-1
          ${isActive ? 'scale-105' : ''} transition-transform duration-300`}>
          {title}
        </h3>
        {isActive && (
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}


export default BudgetCard