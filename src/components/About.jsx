import React from 'react'

const team = [
  {
    name:"Satwik Prabhu",
    img:"",
    year:"",
    details:"",
    github:"https://github.com/satwikrprabhu",
    linkedin:"https://www.linkedin.com/in/satwikprabhu",
    insta:"https://www.instagram.com/satwikprabhu",
  },
  {
    name:"Prathama SJ",
    img:"",
    year:"",
    details:"",
    github:"https://github.com/satwikrprabhu",
    linkedin:"https://www.linkedin.com/in/satwikprabhu",
    insta:"https://www.instagram.com/satwikprabhu",
  },
  {
    name:"Shishir Shetty",
    img:"",
    year:"",
    details:"",
    github:"https://github.com/satwikrprabhu",
    linkedin:"https://www.linkedin.com/in/satwikprabhu",
    insta:"https://www.instagram.com/satwikprabhu",
  },
  {
    name:"Sinchana Poojary",
    img:"",
    year:"",
    details:"",
    github:"https://github.com/satwikrprabhu",
    linkedin:"https://www.linkedin.com/in/satwikprabhu",
    insta:"https://www.instagram.com/satwikprabhu",
  }

]


const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div>About us</div>
    <div className='flex flex-row justify-center items-center'>
      <div className='flex flex-col border border-gray-500 backdrop-filter'>
        <div>{team.name}</div>
        <div>{team.img}</div>
        <div>{team.year}</div>
        <div>{team.details}</div>
      </div>
    </div>
    </div>
  )
}

export default About