import React from 'react';
import address from '../assets/address.png';
import secure from '../assets/Secure.png';
import sHouse from '../assets/Smart-house.png';

function Hiw() {
    // const data = [
    //     {
    //         data: 1,
    //         image: address,
    //         name: "Find Home",
    //         description: "Our properties are located at prime areas where by there won’t be problem with transportation"
    //     },
    //     {
    //         id: 2,
    //         image: secure,
    //         name: "Make payments",
    //         description: "Our estates comes with good network,portable water , 24hrs light and round the clock security."
    //     },
    //     {
    //         id: 3,
    //         image: sHouse,
    //         name: "Make it Official",
    //         description: "We have been in business for over 32 years,for client outside the country you can trust  us to deliver well."
    //     },
    // ]
    // const card = data.map(x => {
    //     return(
    //         <section className='w-52 flex flex-col'>
    //             <img src={x.image} alt="" className='w-28'/>
    //             <div>
    //                 <h1 className='text-center'>{x.name}</h1>
    //                 <p className='text-center'>{x.description}</p>
    //             </div>
    //         </section>
    //     )
    // })
    return (
        <div className='pb-36'>
            <header className='flex justify-center ... flex-col text-center pt-40'>
                <h1 className='text-[#0F298B] space-grotesk text-5xl font-bold'>How it works</h1>
                <p className='space-grotesk text-3xl'>This is how our products works </p>
            </header>
            <section className='flex justify-between ... mx-16 pt-24'>
                <div className=' bg-[#FFFFFF] px-16 shadow'>
                    <div className='w-48 flex flex-col justify-center items-center pt-7'>
                        <img src={address} alt="" className='w-14'/>
                        <div className='pt-8 pb-24'>
                            <h1 className='text-center space-grotesk font-medium text-2xl'>Find Home</h1>
                            <p className='text-center space-grotesk font-normal text-base'>Our properties are located at prime areas where by there won’t be problem with transportation</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#FFFFFF] px-16 shadow'>
                    <div className='w-48 flex flex-col justify-center items-center bg-[#FFFFFF]'>
                        <img src={secure} alt="" className='w-36'/>
                        <div>
                            <h1 className='text-center space-grotesk font-medium text-2xl'>Make payments</h1>
                            <p className='text-center space-grotesk font-normal text-base'>Our estates comes with good network, portable water, 24hrs light and round the clock security.</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#FFFFFF] px-16 shadow'>
                    <div className='w-48 flex flex-col justify-center items-center bg-[#FFFFFF]'>
                        <img src={sHouse} alt="" className='w-44'/>
                        <div>
                            <h1 className='text-center space-grotesk font-medium text-2xl'>Make it Official</h1>
                            <p className='text-center space-grotesk font-normal text-base'>We have been in business for over 32 years, for client outside the country you can trust us to deliver well.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hiw;