import React from 'react';

const branchtitles = [
    {
        title: "CSE",
        url: "",
    },
    {
        title: "ISE",
        url: "",
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
        <div className='md:h-screen pt-28 md:pt-28 bg-gray-950'>
            <h1 className="text-5xl font-bold text-center text-white">Branches</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap  text-white justify-evenly pt-8 px-6 md:p-12">
                {branchtitles.map((branch, index) => (
                    <div
                        key={index}
                        className="md:1/3 xl:w-1/4 mb-8 md:p-8 md:mb-0 text-white hover:scale-105 transition-all hover:shadow-gray-100"
                    >
                        <div
                            className="rounded-lg p-7 bg-white bg-opacity-20 flex justify-between items-centerbg-clip-padding backdrop-filter backdrop-blur-0 border border-black hover:"
                        >
                            <h3 className="text-2xl font-bold text-white text-center">{branch.title}</h3>
                            <a href={branch.url} className="text-black bg-white border border-black px-3 py-1 font-semibold rounded-md
                            hover:bg-slate-200">Explore</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Branch;
