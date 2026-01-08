import React from 'react'
import BudgetCard from '../components/BudgetCard'
import BudgetTools from './BudgetTools'

const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-start relative pt-28 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Title */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent leading-tight pb-2">
          Fixnex is here to help you master your money and balance your life.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Your very own budgeting calculator to stay on track.
        </p>
      </div>

      {/* Budget Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mx-auto">
        <BudgetCard 
          title="50/30/20 Rule"
          description="Put 50% of your after-tax income toward needs, 30% toward wants, and 20% toward savings."
        />
        <BudgetCard 
          title="80/20 Rule"
          description="The 80/20 rule suggests saving 20% of your income and spending the remaining 80% on everything else."
        />
        <BudgetCard 
          title="50/30/15/5 Rule"
          description="The 50/30/15/5 rule suggests saving 50% needs, 30% wants, 15% retirement, 5% short-term savings."
        />
        <BudgetCard 
          title="70/20/10 Rule"
          description="The 70/20/10 rule suggests saving 70% needs/wants, 20% savings, 10% debt repayment"
        />
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="mt-16 animate-bounce">
        <a href="#tools" className="flex flex-col items-center gap-2 group">
          <span className="text-gray-500 text-sm font-medium group-hover:text-green-500 transition-colors">
            Try Calculator
          </span>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z" clipRule="evenodd" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}

export default HomePage
