import React from 'react';

const Country = (props) => {
    const {flags, name, capital, region, population}= props.country
    return (
        <div className='lg:w-[30%] sm:w-full text-center border-2 border-white rounded-lg p-3 mx-auto my-3 shadow-md shadow-black'>
            <div className='w-full lg:h-48 sm:h-52 shadow-md mb-3 shadow-black'>
                <img className='h-full w-full ' src={flags.png}/>
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