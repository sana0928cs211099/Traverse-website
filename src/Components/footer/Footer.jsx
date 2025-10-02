import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <div className="bg-white border-gray-300">
         <hr className="w-full h-2  bg-gray-100 border-0 md:min-w-min dark:bg-[#002f4c]"></hr>
      <div className="w-[80vw] mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            <ul className="text-blue-600">
              <li>Domestic Hotels</li>
              <li>International Hotels</li>
              <li>Domestic Flights</li>
              <li>International Flights</li>
              <li>Multi-City Flights</li>
              <li>Couple Friendly Hotels</li>
              <li>Nearby Getaways</li>
              <li>Bus Booking</li>
              <li>Cab Booking</li>
              <li>Airport Cabs Booking</li>
              <li>Outstation Cabs Booking</li>
              <li>Train Booking</li>
              <li>Go Stay</li>
              <li>Gift Cards</li>
              <li>Gift</li>
              <li>Trip Money</li>
              <li>Voyage Advertising Solutions</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <ul className="text-blue-600">
              <li>About Us</li>
              <li>Investor Relations</li>
              <li>Management</li>
              <li>Terms of Services</li>
              <li>User Agreement</li>
              <li>Privacy</li>
              <li>Careers</li>
              <li>YouTube Channel</li>
              <li>Technology@Voyage</li>
              <li>Customer Support</li>
              <li>Facebook Page</li>
              <li>Twitter Handle</li>
              <div className="flex justify-center mt-14">
          <img src="https://th.bing.com/th/id/R.1aaab5cf11fa0e87e7d696be74112ea4?rik=FTjhtyfWyA4pqw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fget-it-on-google-play-png-an-error-occurred-1000.png&ehk=Ut5PLxQ2CsTLEzbWbrH6sYZPGyRQxIq1GswZDtynZY4%3d&risl=&pid=ImgRaw&r=0" alt="Google Play Store" className="mx-2 w-44 h-14 mt-1"/>
          <img src="https://th.bing.com/th/id/OIP._cFfCZtm5NL7ol_GTl3LJwHaCj?rs=1&pid=ImgDetMain" alt="Apple App Store" className="mx-2 w-40 h-16"/>
        </div>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Travel Essentials</h2>
            <ul className="text-blue-600">
              <li>PNR Status</li>
              <li>Offers</li>
              <li>Airline Routes</li>
              <li>Train Running Status</li>
              <li>Popular Bus Routes</li>
              <li>Airport Cabs</li>
              <li>Hotels in India</li>
              <li>Popular Airlines</li>
              <li>Voyage Offers</li>
              <li>International Airports</li>
              <li>City Airline Routes</li>
              <li>International Travel Guide</li>
              <div className="flex justify-center mt-14 space-x-4 pl-44">
          <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-verified-stamp-png.png" alt="Verified by Visa" className="mx-2 h-14 w-20"/>
          <img src="https://th.bing.com/th/id/OIP.YpWJMXcsYVB7i3qugDpWuQHaHb?rs=1&pid=ImgDetMain" alt="MasterCard" className="mx-2 h-14 w-20"/>
          <img src="https://th.bing.com/th/id/OIP.IFATrV6ZrvBdbKIBqaw6MQHaEl?rs=1&pid=ImgDetMain" alt="Visa" className="mx-2 h-14 w-20"/>
          <img src="https://ebizee.com/wp-content/uploads/2020/08/rupay_op.png " alt="RuPay" className="mx-2 h-14 w-32"/>
          <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/visa-2-logo.png" alt="IATA" className="mx-2 h-14 w-28"/>
        </div>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">More Links</h2>
            <ul className="text-blue-600">
              <li>Cheap Flights</li>
              <li>PNR Status</li>
              <li>Live Train Status</li>
              <li>Flight Schedule</li>
              <li>Go Stays</li>
              <li>Popular Bus Cities</li>
              <li>Airports in India</li>
              <li>Popular Hotel Chains</li>
              <li>Hotels Near Me</li>
              <li>COVID Special Trains</li>
              <li>Epass Assistance</li>
              <li>Tatkal Ticket Booking</li>
              <li>Advertise with Us</li>
            </ul>
          </div>
        </div>

        {/*<div className='flex justify-evenly'>
        <div className="flex justify-center mt-8">
          <img src="https://th.bing.com/th/id/R.1aaab5cf11fa0e87e7d696be74112ea4?rik=FTjhtyfWyA4pqw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fget-it-on-google-play-png-an-error-occurred-1000.png&ehk=Ut5PLxQ2CsTLEzbWbrH6sYZPGyRQxIq1GswZDtynZY4%3d&risl=&pid=ImgRaw&r=0" alt="Google Play Store" className="mx-2 w-44 h-14 mt-1"/>
          <img src="https://th.bing.com/th/id/OIP._cFfCZtm5NL7ol_GTl3LJwHaCj?rs=1&pid=ImgDetMain" alt="Apple App Store" className="mx-2 w-40 h-16"/>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-verified-stamp-png.png" alt="Verified by Visa" className="mx-2 h-14 w-20"/>
          <img src="https://th.bing.com/th/id/OIP.YpWJMXcsYVB7i3qugDpWuQHaHb?rs=1&pid=ImgDetMain" alt="MasterCard" className="mx-2 h-14 w-20"/>
          <img src="https://th.bing.com/th/id/OIP.IFATrV6ZrvBdbKIBqaw6MQHaEl?rs=1&pid=ImgDetMain" alt="Visa" className="mx-2 h-14 w-20"/>
          <img src="https://ebizee.com/wp-content/uploads/2020/08/rupay_op.png " alt="RuPay" className="mx-2 h-14 w-32"/>
          <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/visa-2-logo.png" alt="IATA" className="mx-2 h-14 w-28"/>
        </div>
        </div>*/}
      </div>
      <div className="bg-[#a4adff] py-4">
        <div className="w-full flex justify-evenly align-middle space-x-40 items-center gap-64  px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <FaFacebookF className="text-blue-600 text-2xl" />
            <FaTwitter className="text-blue-400 text-2xl" />
            <FaYoutube className="text-red-600 text-2xl" />
            <FaLinkedinIn className="text-blue-700 text-2xl" />
            <FaInstagram className="text-pink-600 text-2xl" />
          </div>
          <div>
          <p className="text-center text-lg font-semibold text-gray-600"> 2024 Voyage (India) Private Limited. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
