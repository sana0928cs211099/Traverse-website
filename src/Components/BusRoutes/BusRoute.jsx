import React from 'react'
import { FaBus } from 'react-icons/fa';


const BusRoute = () => {
  return (
    <div className="flex flex-col items-center  mx-auto p-4 mt-16 pb-10">
    <div className="flex space-x-6 p-8 mt-6 mb-4 border border-gray-300 bg-[white] w-[55vw] rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500">
    <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Popular Bus Routes</h1>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <h2 className="text-lg font-semibold flex items-center">
                        <FaBus className="mr-2" /> Delhi Buses
                    </h2>
                    <p className="text-blue-600">To: Manali, Chandigarh, Jaipur, Dehradun</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold flex items-center">
                        <FaBus className="mr-2" /> Mumbai Buses
                    </h2>
                    <p className="text-blue-600">To: Goa, Pune, Bangalore, Shirdi</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold flex items-center">
                        <FaBus className="mr-2" /> Bangalore Buses
                    </h2>
                    <p className="text-blue-600">To: Mumbai, Hyderabad, Chennai, Goa</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold flex items-center">
                        <FaBus className="mr-2" /> Hyderabad Buses
                    </h2>
                    <p className="text-blue-600">To: Mumbai, Chennai, Bangalore, Goa</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold flex items-center">
                        <FaBus className="mr-2" /> Kolkata Buses
                    </h2>
                    <p className="text-blue-600">To: Digha, Siliguri, Durgapur, Asansol</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold flex items-center">
                        <FaBus className="mr-2" /> Chandigarh Buses
                    </h2>
                    <p className="text-blue-600">To: Manali, Delhi, Shimla, Dehradun</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold flex items-center">
                        <FaBus className="mr-2" /> Chennai Buses
                    </h2>
                    <p className="text-blue-600">To: Coimbatore, Pondicherry, Bangalore, Hyderabad</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold flex items-center">
                        <FaBus className="mr-2" /> Pune Buses
                    </h2>
                    <p className="text-blue-600">To: Mumbai, Shirdi, Bangalore, Goa</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold flex items-center">
                        <FaBus className="mr-2" /> Coimbatore Buses
                    </h2>
                    <p className="text-blue-600">To: Chennai, Ooty, Bangalore, Mysore</p>
                </div>
            </div>
        </div>
        </div>
        </div>
  )
}

export default BusRoute
