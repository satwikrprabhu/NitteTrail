import React from 'react'

const years = [
    {
      title: '1st Year',
      description: 'Physics Cycle & Chem Cycle',
      link: '#',
    },
    {
      title: '2nd Year',
      description: 'DS,COA,Java,Maths',
      link: '#',
    },
    {
      title: '3rd Year',
      description: 'DSD,Web Dev,DAA,SEPM',
      link: '#',
    },
    {
      title: '4th Year',
      description: 'OS,DBMS,MP',
      link: '#',
    },
  ];
  

const CSESemester = () => {
  return (
    <div className="flex flex-wrap h-screen justify-center items-center bg-gray-950 pt-20">
      {years.map((year, index) => (
        <div key={index} className="w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/2 px-4">
          <div className="md:mx-48">
            <div className="bg-gray-700 rounded-lg shadow-lg">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-semibold mb-2 text-white  text-center">{year.title}</h3>
                <p className="text-white text-center">{year.description}</p>
              </div>
              <div className="bg-gray-900 px-4 py-3 text-center rounded-b-lg">
                <a href={year.link} className="text-white hover:text-gray-300 font-medium">Explore Resources</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CSESemester;