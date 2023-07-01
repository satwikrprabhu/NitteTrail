import React from 'react';
import { Link } from 'react-router-dom';
const subjects = [
    {
        title: "Computer Organisation & Architecture(COA)",
        url: "",
    },
    {
        title: "Data Structures(DS)",
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

const CSE3PDF = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center pt-28 md:pt-28 bg-gray-950'>
            <h1 className="text-5xl font-bold text-center text-white">Resources</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap  text-white justify-around pt-8 px-6 md:p-12">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="md:w-1/3 xl:w-1/3 mb-8 md:p-3 lg:p-8 md:mb-0 text-white hover:scale-105 transition-all hover:shadow-gray-100 md:text-md"
                    >
                        <div
                            className="rounded-lg p-7 md:p-10 bg-white bg-opacity-20 flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-0  hover:"
                        >
                            <h3 className="text-2xl font-bold text-white text-left">{subject.title}</h3>
                            <Link to={subject.url} className="text-black bg-white border-none  px-3 py-1 font-semibold rounded-md
                            hover:bg-slate-200">Download</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CSE3PDF;
