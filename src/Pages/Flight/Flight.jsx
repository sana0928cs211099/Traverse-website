import React, {useState} from 'react'
import { FaExchangeAlt, FaChevronDown } from 'react-icons/fa'; 
import FOffer from '../../Components/Flightoffer/FOffer';
import PopularFl from '../../Components/popularflight/PopularFl';
import DomesticFlight from '../../Components/DomesticFlight/DomesticFlight';
import FlightRoutes from '../../Components/FlightRoutes/FlightRoutes';

const Flight = () => {

  const [tripType, setTripType] = useState('oneway');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [returnFlight, setReturnFlight] = useState('');
  const [travellers, setTravellers] = useState('1 Adult');

  return (
    <>

  <div className=" "> 
    <div className="relative">
      <img src="https://www.aerotime.aero/images/south_african_airways_airbus_a340_landing_to_jakarta_international_airport.-min-scaled.jpg" alt="Scenic view of a beach and pool" className="w-full h-[55vh] object-cover" />
      <div className="absolute w-[58vw] h-[33vh] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-lg shadow-lg text-center">
      <div className="p-4 relative">
            <div className="flex items-center space-x-4 mb-4">
                <label className="flex items-center space-x-2">
                    <input type="radio" name="trip" value="oneway" checked={tripType === 'oneway'} onChange={() => setTripType('oneway')} />
                    <span className="font-semibold">One-way</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="radio" name="trip" value="roundtrip" checked={tripType === 'roundtrip'} onChange={() => setTripType('roundtrip')} />
                    <span className="font-semibold">Round-trip</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="radio" name="trip" value="multicity" checked={tripType === 'multicity'} onChange={() => setTripType('multicity')} />
                    <span className="font-semibold">Multi-city</span>
                </label>
            </div>

            <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                    <label className="block text-gray-500">From</label>
                    <input type="text" placeholder="Enter city or airport" className="w-full border rounded p-2" value={from} onChange={(e) => setFrom(e.target.value)} />
                </div>
                <div className="flex items-center">
                    <FaExchangeAlt className="text-gray-500" />
                </div>
                <div className="flex-1">
                    <label className="block text-gray-500">To</label>
                    <input type="text" placeholder="Enter city or airport" className="w-full border rounded p-2" value={to} onChange={(e) => setTo(e.target.value)} />
                </div>
                <div className="relative">
                    <label className="block text-gray-500">Departure</label>
                    <input type="text" value="9 Sep'24" className="w-full border rounded p-2" readOnly />
                    <span className="text-gray-500 text-sm">Monday</span>
                    <FaChevronDown className="absolute right-2 top-8 text-gray-500" />
                </div>
                <div>
                    <label className="block text-gray-500">Return</label>
                    <input type="text" placeholder="Click to add a return flight for better discounts" className="w-full border rounded p-2" value={returnFlight} onChange={(e) => setReturnFlight(e.target.value)} />
                </div>
                <div className="relative">
                    <label className="block text-gray-500">Travellers & Class</label>
                    <input type="text" value={travellers} className="w-full border rounded p-2" readOnly />
                    <span className="text-gray-500 text-sm">Economy</span>
                    <FaChevronDown className="absolute right-2 top-8 text-gray-500" />
                </div>
            </div>

            <div className="bg-green-50 p-4 rounded">
                <div className="flex items-center mb-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">MORE BENEFITS</span>
                    <span className="ml-2 font-semibold">Special Fares</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {[
                        { label: 'Student', description: 'Extra Baggage', icon: 'https://placehold.co/24x24' },
                        { label: 'Senior Citizen', description: 'Exclusive Discounts', icon: 'https://placehold.co/24x24' },
                        { label: 'Armed Forces', description: 'Exclusive Discounts', icon: 'https://placehold.co/24x24' },
                        { label: 'Doctors & Nurses', description: 'Exclusive Discounts', icon: ' https://placehold.co/24x24' },
                    ].map((item, index) => (
                        <label key={index} className="flex items-center space-x-2 border p-2 rounded cursor-pointer">
                            <input type="checkbox" />
                            <img src={item.icon} alt={item.label} className="w-6 h-6" />
                            <span>{item.label}<br /><span className="text-sm text-gray-500">{item.description}</span></span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="flex justify-center text-center  items-center  absolute left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <button className="bg-blue-400 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Search Here
            </button>
          </div>
      </div>
      
      </div>
    </div>
    
    <FOffer/>
    <br/>
    <PopularFl/>
    <br />
    <DomesticFlight/>
    <br />
    <FlightRoutes/>

    </div>
    </>
  )
}

export default Flight
