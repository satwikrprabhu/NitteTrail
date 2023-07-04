import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {

  const [toggleTitle,setToggleTitle] = useState("Resource");

const links = [{
  linkname: "Home",
  url: "#home",
},
{
  linkname: "About",
  url: "/about",
},
{
  linkname:"Contact",
  url:"#contact",
},

];

const titleset = () => {
  let  val = toggleTitle;
  val==="NitteTrail"?setToggleTitle("Resource"):setToggleTitle("NitteTrail");
  
}

  return (
    <nav className='fixed w-full top-0 z-20  border-b border-gray-400/20 bg-white bg-opacity-5 backdrop-blur-lg backdrop-filter'>
      <div className='flex justify-between items-center mx-auto max-w-5xl h-16'><div className='flex items-center ml-5'>
        <Link to='/'><img src="./nittelogotrans.png" alt="" width="50px"/></Link>
      <Link to='/' className='hidden md:block text-2xl ml-2 font-bold text-white cursor-pointer'>
        NitteTrail
      </Link>
        
      </div>
      
      <ul className='flex justify-between items-center space-x-10 font-semibold'>
        {links.map((link)=>(<li className='hidden lg:block text-lg text-white hover:text-gray-300 cursor-pointer'>{link.linkname}</li>))}
        <Link to='/'>
        <button className='lg:block text-lg mr-4 bg-gray-700 hover:bg-gray-700 text-white font-semi-bold py-1 px-4 rounded'
         onClick={()=>{
          props.btn();
          titleset();      
        }
        }>{toggleTitle}</button> </Link>
        
      </ul></div>
      
    </nav>
  )
}

export default Navbar