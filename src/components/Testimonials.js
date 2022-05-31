import React from 'react';
import Button from '../components/Button';


function Testimonials() {
    return (
        <div>
            <div className='pt-28 mx-16'>
            <header>
                <h1 className='text-[#0F298B] space-grotesk font-bold text-4xl text-center'>Testimonials.</h1> <br />
                <p className='space-grotesk text-center'>These are what our clients are saying</p>
            </header>
            <section className='flex justify-end ...'>
                <Button text="View more" />
            </section>
            <section className='flex justify-between ... mx-16 pt-0 space-x-4 ...'>
                <div className=''>
                    <div className='bg-[#FFF] px-6 pt-6'>
                        <div className=''>
                            <h1 className='space-grotesk font-bold text-2xl'>Alex Godwin</h1>
                            <p className='space-grotesk font-normal text-base text-lg font-semibold nunito'>South Africa</p>
                            <p className='space-grotesk font-normal text-base text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='bg-[#FFF] px-6 pt-6'>
                        <div>
                            <h1 className='space-grotesk font-bold text-2xl'>Alex Godwin</h1>
                            <p className='space-grotesk font-normal text-base text-lg font-semibold nunito'>South Africa</p>
                            <p className='space-grotesk font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='bg-[#FFF] px-6 pt-6 rounded-2xl'>
                        <div>
                            <h1 className='space-grotesk font-bold text-2xl'>Alex Godwin</h1>
                            <p className='space-grotesk font-normal text-base text-lg font-semibold nunito'>South Africa</p>
                            <p className='space-grotesk font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}

export default Testimonials;