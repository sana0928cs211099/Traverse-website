import React from 'react'
import { FaCar } from 'react-icons/fa';

const TopCities = () => {
  return (

    <div className="flex flex-col items-center  mx-auto pb-10">
        <div className="flex space-x-6 p-8 mt-6 mb-4 border border-gray-300 bg-[white] w-[62vw] rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500">
    <div className="p-8">
            <h1 className="text-2xl font-bold mb-4 flex items-center">
                <FaCar className="mr-2 text-blue-600" /> Cabs from Top Cities
            </h1>
            <div className="grid grid-cols-5  gap-6 text-blue-600">
                <div>
                    <p>Delhi To Jaipur Cab</p>
                    <p>Delhi To Dehradun Cab</p>
                    <p>Delhi To Haldwani Cab</p>
                    <p>Dehradun To Delhi Cab</p>
                    <p>Mumbai To Goa Cab</p>
                </div>
                <div>
                    <p>Delhi To Agra Cab</p>
                    <p>Delhi To Haridwar Cab</p>
                    <p>Delhi To Manali Cab</p>
                    <p>Bhubaneswar To Puri Cab</p>
                    <p>Ahmedabad To Vadodara Cab</p>
                </div>
                <div>
                    <p>Mumbai To Pune Cab</p>
                    <p>Chandigarh To Shimla Cab</p>
                    <p>Bangalore To Mysore Cab</p>
                    <p>Siliguri To Gangtok Cab</p>
                    <p>Bangalore To Hyderabad Cab</p>
                </div>
                <div>
                    <p>Pune To Mumbai Cab</p>
                    <p>Chennai To Pondicherry Cab</p>
                    <p>Delhi To Rishikesh Cab</p>
                    <p>Delhi To Bareilly Cab</p>
                </div>
                <div>
                    <p>Delhi To Chandigarh Cab</p>
                    <p>Delhi To Mathura Cab</p>
                    <p>Jaipur To Delhi Cab</p>
                    <p>Mysore To Coorg Cab</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TopCities
