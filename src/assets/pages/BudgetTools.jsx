import React from 'react'
import { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import BudgetCard from '../components/BudgetCard'
import { ResponsiveContainer } from 'recharts'

const BudgetTools = () => {
  const [rule, setRule] = useState("")
  const [income, setIncome] = useState("")
  const [results, setResults] = useState(null)

  const budgetRules = [
    { id: "50/30/20", title: "50/30/20 Rule", desc: "50% needs, 30% wants, 20% savings" },
    { id: "80/20", title: "80/20 Rule", desc: "80% spending, 20% savings" },
    { id: "50/30/15/5", title: "50/30/15/5 Rule", desc: "50% needs, 30% wants, 15% retirement, 5% savings" },
    { id: "70/20/10", title: "70/20/10 Rule", desc: "70% needs/wants, 20% savings, 10% debt" }
  ]

  const handleCalculate = () => {
    const monthlyIncome = parseFloat(income)
    if (!rule || isNaN(monthlyIncome) || monthlyIncome <= 0) return

    let breakdown = {}

    if (rule === "50/30/20") {
      breakdown = {
        Needs: parseFloat((monthlyIncome * 0.5).toFixed(2)),
        Wants: parseFloat((monthlyIncome * 0.3).toFixed(2)),
        Savings: parseFloat((monthlyIncome * 0.2).toFixed(2)),
      }
    } else if (rule === "80/20") {
      breakdown = {
        Spending: parseFloat((monthlyIncome * 0.8).toFixed(2)),
        Savings: parseFloat((monthlyIncome * 0.2).toFixed(2)),
      }
    } else if (rule === "50/30/15/5") {
      breakdown = {
        Needs: parseFloat((monthlyIncome * 0.5).toFixed(2)),
        Wants: parseFloat((monthlyIncome * 0.3).toFixed(2)),
        Retirement: parseFloat((monthlyIncome * 0.15).toFixed(2)),
        Savings: parseFloat((monthlyIncome * 0.05).toFixed(2)),
      }
    } else if (rule === "70/20/10") {
      breakdown = {
        Needs: parseFloat((monthlyIncome * 0.7).toFixed(2)),
        Savings: parseFloat((monthlyIncome * 0.2).toFixed(2)),
        Debt: parseFloat((monthlyIncome * 0.1).toFixed(2)),
      }
    }

    setResults(breakdown)
  }

  const formatMoney = (n) =>
    isNaN(n) ? "-" : n.toLocaleString("en-US", { style: "currency", currency: "USD" })

  const chartData = results
    ? Object.entries(results).map(([category, amount]) => ({
        name: category,
        value: amount,
      }))
    : []

  const COLORS = ['#22c55e', '#06b6d4', '#facc15', '#f97316']

  return (
    <section
      id="tools"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-br from-gray-50 to-green-50"
    >
      <div className="flex flex-col items-center space-y-8 w-full max-w-5xl">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent pb-2">
            Budget Calculator
          </h1>
          <p className="text-gray-600 text-lg">Select a budgeting method and calculate your breakdown</p>
        </div>

        {/* Rule selector cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
          {budgetRules.map((r) => (
            <BudgetCard
              key={r.id}
              title={r.title}
              description={r.desc}
              isActive={rule === r.id}
              onClick={() => setRule(r.id)}
            />
          ))}
        </div>

        {/* Income input card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full border border-gray-100">
          <label className="block text-gray-700 font-semibold mb-3 text-lg">
            Monthly Income
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">$</span>
            <input
              type="number"
              step="0.01"
              placeholder="0.00"
              value={income}
              onChange={e => setIncome(e.target.value)}
              className="border-2 border-gray-200 rounded-xl pl-10 pr-4 py-4 w-full text-xl focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
            />
          </div>

          <button
            onClick={handleCalculate}
            disabled={!rule || !income || parseFloat(income) <= 0}
            className="mt-6 bg-gradient-to-r from-green-500 to-cyan-400 hover:from-green-600 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-xl w-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Calculate Budget
          </button>
        </div>

        {/* Results card */}
        {results && (
          <div className="bg-white shadow-2xl rounded-2xl p-8 w-full border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Budget Breakdown</h2>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Chart */}
              <div className="w-full lg:w-1/2">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => formatMoney(value)}
                      contentStyle={{ borderRadius: '12px', border: '1px solid #e5e7eb' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Breakdown list */}
              <div className="w-full lg:w-1/2">
                <ul className="space-y-4">
                  {Object.entries(results).map(([category, amount], index) => (
                    <li 
                      key={category} 
                      className="flex justify-between items-center p-4 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="font-semibold text-gray-700">{category}</span>
                      </div>
                      <span className="font-bold text-xl text-gray-900">
                        {formatMoney(amount)}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-cyan-50 rounded-xl border border-green-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Total Income</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
                      {formatMoney(parseFloat(income))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default BudgetTools
