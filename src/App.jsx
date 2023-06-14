import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'
import StudyHero from './components/StudyHero'


function App() {

  const [page,setPage] = useState(true)
  
  function changePage(){
    setPage(!page);
  }

  return (
    <>
<Navbar btn={changePage}/>
{page?<Hero />:<StudyHero />}
<Footer />
    </>
  )
}

export default App
