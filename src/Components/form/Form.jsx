import React from 'react'
import { FaChevronDown } from 'react-icons/fa';

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto pb-10 p-2 bg-white">
    <form className="bg-[url('https://media.cntraveler.com/photos/598339c9b7a86962e8e27c5d/master/pass/Paris_GettyImages-601763009.jpg')] bg-cover bg-no-repeat bg-opacity-20 p-8 rounded-lg shadow-lg border border-blue-500 w-[40vw]">
      <div className="mb-4 mt-4">
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Default language</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-blue-900 font-bold mb-2" htmlFor="name">Name</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
      </div>
      <div className="mb-4">
        <label className="block text-blue-900 font-bold mb-2" htmlFor="phone">Phone Number</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone Number" />
      </div>
      <div className="mb-4">
        <label className="block text-blue-900 font-bold mb-2" htmlFor="email">Email</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
      </div>
      <div className="mb-4">
        <label className="block text-blue-900 font-bold mb-2" htmlFor="message">Message</label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message" rows="4"></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Ask Your Enquiry
        </button>
      </div>
    </form>
    </div>
  )
}

export default Form
