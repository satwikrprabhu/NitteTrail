
import { Link } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import CSE3PDF from './3rd Sem/CSE3PDF';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const subjects = [
    {
        title: "Computer Org. Arch. (COA)",
        url: "",
    },
    {
        title: `Data Structures  (DS)`,
        url: "",
    },
    {
        title: "Digital System Design(DSD)",
        url: "",
    },
    {
        title: "Statistics & Probability Theory",
        url: "",
    },
    {
        title: "OOPS Programming with JAVA",
        url: "",
    },
    
    
];
const theme = createTheme({
    palette: {
      background: {
        paper: '#374151',
      },
    },
  });

const CSE3 = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center pt-28 md:pt-28 bg-gray-950'>
            <h1 className="text-5xl font-bold text-center text-white">Resources</h1>
            <ThemeProvider theme={theme}>
            <div className="flex flex-col md:flex-row md:flex-wrap bg-gray-950 text-white justify-around pt-8 px-6 md:p-12">
                {subjects.map((subject, index) => (
                    <Accordion
                        key={index}
                        className="md:w-1/3 xl:w-1/3 mb-8 md:p-3 lg:p-8 md:mb-0  text-white hover:scale-105 transition-all hover:shadow-gray-100 md:text-md bg-gray-950 rounded-2xl p-4 backdrop-filter backdrop-blur-0"
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            className="rounded-lg m-7 md:p-10 bg-white text-white bg-opacity-20 flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-0 "
                        >
                            <div 
          aria-controls="panel1a-content"
          id="panel1a-header" className="text-xl font-bold  text-white text-left"><Typography>{subject.title}</Typography></div>
                            {/* <Link to={subject.url} className="text-black bg-white border-none  px-2 py-1 font-semibold rounded-md
                            hover:bg-slate-200">Explore</Link> */}

                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
            <ul className='text-white'>
                <li className='border-b pb-2 border-gray-500 flex flex-row justify-between'><h1>Unit 1</h1><a href="https://drive.google.com/file/d/1tkAjQGXCo98ZNp5IYqCJUMUvBe2erG52/view?usp=sharing">Download</a></li><br />
                <li className='border-b pb-2 border-gray-500 flex flex-row justify-between'><h1>Unit 2</h1><a href="https://drive.google.com/file/d/1B9xDL_1l0p4g8RFSLx3olTGHI-tORO71/view?usp=sharing">Download</a></li><br />
                <li className='border-b pb-2 border-gray-500 flex flex-row justify-between'><h1>Unit 3</h1><a href="https://drive.google.com/file/d/119MagAztBWk6K-9eQ6ElFSbK47Sud_cz/view?usp=sharing">Download</a></li><br />
            </ul>
          </Typography>
                        </AccordionDetails>

    
                    </Accordion>
                ))}
            </div>
            </ThemeProvider>
        </div>
    );
};

export default CSE3;
