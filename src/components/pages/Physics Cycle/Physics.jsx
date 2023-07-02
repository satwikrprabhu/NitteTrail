import React from 'react';
import { Link } from 'react-router-dom';
const subtitles = [
    {
        title: "Maths",
        url: "https://drive.google.com/drive/folders/1K6GugB1joNP9TfyGttnU7GCGexP8PkQn?usp=sharing",
    },
    {
        title: "Basic Electronics",
        url: "https://drive.google.com/drive/folders/1U4nQLh4eHd3_6-28SuLzUeJzQTgg3QBc?usp=drive_link",
    },
    {
        title: "Civil",
        url: "https://drive.google.com/drive/folders/1_dKq354RfIOifcVQ8vgxch2QDEPVMIRk?usp=drive_link",
    },
    {
        title: "Physics",
        url: "https://drive.google.com/drive/folders/17kXyVZqtt5vgaXLpCR9mtSO9aXp-XC2D?usp=drive_link",
    },
    {
        title: "Constitution",
        url: "https://drive.google.com/drive/folders/1ONTJbeAkokSH6eGdvJH1jtVB1I-itjav?usp=drive_link",
    },
];

const Physics = () => {
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

export default Physics;
