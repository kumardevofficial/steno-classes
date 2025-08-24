import { Outlet } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer'

import Navbar from './components/Navbar'


function App() {


  return (
    <>
<Navbar />
<main className="flex-grow">
  <Outlet />
</main>
<Footer />

    </>
  )
}

export default App
