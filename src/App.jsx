import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import NotFound from './components/NotFound'
import AddEditTool from './components/AddEditTool'
import ToolList from './components/ToolsList'
import KardexsList from './components/KardexsList'
import ClientsList from './components/ClientsList'
import AddEditClient from './components/AddEditClient'
import LoansList from './components/LoansList'
import AddReturnLoan from './components/AddReturnLoan'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tool/list" element={<ToolList />} />
          <Route path="/tool/add" element={<AddEditTool />} />
          <Route path="/tool/edit/:id" element={<AddEditTool />} />
          <Route path="/client/list" element={<ClientsList />} />
          <Route path="/client/add" element={<AddEditClient />} />
          <Route path="/client/edit/:id" element={<AddEditClient />} />
          <Route path="/loan/list" element={<LoansList />} />
          <Route path="/loan/add" element={<AddReturnLoan />} />
          <Route path="/loan/return/:id" element={<AddReturnLoan />} />
          <Route path="kardex/list" element={<KardexsList />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App