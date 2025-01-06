import { BrowserRouter as Router } from 'react-router';
import './App.css'
import AppRoutes from '@/routes'
function App() {
  return (
    <>
      <Router>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <AppRoutes />
      </div>
      </Router>
    </>
  )
}
export default App
