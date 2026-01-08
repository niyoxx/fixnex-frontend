import { useState } from 'react'
import HomePage from './assets/pages/HomePage'
import BudgetTools from './assets/pages/BudgetTools'
import NavBar from './assets/layouts/NavBar'

function App() {
  

  return (
    <div className='min-h-screen'>
      <HomePage />
      <NavBar />
      <BudgetTools />

    </div>
  )
}

export default App
