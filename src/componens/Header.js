import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around border-b-2 border-black bg-sky-300 hover:bg-sky-200 p-5 items-center'>
            <h1 className='text-3xl font-bold'>Welcome to Countries Info</h1>
            <div className='border-2 rounded-xl border-black p-5'>
                <Link className='mx-3 font-bold hover:text-white ' to='/home'>Home</Link>
                <Link className='mx-3 font-bold hover:text-white ' to='/countries'>Countries</Link>
                <Link className='mx-3 font-bold hover:text-white ' to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;