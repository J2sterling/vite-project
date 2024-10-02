import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CalculatorApp from "./components/CalculatorApp";
import './components/App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculatorApp/>
  </StrictMode>,
)
