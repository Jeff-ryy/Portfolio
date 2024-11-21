import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <Router>
      <Routes>
        <Route path="/victerio" element={<Website />} />
      </Routes>
    </Router> */}
      {/* <Layout/> */}
    </>
  )
}

export default App
