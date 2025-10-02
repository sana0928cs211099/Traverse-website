import React from 'react'
import { FaHeart } from 'react-icons/fa';

const properties = [
    {
      image: "https://cf.bstatic.com/xdata/images/hotel/max300/239946673.jpg?k=cdbe4435a55217f41c2d20f6009707e2c61705c70e150e94f0ea35554636077c&o=&hp=1",
      title: "Waldschenke Stendenitz Übernachten im Wald am See",
      location: "Germany, Neuruppin",
      rating: "8.7",
      reviews: "Excellent - 387 reviews"
    },
    {
      image: "https://th.bing.com/th/id/OIP.GXLSSWsMTQ0ST6lS-3sTmQHaE9?rs=1&pid=ImgDetMain",
      title: "Harbor View",
      location: "United Kingdom, Isle Of Skye",
      rating: "9.0",
      reviews: "Exceptional - 142 reviews"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/4e/2e/39/caption.jpg?w=1200&h=-1&s=1",
      title: "Casa Rural La Marquesa - Cuenca",
      location: "Spain, Valera de Abajo",
      rating: "9.5",
      reviews: "Exceptional - 62 reviews"
    },
    {
      image: "https://th.bing.com/th/id/OIP._32dYsLPOtuCXzQxiUl05QHaE8?rs=1&pid=ImgDetMain",
      title: "Domki ROSSE niedaleko plaży",
      location: "Poland, Jastrzębia Góra",
      rating: "9.8",
      reviews: "Exceptional - 139 reviews"
    }
  ];
  
  function PropertyCard({ property }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
        <div className="relative">
          <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
          <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
            <FaHeart />
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{property.title}</h3>
          <p className="text-gray-500">{property.location}</p>
          <div className="flex items-center mt-2">
            <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">{property.rating}</span>
            <span className="ml-2 text-gray-500 text-sm">{property.reviews}</span>
          </div>
        </div>
      </div>
    );
  }

const Staysp = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Stay at our top unique properties</h1>
      <div className="flex space-x-6 p-8 mt-6 mb-4 border border-gray-300 bg-[white] w-[59vw] rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500">
      <div className="flex space-x-4">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
      </div>
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md">
      <a href="/stay" >See more... </a>
      </button>
    </div>
  )
}

export default Staysp
