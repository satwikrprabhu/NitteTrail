import React from 'react'

const Navbar = () => {

const links = [{
  linkname: "Home",
  url: "#home",
},
{
  linkname: "About",
  url: "#about",
},
{
  linkname:"Contact",
  url:"#contact",
},

];

  return (
    <nav className='fixed w-full top-0 z-20  border-b border-gray-400/20 bg-white bg-opacity-5 backdrop-blur-lg backdrop-filter'>
      <div className='flex justify-between items-center mx-auto max-w-5xl h-16'><div className='flex items-center ml-5'>
        <img src="./nittelogotrans.png" alt="" width="50px"/>
      <h1 className='hidden md:block text-2xl ml-2 font-bold text-white cursor-pointer'>
        NitteTrail
      </h1>
        
      </div>
      
      <ul className='flex justify-between items-center space-x-10 font-semibold'>
        {links.map((link)=>(<li className='hidden lg:block text-lg text-white hover:text-gray-300 cursor-pointer'>{link.linkname}</li>))}
        <button className='hidden lg:block text-lg mr-8 bg-white hover:bg-gray-200 text-black font-semi-bold py-1 px-4 rounded '>Login</button>
      </ul></div>
      
    </nav>
  )
}

export default Navbar