import React from 'react';

const Table = ({ staffs }) => {
  return (
    <div className='flex flex-row justify-center gap-6 mx-8 w-auto'>
      
      {staffs.map((staff) => (
        <div className='flex flex-col p-6 items-center justify-center h-60  my-16 cursor-pointer transition-all ease text-white shadow bg-gray-700 opacity-85 rounded-xl  hover:scale-105 text-center' key={staff._id}>
          <div className='flex items-center text-center'><span className='font-bold'>{staff.name}</span></div>
          <h2 className='font-semibold text-center'>{staff.designation}</h2>
          <div className='font-medium block'>{staff.block}</div><br />
          <div className='font-medium text-center'>{staff.floor}</div><br />
          <div className='font-normal text-center block'>{staff.description}</div>
          <div className='flex items-center justify-center text-center'>
            {Array.isArray(staff.dept) ? (
              staff.dept.map((dept, index) => (
                <p key={dept}>
                  {dept}
                  {index !== staff.dept.length - 1 && '/'}
                </p>
              ))
            ) : (
              <p className='capitalize'>{staff.dept}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
