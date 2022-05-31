import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';


function NavBar() {
    return (
        <div>
            <nav className="text-black flex justify-between ... mx-16 my-4">
                <h1 className='oleo text-2xl font-normal'>Dee's Estate</h1>
                <div className='flex space-x-10'>
                    <Link to="/home" className='font-semibold text-[#0F298B]'>Home</Link>
                    <Link to="/home" className='hover:text-[#0F298B] font-semibold'>Rent</Link>
                    <Link to="/home" className='hover:text-[#0F298B] font-semibold'>Land</Link>
                    <Link to="/home" className='hover:text-[#0F298B] font-semibold'>Agent</Link>
                    <Link to="/home" className='hover:text-[#0F298B] font-semibold'>Contact Us</Link>
                </div>
                <Button 
                    text="Get Started"
                    className="space-grotesk font-medium"
                    textClass="p-2"
                />
            </nav>
        </div>
    );
}

export default NavBar;