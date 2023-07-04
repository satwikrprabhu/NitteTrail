import React from 'react'
import { useRoutes } from 'react-router-dom'
import CSE from '../components/pages/Branches/CSE'
import ISE from '../components/pages/Branches/ISE'
import ECE from '../components/pages/Branches/ECE'
import AIML from '../components/pages/Branches/AIML'
import EEE from '../components/pages/Branches/EEE'
import CCE from '../components/pages/Branches/CCE'
import Mech from '../components/pages/Branches/Mech'
import Civil from '../components/pages/Branches/Civil'
import BTE from '../components/pages/Branches/BTE'
import RI from '../components/pages/Branches/RI'
import AIDS from '../components/pages/Branches/AIDS'
import Resource from '../components/pages/Resource'
import Error404 from '../components/pages/Error404'
import Physics from '../components/pages/Physics Cycle/Physics'
import Chemistry from '../components/pages/Chemistry Cycle/Chemistry'
import CSE3 from '../components/pages/CSE/CSE3'
import CSE4 from '../components/pages/CSE/CSE4'
import About from '../components/About'


const Routes = () => {

  const element = useRoutes([
    {
      path: '/',
      // element: page?<Hero />:<Branch />,
    },{
      path:'/about',
      element:<About />
    },
    {
      path: '/',
      // element: page?<Hero />:<Branch />,
      children: [
        { path: '*', element: <Error404 /> },

        //CSE

        { path: 'cse', element: <CSE />},
              { path: 'cse',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <CSE3 /> },
              { path: '4', element: <CSE4 /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },



        //ISE    
        { path: 'ise', element: <ISE /> },
        { path: 'ise',
        children:[
          { path: '*', element: <Error404 /> },
          { path: '1', element: <Physics /> },
          { path: '2', element: <Chemistry /> },
          { path: '3', element: <Resource /> },
          { path: '4', element: <Resource /> },
          { path: '5', element: <Resource /> },
          { path: '6', element: <Resource /> },
          { path: '7', element: <Resource /> },
          { path: '8', element: <Resource /> },
        ],
        },



        //ECE
        { path: 'ece', element: <ECE /> },
        { path: 'ese',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <Resource /> },
              { path: '4', element: <Resource /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },



        //AIML
        { path: 'aiml', element: <AIML /> },
        { path: 'aiml',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <Resource /> },
              { path: '4', element: <Resource /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },



         //EEE   
        { path: 'eee', element: <EEE /> },
        { path: 'eee',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <Resource /> },
              { path: '4', element: <Resource /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },



        //CCE    
        { path: 'cce', element: <CCE /> },
        { path: 'cce',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <Resource /> },
              { path: '4', element: <Resource /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },
        


        //CIVIL    
        { path: 'civil', element: <Civil /> },
        { path: 'civil',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <Resource /> },
              { path: '4', element: <Resource /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },



        //MECH
        { path: 'mech', element: <Mech /> },
        { path: 'mech',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <Resource /> },
              { path: '4', element: <Resource /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },



        //BTE
        { path: 'bte', element: <BTE /> },
        { path: 'bte',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <Resource /> },
              { path: '4', element: <Resource /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },



        
        //RI
        { path: 'ri', element: <RI /> },
        { path: 'ri',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <Resource /> },
              { path: '4', element: <Resource /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },


        
        //AIDS
        { path: 'aids', element: <AIDS /> },
        { path: 'aids',
            children:[
              { path: '*', element: <Error404 /> },
              { path: '1', element: <Physics /> },
              { path: '2', element: <Chemistry /> },
              { path: '3', element: <Resource /> },
              { path: '4', element: <Resource /> },
              { path: '5', element: <Resource /> },
              { path: '6', element: <Resource /> },
              { path: '7', element: <Resource /> },
              { path: '8', element: <Resource /> },
            ],
            },
            ],
    },
  ]);

  return (
    <>
    {element}
    </>
  )
}

export default Routes