import React from 'react';
import { Link } from 'react-router-dom';
const semtitles = [
    {
        title: "Data Analysis Algorithm",
        url: "https://drive.google.com/drive/folders/16HPuHp8nRUoV_Be57V5oeCQzVR521ku6?usp=drive_link",
    },
    {
        title: "Microprocessors",
        url: "https://drive.google.com/drive/folders/1kHeidayUO0ptFYPMUQBWFW3V9SNCijfB?usp=drive_link",
    },
    {
        title: "SEPM",
        url: "https://drive.google.com/drive/folders/1ej94mbEHRuGIdUgKre60_yisfTh4Av17?usp=drive_link",
    },
    {
        title: "Maths",
        url: "https://drive.google.com/drive/folders/1LiWd8CyTgizbcSr1PjHOcgdGZDUQJhr9?usp=drive_link",
    },
    {
        title: "Python",
        url: "https://drive.google.com/drive/folders/1tynwR6cfe8V-2_biy7D3dN5lHziluQig?usp=drive_link",
    },
];

const CSE3 = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center pt-28 md:pt-28 bg-gray-950'>
            <h1 className="text-5xl font-bold text-center text-white">Semester</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap  text-white justify-around pt-8 px-6 md:p-12">
                {semtitles.map((sem, index) => (
                    <div
                        key={index}
                        className="md:w-1/3 xl:w-1/4 mb-8 md:p-3 lg:p-8 md:mb-0 text-white hover:scale-105 transition-all hover:shadow-gray-100 md:text-md"
                    >
                        <div
                            className="rounded-lg p-7 md:py-12 bg-white bg-opacity-20 flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-0 "
                        >
                            <h3 className="text-2xl font-bold text-white text-left">{sem.title}</h3>
                            <Link to={sem.url} className="text-black bg-white border-none  px-3 py-1 font-semibold rounded-md
                            hover:bg-slate-200">Download</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CSE3;
