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
            <div className="flex flex-col md:flex-row flex-wrap  text-white justify-evenly p-12">
                {branchtitles.map((branch, index) => (
                    <div
                        key={index}
                        className="md:w-1/4 mb-8 md:p-8 md:mb-0 text-white"
                    >
                        <div
                            className="border rounded-lg p-4 border-white"
                        >
                            <h3 className="text-xl font-bold">{branch.title}</h3>
                            <a href={branch.url} className="text-white">Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Branch;
