import React from 'react';

function Footer() {
    return (
        <footer className='grid grid-cols-4 gap-4 mt-24 bg-[#0F298B] text-[#FFF] py-28 px-16'>
            <div>
                <h1 className='oleo text-2xl font-normal'>Dee's Estate</h1>
                <p className='nunito'>Solution for easy and flexible house hunting.You can trust us anywhere through this platform </p>
            </div>
            <div>
                <h1 className='space-grotesk font-bold text-2xl'>Property</h1>
                <ul className='nunito font-normal leading-10'>
                    <li>Learning Modules</li>
                    <li>Partnership</li>
                    <li>Watch demo</li>
                    <li>Event</li>
                </ul>
            </div>
            <div>
                <h1 className='space-grotesk font-bold text-2xl'>About</h1>
                <ul className='nunito font-normal leading-10'>
                    <li>Our Company</li>
                    <li>Career</li>
                    <li>Investors Relations</li>
                    <li>Social Impact</li>
                </ul>
            </div>
            <div>
                <h1 className='space-grotesk font-bold text-2xl'>Resources</h1>
                <ul className='nunito font-normal leading-10'>
                    <li>Contact</li>
                    <li>Give feedback</li>
                    <li>System status</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;