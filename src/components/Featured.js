import React from 'react';
import featureOne from '../assets/Feature-1.png'
import featureTwo from '../assets/Feature-2.png'
import featureThree from '../assets/Feature-3.png'
import Button from './Button';


function Featured() {
    return (
        <div className='pt-28 mx-16'>
            <header>
                <h1 className='text-[#0F298B] space-grotesk font-bold text-4xl text-center'>Our Featured Properties. </h1> <br />
                <p className='space-grotesk text-center'>One of our biggest product to be featured and that has sold<br /> out the most.</p>
            </header>
            <section className='flex justify-end ...'>
                <Button text="View more" />
            </section>
            <section className='flex justify-between ... mx-16 pt-8 space-x-4 ...'>
                <div className='px-16 bg-[#FFF] shadow-white'>
                    <div className=''>
                        <img src={featureOne} alt="" className='w-full'/>
                        <h1 className='space-grotesk font-medium text-2xl'>The Palace</h1>
                        <div className='grid grid-cols-2 gap-10'>
                            <div className=''>
                                <p className='space-grotesk font-normal text-base'>Lekki,phase 2</p>
                            </div>
                            <div className=''>
                                <h1 className='space-grotesk font-normal text-xl'>Duplex</h1>
                                <p className='space-grotesk font-medium text-lg text-[#0F298B]'>$2,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-16 shadow-white bg-[#FFF]'>
                    <img src={featureTwo} alt="" className='w-96'/>
                    <h1 className='space-grotesk font-medium text-2xl'>IVY RORY</h1>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className=''>
                            <p className='space-grotesk font-normal text-base'>Lekki,phase 2</p>
                        </div>
                        <div className=''>
                            <h1 className='space-grotesk font-normal text-xl'>Duplex</h1>
                            <p className='space-grotesk font-medium text-lg text-[#0F298B]'>$2,000</p>
                        </div>
                    </div>
                </div>
                <div className='px-16 bg-[#FFF]'>
                    <img src={featureThree} alt="" className='w-96  '/>
                    <h1 className='space-grotesk font-medium text-2xl'>REXONA</h1>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className=''>
                            <p className='space-grotesk font-normal text-base'>Lekki,phase 2</p>
                        </div>
                        <div className=''>
                            <h1 className='space-grotesk font-normal text-xl'>Duplex</h1>
                            <p className='space-grotesk font-medium text-lg text-[#0F298B]'>$2,000</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Featured;