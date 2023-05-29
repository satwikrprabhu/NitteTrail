import React from 'react';

const Table = ({ staffs }) => {
  return (
    <div className='flex flex-row'>
      
      {staffs.map((staff) => (
        <div className='flex flex-col p-10 items-center h-50 mx-4 my-10 cursor-pointer transition-all ease text-black bg-nitteYellow opacity-70 rounded hover:scale-105' key={staff._id}>
          <div className='flex items-center object-contain'><span className='font-bold'>{staff.name}</span></div>
          <h2 className='font-semibold'>{staff.designation}</h2>
          <div className='font-medium'>{staff.block}</div><br />
          <div className='font-medium'>{staff.floor}</div><br />
          <div className='font-normal'>{staff.description}</div>
          <div className='flex items-center justify-center'>
            {Array.isArray(staff.dept) ? (
              staff.dept.map((dept, index) => (
                <p key={dept}>
                  {dept}
                  {index !== staff.dept.length - 1 && '/'}
                </p>
              ))
            ) : (
              <p>{staff.dept}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
