import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import NotFound from './components/NotFound'
import AddEditTool from './components/AddEditTool'
import ToolList from './components/ToolsList'

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App