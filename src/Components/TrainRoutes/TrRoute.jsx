import React from 'react'
import { FaTrain } from 'react-icons/fa';

const TrRoute = () => {
  return (
    <div className="flex flex-col items-center  mx-auto p-4 mt-16 pb-10">
    <div className="flex space-x-6 p-8 mt-6 mb-4 border border-gray-300 bg-[white] w-[55vw] rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500">
    <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Popular Train Routes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <RouteCard 
                    destination="Delhi" 
                    routes="Lucknow, Patna, Kanpur, Prayagraj" 
                />
                <RouteCard 
                    destination="Mumbai" 
                    routes="Ahmedabad, Surat, Delhi, Pune" 
                />
                <RouteCard 
                    destination="Kolkata" 
                    routes="Delhi, Patna, Bangalore, Bhubaneshwar" 
                />
                <RouteCard 
                    destination="Bangalore" 
                    routes="Chennai, Hubli, Delhi, Mumbai" 
                />
                <RouteCard 
                    destination="Lucknow" 
                    routes="Delhi, Mumbai, Varanasi, Gorakhpur" 
                />
                <RouteCard 
                    destination="Patna" 
                    routes="Delhi, Kolkata, Mumbai, Saharsa" 
                />
                <RouteCard 
                    destination="Chennai" 
                    routes="Coimbatore, Madurai, Tiruchirapalli, Bangalore" 
                />
                <RouteCard 
                    destination="Hyderabad" 
                    routes="Visakhapatnam, Mumbai, Delhi, Vijayawada" 
                />
                <RouteCard 
                    destination="Ahmedabad" 
                    routes="Mumbai, Delhi, Surat, Jaipur" 
                />
            </div>
        </div>
    </div>
    </div>
  )
}

const RouteCard = ({ destination, routes }) => {
    return (
        <div >
            <h2 className="font-bold">
                <FaTrain className="inline-block mr-2" />
                Trains to {destination}
            </h2>
            <p>
                Via: <span className="text-blue-600">{routes}</span>
            </p>
        </div>
    );
};

export default TrRoute
