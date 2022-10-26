import React from 'react';

const Country = (props) => {
    const {flags, name, capital, region, population}= props.country
    return (
        <div className='flex lg:w-[45%] sm:w-full text-center border-2 border-white rounded-lg p-3 lg:mx-auto sm: mx-2 my-3 shadow-md shadow-black'>
            <div className='w-1/2 lg:h-48 sm:h-52 shadow-md mb-3 shadow-black'>
                <img className='h-full w-full ' src={flags.png}/>
            </div>
            <div className='w-1/2'>
                <h3 className='font-bold text-2xl'>{name.common}</h3>
                <h5 className='text-lg font-bold'>Official Name: {name.official}</h5>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
            </div>
        </div>
    );
};

export default Country;