import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
         <img className='rounded-2xl content-div' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize'>{item.name}</h3>
      <p className='text-base max-w-md mb-3'>
        {item.description}
      </p>
      <div className='flex items-center space-x-3 text-center'>
        <a className='text-white hover:text-accent' href={item.href}>Code</a>
        <a className='text-white hover:text-accent' href={item.video}>Démo</a>
      </div>
    </div>
  );
};

export default Project;