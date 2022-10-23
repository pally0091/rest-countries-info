import React from 'react';

const Country = (props) => {
    const {flags, name, capital, region, population}= props.country
    return (
        <div className='w-[30%] text-center border-2 border-white p-3 mx-auto mt-4 shadow-md shadow-black'>
            <div className='w-full h-48 shadow-md mb-3 shadow-black'>
                <img className='h-full w-full' src={flags.png}/>
            </div>
            <h3 className='font-bold text-2xl'>{name.common}</h3>
            <h5 className='text-lg font-bold'>Official Name: {name.official}</h5>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;