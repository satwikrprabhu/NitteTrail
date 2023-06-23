import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'
import Branch from './components/pages/Branch'
import { Routes,Route } from 'react-router-dom'
import CSE from './components/pages/CSE'
import ISE from './components/pages/ISE'


function App() {

  const [page,setPage] = useState(true)
  
  function changePage(){
    setPage(!page);
  }

  return (
    <>
<Navbar btn={changePage}/>

<Routes>
<Route path="/" element={page?<Hero />:<Branch />} />
<Route path="/cse" element={<CSE />} />
<Route path="/ise" element={<ISE />} />
{/* <Route path="/ece" element={<ECE/>} />
<Route path="/aiml" element={<AIML />} />
<Route path="/eee" element={<EEE />} /> */}
</Routes>

<Footer />
    </>
  )
}

export default App
