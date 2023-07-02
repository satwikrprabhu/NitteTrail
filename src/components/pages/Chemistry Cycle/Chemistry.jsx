import React from 'react';
import { Link } from 'react-router-dom';
const subtitles = [
    {
        title: "Chemistry",
        url: "https://drive.google.com/drive/folders/10xgX5C-yDksBZcX2ORfzSBb2SIOtlyUj?usp=drive_link",
    },
    {
        title: "Mech",
        url: "https://drive.google.com/drive/folders/11zgQgUqZ4Qwj-ABTR1WeG5U-sao5UYsR?usp=drive_link",
    },
    {
        title: "CPP",
        url: "https://drive.google.com/drive/folders/1UsTSySKHoNTMqGIx7dQzXncUYd_XmGLw?usp=drive_link",
    },
    {
        title: "BEE",
        url: "https://drive.google.com/drive/folders/1-S_8yn-EVcVkRuYD_1Im8HLD1VGM-UsK?usp=drive_link",
    },
    {
        title: "Maths",
        url: "https://drive.google.com/drive/folders/1gqvtnJDRUl3cg6ZDiwvEfuEFgTD2-i1Y?usp=drive_link",
    },
    {
        title: "EVS",
        url: "https://drive.google.com/drive/folders/1HC1JjieGplNIhnICnqBvF3ceXtxF9U5D?usp=drive_link",
    },
    {
        title: "IT Skills",
        url: "https://drive.google.com/drive/folders/1lOIqfpt5mfZOBXpz6lYjd9zTWXT8Q2Da?usp=drive_link",
    },
    {
        title: "Biology",
        url: "https://drive.google.com/drive/folders/1wJNgBcu0ygIFjLkwRyzehVuPuLgs_Lt3?usp=drive_link",
    },
];

const Chemistry = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center pt-28 md:pt-28 bg-gray-950'>
            <h1 className="text-5xl font-bold text-center text-white">Subject</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap  text-white justify-around pt-8 px-6 md:p-12">
                {subtitles.map((sub, index) => (
                    <div
                        key={index}
                        className="md:w-1/3 xl:w-1/4 mb-8 md:p-3 lg:p-8 md:mb-0 text-white hover:scale-105 transition-all hover:shadow-gray-100 md:text-md"
                    >
                        <div
                            className="rounded-lg p-7 md:py-12 bg-white bg-opacity-20 flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-0 "
                        >
                            <h3 className="text-2xl font-bold text-white text-left">{sub.title}</h3>
                            <Link to={sub.url} className="text-black bg-white border-none  px-3 py-1 font-semibold rounded-md
                            hover:bg-slate-200">Download</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chemistry;
