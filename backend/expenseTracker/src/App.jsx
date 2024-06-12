import { useState } from 'react'
import Expenses from './components/Expenses'
import AddExpense from './components/AddExpense'
import {BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Expenses/>} />
          <Route path="/addexpense" element = {<AddExpense/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
