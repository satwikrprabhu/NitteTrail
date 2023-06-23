import React from 'react'

const Error404 = () => {
  return (
<div className='min-h-screen bg-gray-950 flex items-center justify-center'>

<div className='flex flex-col space-y-2 justify-center items-center'>
<span className='absolute'><img src="/error.png" alt="" className='h-auto'/></span>
<h1 className='text-7xl md:text-8xl text-white font-bold z-20'>404 Error</h1>
<br />
<h2 className='text-4xl text-white z-20'>Page not found!</h2>
</div>
</div>
  )
}

export default Error404