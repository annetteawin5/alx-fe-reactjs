 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from 'react'

import './App.css'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
