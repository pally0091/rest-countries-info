import React, { useEffect, useState } from 'react';
import Country from './Country'

const Countries = () => {
    const[countries, setCountries]=useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
         .then(res => res.json())
         .then(data => setCountries(data));
    }, [])
    return (
        <div className='lg:flex lg:flex-wrap mx-auto w-full mt-3'>
            {
                countries.map(country => <Country
                    key={country.ccn3}
                    country={country}
                ></Country>)
            }
        </div>
    );
};

export default Countries;