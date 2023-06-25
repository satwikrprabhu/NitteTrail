import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'
import Branch from './components/pages/Branch'
import { Routes,Route } from 'react-router-dom'
import CSE from './components/pages/Branches/CSE'
import ISE from './components/pages/Branches/ISE'
import ECE from './components/pages/Branches/ECE'
import AIML from './components/pages/Branches/AIML'
import EEE from './components/pages/Branches/EEE'
import Mech from './components/pages/Branches/Mech'
import Civil from './components/pages/Branches/Civil'
import BTE from './components/pages/Branches/BTE'
import RI from './components/pages/Branches/RI'
import AIDS from './components/pages/Branches/AIDS'
import Error404 from './components/pages/Error404'
import Construction from './components/pages/Construction'
import CSE3 from './components/pages/CSE/CSE3'
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
<Route path='/cse' element={<CSE />} />
<Route path='/cse/3' element={<CSE3 />} />
<Route path="/ise" element={<ISE />} />
<Route path="/ece" element={<ECE/>} />
<Route path="/aiml" element={<AIML />} />
<Route path="/eee" element={<EEE />} />
<Route path="/civil" element={<Civil />} />
<Route path="/mech" element={<Mech />} />
<Route path="/bte" element={<BTE />} />
<Route path="/ri" element={<RI />} />
<Route path="/aids" element={<AIDS />} />
<Route path='*' element={<Error404 />} />
<Route path='/cse/*' element={<Construction />} />
<Route path='/ise/*' element={<Construction />} />
<Route path='/ece/*' element={<Construction />} />
<Route path='/aiml/*' element={<Construction />} />
<Route path='/eee/*' element={<Construction />} />
<Route path='/mech/*' element={<Construction />} />
<Route path='/civil/*' element={<Construction />} />
<Route path='/bte/*' element={<Construction />} />
<Route path='/ri/*' element={<Construction />} />
<Route path='/aids/*' element={<Construction />} />

</Routes>
<Footer />
    </>
  )
}

export default App
