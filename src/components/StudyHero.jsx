import React from 'react';

const years = [
  {
    title: '1st Year',
    description: 'Physics Cycle & Chemistry Cycle',
    link: '#',
  },
  {
    title: '2nd Year',
    description: 'CSE, ISE, ISE, BTE, AIML',
    link: '#',
  },
  {
    title: '3rd Year',
    description: 'CSE, Civil, Mech, BTE, AIML',
    link: '#',
  },
  {
    title: '4th Year',
    description: 'ECE, Civil, Mech, BTE, AIML',
    link: '#',
  },
];

const StudyHero = () => {
    return (
      <div className="flex flex-wrap h-screen justify-center items-center bg-gray-950">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 m-auto p-4">
          {years.slice(0, 2).map((year, index) => (
            <div key={index} className="mb-4">
              <div className="bg-gray-700 rounded-lg shadow-lg">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white  text-center">{year.title}</h3>
                  <p className="text-white text-center">{year.description}</p>
                </div>
                <div className="bg-gray-900 px-4 py-3 text-center rounded-b-lg">
                  <a href={year.link} className="text-white hover:text-blue-700 font-medium">Explore Resources</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 m-auto p-4">
          {years.slice(2).map((year, index) => (
            <div key={index} className="mb-4">
              <div className="bg-gray-700 rounded-lg shadow-lg">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white text-center">{year.title}</h3>
                  <p className="text-white text-center">{year.description}</p>
                </div>
                <div className="bg-gray-900 px-4 py-3 text-center rounded-b-lg">
                  <a href={year.link} className="text-white hover:text-blue-700 font-medium">Explore Resources</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  

export default StudyHero;
