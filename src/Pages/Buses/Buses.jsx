import React from 'react'
import { FaMapMarkerAlt, FaSyncAlt } from 'react-icons/fa';
import { FaUsers, FaBed } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa'; 
import BOffer from '../../Components/BusOffers/BOffers';
import Transport from '../../Components/BusOffers/Transport';
import BusRoute from '../../Components/BusRoutes/BusRoute';
import BusOperators from '../../Components/BusRoutes/BusOperators';

const Buses = () => {
  return (
    <>
    <div className="relative">
      <img src="https://www.cambridgeindependent.co.uk/_media/img/6LHTW74HUQUUDTXSCAWF.jpg" className="w-full h-[55vh] object-cover" />
      
      <div className="absolute w-[34vw] h-auto bottom-0 left-96 pr-20 transform -translate-x-1/3 translate-y-1/2 bg-white p-6 border-blue-400 border-8 rounded-xl shadow-lg">
            <div className="space-y-4 ">
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm mb-2">FROM</label>
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder="Enter Source" 
                            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-gray-400 text-lg text-gray-700" 
                        />
                        <FaMapMarkerAlt className="text-gray-500 ml-2" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm mb-2">TO</label>
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder="Enter Destination" 
                            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-gray-400 text-lg text-gray-700" 
                        />
                        <FaMapMarkerAlt className="text-gray-500 ml-2" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm mb-2">Travel Date</label>
                    <div className="flex items-center">
                        <span className="text-lg font-semibold text-gray-700">Sep 10, 2024</span>
                        <div className="ml-auto flex space-x-2">
                            <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg border border-blue-600">
                                Today, Tue 10 Sep
                            </button>
                            <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">
                                Tomorrow
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="text-gray-500">
                        <FaSyncAlt />
                    </button>
                </div>
            </div>
        </div>
     
      {/* Search Button */}
        <div className="absolute left-[37%] ml-16 bottom-[-2%]">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
            Search Here
          </button>
    </div>
 </div>
 
    <div className="bg-purple-500 p-6 rounded-xl mr-32 mt-16 mx-auto shadow-lg border border-gray-300 max-w-[30vw]">
    
            <div className="flex">
                <div className="mr-4">
                    <img 
                        src="https://media.wired.com/photos/5cf832279c2a7cd3975976ca/master/w_2560%2Cc_limit/Transpo_XcelsiorChargeCharging_TA.jpg" 
                        alt="People enjoying a vacation" 
                        className="rounded w-48 h-20" 
                    />
                </div>
                <div>
                    <p className="font-bold">Travel with Primo Buses</p>
                    <p>Want to run errands? Have multiple stops? Don’t worry, our Hourly Rentals have got you covered with up to ₹200 OFF using code GORENTALS</p>
                   
                </div>
            </div>
    </div>

    <BOffer />
    <br/>
    <Transport />
    <br/>
    <BusRoute />
    <br/>
    <BusOperators />

    </>
  )
}

export default Buses
