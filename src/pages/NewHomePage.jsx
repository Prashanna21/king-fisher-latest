import React from 'react';
import Hero1 from '../Components/hero1';
import Hero2 from '../Components/hero2';
import Hero3 from '../Components/Hero3';
import Hero4 from '../Components/Hero4';
import Hero5 from '../Components/Hero5';
import MapSection from '../Components/MapSection';
import PaymentPlanSection from '../Components/PaymentPlanSection';
import FloorPlanSelector from '../Components/FloorPlanSelector';
import Navbar from '../Components/Navbar';

const NewHomePage = () => {
  return (
    <>
    <Navbar/>
    <Hero1/>
    <div className='mx-10'>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Hero5/>
    <MapSection/>
    <PaymentPlanSection/>
    <FloorPlanSelector/>
    </div>
    </>
  )}

export default NewHomePage;
