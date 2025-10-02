import React from 'react'
import { FaExchangeAlt } from 'react-icons/fa';
import TOffer from '../../Components/TrainOffers/TOffers';
import Enquire from '../../Components/RailEQ/Enquire';
import TrRoute from '../../Components/TrainRoutes/TrRoute';
import Reason from '../../Components/Trainreson/Reason';
import Trust from '../../Components/Trainreson/Trust';

const Train = () => {
  return (
    <>
    <div className="relative">
      <img src="https://th.bing.com/th/id/R.23e7e6c33e8a62adadfa970f4dbe1a15?rik=B74AgbS8nZxS%2fg&riu=http%3a%2f%2fi1.wp.com%2f8list.ph%2fwp-content%2fuploads%2f2016%2f07%2fTRAINRIDES_P8.jpg&ehk=YzTlDOe6bx8CkESKFZm6CFmVjDZBfMSwI1wdTLHFQg4%3d&risl=&pid=ImgRaw&r=0" className="w-full h-[55vh] object-cover" />
            <div className="bg-white p-12 absolute w-[58vw] h-[25vh] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-lg shadow-lg text-center">
                <div className="flex justify-around mb-4">
                    <label className="flex items-center">
                        <input type="radio" name="option" className="mr-2" defaultChecked />
                        <span className="text-blue-600 font-semibold">Book Train tickets</span>
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="option" className="mr-2" />
                        <span>Check PNR Status</span>
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="option" className="mr-2" />
                        <span>Live Trains Status</span>
                    </label>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col w-1/3">
                        <label className="mb-1">From</label>
                        <input type="text" placeholder="Enter Source Name" className="border border-zinc-500 p-2 rounded" />
                    </div>
                    <div className="flex items-center justify-center w-1/12">
                        <FaExchangeAlt className="text-xl" />
                    </div>
                    <div className="flex flex-col w-1/3 mr-3">
                        <label className="mb-1">To</label>
                        <input type="text" placeholder="Enter Destination Name" className="border p-2 border-zinc-500 rounded" />
                    </div>
                    <div className="flex flex-col w-1/4">
                        <label className="mb-1">Departure</label>
                        <input type="text" placeholder="10 Sep'24" className="border p-2 border-zinc-500 rounded" />
                        
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <span className="bg-green-500 text-white px-2 py-1 rounded mr-2">TATKAL OPEN</span>
                        <label className="flex items-center">
                            <input type="radio" name="day" className="mr-2" defaultChecked />
                            <span>Today</span>
                        </label>
                    </div>
                    <div className="flex items-center">
                        <span className="bg-green-500 text-white px-2 py-1 rounded mr-2">TATKAL OPEN</span>
                        <label className="flex items-center">
                            <input type="radio" name="day" className="mr-2" />
                            <span>Tomorrow</span>
                        </label>
                    </div>
                    <div className="flex items-center">
                        <span className="bg-green-500 text-white px-2 py-1 rounded mr-2">TATKAL OPEN</span>
                        <label className="flex items-center">
                            <input type="radio" name="day" className="mr-2" />
                            <span>Day After Tomorrow</span>
                        </label>
                    </div>
                </div>

                <div className="flex justify-center text-center  items-center  absolute left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <button className="bg-blue-400 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Search Here
            </button>
          </div>
        </div>
      
      </div>

      <TOffer />
      <br />
      <Enquire />
      <br />
      <TrRoute />
      <br />
      <Reason />
      <br />
      <Trust />

    </>
  )
}

export default Train
