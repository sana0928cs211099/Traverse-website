import React from 'react'
import Offer from '../../Components/offer/Offer';
import PopularFl from '../../Components/popularflight/PopularFl';
import Staysp from '../../Components/stays/Staysp';
import PackageH from '../../Components/packageH/PackageH';
import Form from '../../Components/form/Form';

const Home = () => {
  return (
    <>
    <div className=" "> 
    <div className="relative">
      <img src="https://www.design-travel.ch/fileadmin/img/reiseziele/bali/ayana-resort/ayana-resort-pool-beach.jpg" alt="Scenic view of a beach and pool" className="w-full h-[55vh] object-cover" />
      <div className="absolute w-[40vw] h-[14vh] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold">Welcome to <span className="text-red-500">voyage</span></h1>
        <p className="text-3xl mt-6 font-serif">Book you're Travel in a Easiest Way</p>
      </div>
    </div>
     
     <Offer/>
     <br/>
     <PopularFl/>
     <br/>                                    
     <Staysp/>
     <br/>
     <PackageH/>
     <br/>
     <Form/>
      </div>
      </>
  )
}

export default Home
