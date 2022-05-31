import React from 'react';
import img from '../assets/choose-us.png'
import check from '../assets/check.png'

function ChooseUs() {
    return (
        <div className='flex justify-between mx-16 items-center'>
            <img src={img} className="w-96" alt='' />
            <div>
                <h1 className='text-[#0F298B] space-grotesk font-bold text-4xl'>Why you should choose us. </h1> <br />
                <p className='space-grotesk'>Creating quality urban lifestyles,building stronger <br />communities</p><br />
                <ul className='grid grid-cols-2 gap-4'>
                    <li className='flex space-grotesk font-medium'><img src={check} alt="" />World class</li>
                    <li className='flex space-grotesk font-medium'><img src={check} alt="" />Affordable</li>
                    <li className='flex space-grotesk font-medium'><img src={check} alt="" />Trusted</li>
                    <li className='flex space-grotesk font-medium'><img src={check} alt="" />Amenities</li>
                </ul>
            </div>
        </div>
    );
}

export default ChooseUs;