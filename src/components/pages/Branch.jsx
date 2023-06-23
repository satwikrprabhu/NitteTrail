import React from 'react';
import { Link } from 'react-router-dom';

const branchtitles = [
    {
        title: "CSE",
        url: "cse",
    },
    {
        title: "ISE",
        url: "ise",
    },
    {
        title: "ECE",
        url: "",
    },
    {
        title: "AIML",
        url: "",
    },
    {
        title: "EEE",
        url: "",
    },
    {
        title: "CCE",
        url: "",
    },
    {
        title: "Mech",
        url: "",
    },
    {
        title: "Civil",
        url: "",
    },
    {
        title: "BTE",
        url: "",
    },
    {
        title: "Robotics",
        url: "",
    },
    {
        title: "AIDS",
        url: "",
    },
];

const Branch = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center pt-28 md:pt-28 bg-gray-950'>
            <h1 className="text-5xl font-bold text-center text-white">Branches</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap  text-white justify-around pt-8 px-6 md:p-12">
                {branchtitles.map((branch, index) => (
                    <div
                        key={index}
                        className="md:w-1/3 xl:w-1/4 mb-8 md:p-3 lg:p-8 md:mb-0 text-white hover:scale-105 transition-all hover:shadow-gray-100 md:text-md"
                    >
                        <div
                            className="rounded-lg p-7 bg-white bg-opacity-20 flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-0  hover:"
                        >
                            <h3 className="text-2xl font-bold text-white text-center">{branch.title}</h3>
                            <Link to={branch.url} className="text-black bg-white border-none  px-3 py-1 font-semibold rounded-md
                            hover:bg-slate-200">Explore</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Branch;
