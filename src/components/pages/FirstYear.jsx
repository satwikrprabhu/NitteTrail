import React from 'react'

const FirstYear = () => {
const firstyear = [{
    title:"Printed PDF Notes",
    url:""
},
{
    title:"Handwritten Notes",
    url:""
},
{
    title:"Lab Manuals" ,
    url:""
},
{
    title:"Softwares" ,
    url:""
},
{
    title:"Question Papers" ,
    url:""
},
]

  return (
    <div>
        <div>
            <a href={firstyear.url}>firstyear.title</a>
        </div>
    </div>
  )
}

export default FirstYear