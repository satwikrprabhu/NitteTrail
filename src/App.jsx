import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Branch from './components/pages/Branch'
import { useRoutes } from 'react-router-dom'
import Routes from './routes/routes'
// import Error404 from './components/pages/Error404'
// import Construction from './components/pages/Construction'
function App() {
  const [page,setPage] = useState(true)
  
  function changePage(){
    setPage(!page);
  }
  
  const element = useRoutes([
    {
      path: '/',
      element: page?<Hero />:<Branch />,
    },
  ]);

  return (
    <>
      <Navbar btn={changePage}/>
      {element}
      <Routes />
      <Footer />
    </>
  )
}

export default App
