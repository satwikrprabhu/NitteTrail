import React from 'react';

const Table = ({ staffs }) => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-6 mx-8 my-16 w-auto'>
      {staffs.map((staff) => (
        <div
          className='flex flex-col p-6 items-center justify-center h-60 my-[.25rem] cursor-pointer transition-all ease text-white shadow bg-gray-700 opacity-85 rounded-xl hover:scale-105 text-center flex-1 flex-basis-0'
          key={staff._id}
        >
          <div className='flex items-center text-center'>
            <span className='font-bold'>{staff.name}</span>
          </div>
          <h2 className='font-semibold text-center'>{staff.designation}</h2>
          <div className='font-medium'>{staff.block}</div>
          <div className='font-medium text-center'>{staff.floor}</div>
          <div className='font-normal text-center block'>
            {staff.description}
          </div>
          <div className='flex justify-center text-center flex-grow'>
            {Array.isArray(staff.dept) ? (
              staff.dept.map((dept, index) => (
                <p
                  key={dept}
                  className={index !== staff.dept.length - 1 ? 'mr-1' : ''}
                >
                  {dept} {index !== staff.dept.length - 1 && '/'}
                </p>
              ))
            ) : (
              <p className='capital lowercase'>{staff.dept}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;