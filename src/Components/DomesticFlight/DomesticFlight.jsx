import React from 'react'
import { FaPlane } from 'react-icons/fa';

const DomesticFlight = () => {
  return (
    
    <div className="flex flex-col items-center  mx-auto p-4 mt-16 pb-10">
      <h1 className="text-4xl font-bold text-left mb-4">Popular Domestic Flights For You</h1>
      <div className="flex space-x-6 p-8 mt-6 mb-4 border border-gray-300 bg-[white] w-[50vw] rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500">
        <div className="flex flex-col items-center ml-6 shadow-lg hover:shadow-gray-500">
          <img src="https://cdn.britannica.com/67/156667-050-62285333/Lotus-Temple-New-Delhi-India.jpg" alt="Boudhanath Stupa in Kathmandu" className="rounded-lg mb-2 w-72" />
          <h2 className="font-bold">Lucknow to NewDelhi</h2>
          <p className="text-gray-600">Sep 10 - Sep 17 · Round-trip</p>
          <FaPlane className="text-blue-500 text-2xl" />
        </div>

        <div className="flex flex-col items-center shadow-lg hover:shadow-gray-500">
          <img src="https://th.bing.com/th/id/R.307c11820e1b40ac5007a7639aef0238?rik=Se2uTtAMIzAHnw&riu=http%3a%2f%2fwww.countryholidaysinnsuites.co.in%2fwp-content%2fuploads%2f2018%2f11%2fiStock-1140128164-e1576152909552.jpg&ehk=00sTUmgNvTHC9EZ43Fl2h1vTkAyty3NxcxGnGxigE4c%3d&risl=&pid=ImgRaw&r=0" alt="Wat Arun in Bangkok" className="rounded-lg mb-2 w-72" />
          <h2 className="font-bold">Lucknow to Dehradun</h2>
          <p className="text-gray-600">Sep 16 - Sep 23 · Round-trip</p>
          <FaPlane className="text-blue-500 text-2xl" />
        </div>

        <div className="flex flex-col items-center shadow-lg hover:shadow-gray-500">
          <img src="https://www.mistay.in/travel-blog/content/images/2021/07/Roam-around-the-top-7-historical-monuments-of-Mumbai-Chhatrapati-Shivaji-Terminus-I-MiStay.jpeg" alt="Aerial view of Malé" className="rounded-lg mb-2 w-72" />
          <h2 className="font-bold">Lucknow to Mumbai</h2>
          <p className="text-gray-600">Sep 11 - Sep 18 · Round-trip</p>
          <FaPlane className="text-blue-500 text-2xl" />
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        See more...
      </button>
    </div>
  )
}

export default DomesticFlight
