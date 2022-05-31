import React from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchBar() {
    return (
        <form className='flex justify-between ... bg-[#FFFFFF] py-8 px-16 mx-24 rounded-3xl'>
            <div>
                <p className='text-center text-[#0F298B] font-bold'>Location</p>
                <select name="Location">
                    <option value="Lekki" className='text-center text-[#000000]'>Lekki</option>
                </select>
            </div>
            <div>
                <p className='text-center text-[#0F298B] font-bold'>Property Type</p>
                <select name="Property type">
                    <option value="Duplex" className='text-center text-[#000000]'>Duplex</option>
                </select>
            </div>
            <div>
                <p className='text-center text-[#0F298B] font-bold'>Max Price</p>
                <select name="Max price">
                    <option value="Lekki" className='text-center text-[#000000]'>N10,000,000</option>
                </select>
            </div>
            <button className='flex justify-between ... items-center bg-[#2549D3] text-white p-1.5 rounded px-2.5'>
                <p className='p-2 flex justify-between ... items-center space-x-2'>
                    <BsSearch/><p className='space-grotesk font-medium'>Search</p>
                </p>
            </button>
        </form>
    );
}

export default SearchBar;