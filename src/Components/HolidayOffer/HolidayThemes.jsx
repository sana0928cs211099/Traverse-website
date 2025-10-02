import React, { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const holidayCategories = [
  'Beach Vacations',
  'Weekend Getaways',
  'Mountains Calling',
  'Stay Like Royals',
  'Indian Pilgrimages',
  'Party Destinations',
];

const holidayDestinations = {
  'Beach Vacations': [
    { name: 'Maldives', img: 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/6051084/Maldives-All-180678.jpg' },
    { name: 'Krabi', img: 'https://tse4.mm.bing.net/th/id/OIP.v2jkju5ZWN0udIsk7emn-AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Phuket', img: 'https://a.cdn-hotels.com/gdcs/production91/d1115/0ee6e54f-e111-488a-a67f-a8e8fa72dc34.jpg' },
    { name: 'Langkawi', img: 'https://wallpaperaccess.com/full/3099460.jpg' },
    { name: 'Lonavala', img: 'https://www.abhibus.com/blog/wp-content/uploads/2023/05/10-Best-Tourist-Places-to-Visit-in-Lonavala--1920x1280.jpg' },
    { name: 'Shimla', img: 'https://static2.tripoto.com/media/transfer/img/OgData/1526641633_925003655s_fotor.jpg' },
  ],
  'Weekend Getaways': [
    { name: 'Lonavala', img: 'https://www.abhibus.com/blog/wp-content/uploads/2023/05/10-Best-Tourist-Places-to-Visit-in-Lonavala--1920x1280.jpg' },
    { name: 'Shimla', img: 'https://static2.tripoto.com/media/transfer/img/OgData/1526641633_925003655s_fotor.jpg' },
  ],
  'Mountains Calling': [
    { name: 'Manali', img: 'https://i.redd.it/lbbeb4dhtqx01.jpg' },
    { name: 'Leh Ladakh', img: 'https://th.bing.com/th/id/R.4abc3a4e63481a9cf1692c4297218d2d?rik=mIqd3hDZQ163cQ&riu=http%3a%2f%2fwww.indiantourister.com%2fwp-content%2fuploads%2f2018%2f08%2fLeh.jpg&ehk=e76MCvmJqeLmo6il3YEsCJzghEr3OyEQ4iXrqdi%2fcMU%3d&risl=&pid=ImgRaw&r=0' },
  ],
  'Stay Like Royals': [
    { name: 'Udaipur', img: 'https://www.tripsavvy.com/thmb/saxdtK__W0j14gkQ2tEjjAkEB-Y=/2121x1414/filters:fill(auto,1)/GettyImages-956035876-76efc27d14d24032a3f3d1fcefdc4413.jpg' },
    { name: 'Jaipur', img: 'https://wallpapers.com/images/hd/beautiful-facade-hawa-mahal-jaipur-jyve6dza8i2esdk4.jpg' },
  ],
  'Indian Pilgrimages': [
    { name: 'Varanasi', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdctGSs0VcfNJEl0cxajC0Ao7EVguv6YNqA&s' },
    { name: 'Rishikesh', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQq22qyvQV3yOEo2divldEXf4jVxnGr3wHw&s' },
  ],
  'Party Destinations': [
    { name: 'Goa', img: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-palolem-beach-goa-goa-city-hero?qlt=82&ts=1742182084999' },
    { name: 'Pattaya', img: 'https://autourasia.com/uploads/Travel-Guide-Thailand/pattaya/pattaya-5-days/700-Sanctuary-of-Truth.jpg' },
  ],
};

const HolidayThemes = () => {
  const [selectedCategory, setSelectedCategory] = useState('Beach Vacations');
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className=" shadow-slate-300 border border-gray-300 w-[54vw]  rounded-lg shadow-lg hover:shadow-gray-500 mx-auto p-4">
      {/* Tabs */}
      <div className="flex border-b overflow-x-auto no-scrollbar">
        {holidayCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap px-4 py-2 font-semibold text-sm ${
              selectedCategory === category
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Carousel */}
      <div className="relative mt-4">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 no-scrollbar px-10 p-4 scroll-smooth"
        >
          {holidayDestinations[selectedCategory].map((item, index) => (
            <div
              key={index}
              className="flex-none w-64 h-52 bg-white rounded-lg shadow-md hover:shadow-gray-500 transition-shadow duration-300 cursor-pointer "
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-32 object-cover rounded-t"
              />
              <div className="text-center font-semibold p-2">{item.name}</div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HolidayThemes;
