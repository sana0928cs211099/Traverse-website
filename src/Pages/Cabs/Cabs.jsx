import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa'; 
import COffer from '../../Components/CarOffers/COffers';
import Top from '../../Components/CabRoutes/Top';
import TopCities from '../../Components/CabRoutes/TopCities';
import TopAir from '../../Components/CabRoutes/TopAir';


const Cabs = () => {
  return (
    <>

<div className="relative">
      <img src="https://th.bing.com/th/id/R.8a70bd22965733fa8aa21577a9fddfb2?rik=u1dNCcGGpplc6Q&riu=http%3a%2f%2fcdn4.webcreations907.com%2fninezeroseven%2ftaxi%2fwp-content%2fuploads%2fsites%2f23%2f2015%2f11%2ftaxi-cabs-2.jpg&ehk=2Cv2vjLceN%2fcQeTK6w4s7SqsrJ%2bj%2b7pZcSbtCXbNOKk%3d&risl=&pid=ImgRaw&r=0" alt="Scenic view of a beach and pool" className="w-full h-[55vh] object-cover" />
      <div className="absolute w-[34vw] h-auto bottom-0 left-96 pr-20 transform -translate-x-1/3 translate-y-1/2 bg-white p-6 border-blue-400 border-8 rounded-xl shadow-lg">
      <div className="space-y-4">
            <div className="flex space-x-4 mb-4">
                <label className="flex items-center">
                    <input type="radio" name="tripType" className="form-radio text-blue-600" defaultChecked />
                    <span className="ml-2 text-blue-600 font-semibold">Outstation One-way</span>
                </label>
                <label className="flex items-center">
                    <input type="radio" name="tripType" className="form-radio" />
                    <span className="ml-2">Outstation Round trip</span>
                </label>
                <label className="flex items-center">
                    <input type="radio" name="tripType" className="form-radio" />
                    <span className="ml-2">Airport transfer</span>
                </label>
                <label className="flex items-center">
                    <input type="radio" name="tripType" className="form-radio" />
                    <span className="ml-2">Hourly Rental</span>
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">From</label>
                <input type="text" placeholder="Enter Pickup location" className="w-full mt-1 p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">To</label>
                <input type="text" placeholder="Enter Drop location" className="w-full mt-1 p-2 border rounded" />
            </div>
            <div className="flex items-center mb-4">
                <button className="flex items-center text-blue-600">
                    <FaPlus className="mr-1" /> + Add Stops
                </button>
                <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">New</span>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <label className="block text-gray-700">Pickup Date</label>
                    <span className="font-semibold">11 Sep' 24</span>
                </div>
                <div>
                    <label className="block text-gray-700">Pickup Time</label>
                    <span className="font-semibold">10:00 AM</span>
                </div>
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

    <div className="bg-white p-6 rounded-xl mr-32 mt-16 mx-auto shadow-lg border border-gray-300 max-w-[30vw]">
    
            <div className="flex">
                <div className="mr-4">
                    <img 
                        src="https://th.bing.com/th/id/OIP.2unAur3isClWZ8Sp2YT6YQHaE8?rs=1&pid=ImgDetMain" 
                        alt="People enjoying a vacation" 
                        className="rounded" 
                    />
                </div>
                <div>
                    <p className="font-bold">Introducing Hourly Rentals</p>
                    <p>Want to run errands? Have multiple stops? Don’t worry, our Hourly Rentals have got you covered with up to ₹200 OFF using code GORENTALS</p>
                   
                </div>
            </div>
    </div>


    <COffer />
    <br />
    <Top />
    <br />
    <TopCities />
    <br />
    <TopAir/>
      
    </>
  )
}

export default Cabs
