import React from 'react';
import heroImg from '../assets/Hero-image.png'
import Button from '../components/Button';
import ChooseUs from '../components/ChooseUs';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Hiw from '../components/Hiw';
import SearchBar from '../components/SearchBar';
import Testimonials from '../components/Testimonials';



function Home() {
    return (
        <div className=''>
            <div className='flex justify-between ... mx-16 my-32'>
                <section className='w-96'>
                    <h1 className='text-4xl space-grotesk text-[#0F298B] font-medium'>Helping you find the property of your dreams.</h1>
                    <h1 className='space-grotesk text-base font-normal text-[#000000]'>Creating quality urban lifestyles, building stronger communities</h1> <br /><br />
                    <div className='flex justify-between'>
                        <Button 
                            text="Learn More"
                            className="space-grotesk font-medium"
                            textClass="p-2"
                        />
                    </div>
                </section>
                <img src={heroImg} className="" alt="" />
            </div>
            <SearchBar />
            <Hiw />
            <ChooseUs />
            <Featured />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default Home;