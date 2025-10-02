import React from 'react';
import ReactDOM from 'react-dom';
import { FaStar } from 'react-icons/fa'; // Importing React Icons

const deals = [
    {
        id: 1,
        image: "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_srplist/v3241105382/Hotel/00210444/download_eDsPrK.jpg",
        title: "Townhouse Shahdara Near Yamuna Sports Complex",
        location: "New Delhi, India",
        rating: 9.3,
        reviews: 28,
        description: "Wonderful",
        originalPrice: "₹ 4,066",
        discountedPrice: "₹ 2,399",
        nights: 2,
        badge: "Genius"
    },
    {
        id: 2,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f5/1d/fa/getlstd-property-photo.jpg?w=1000&h=-1&s=1",
        title: "FabHotel PoloVictory Palace",
        location: "Jaipur, India",
        rating: 7.5,
        reviews: 24,
        description: "Good",
        originalPrice: "₹ 3,730",
        discountedPrice: "₹ 2,014",
        nights: 2,
        badge: "Getaway Deal"
    },
    {
        id: 3,
        image: "https://cf.bstatic.com/xdata/images/hotel/max500/434322091.jpg?k=b14eef4dbc46856b80ec5de179980b1e56d353404b69cce10bb485a3810f6b60&o=&hp=1",
        title: "FabHotel Saumendra",
        location: "Varanasi, India",
        rating: 8.4,
        reviews: 362,
        description: "Very Good",
        originalPrice: "₹ 5,247",
        discountedPrice: "₹ 2,817",
        nights: 2,
        badge: "Getaway Deal"
    },
    {
        id: 4,
        image: "https://th.bing.com/th/id/OIP.eeiwpKjXmF034e1gYQXbnAHaE8?rs=1&pid=ImgDetMain",
        title: "Super Townhouse Rohini Sector 23",
        location: "New Delhi, India",
        rating: 8.4,
        reviews: 59,
        description: "Very Good",
        originalPrice: "₹ 3,672",
        discountedPrice: "₹ 2,167",
        nights: 2,
        badge: "Genius"
    },
    {
        id: 5,
        image: "https://pix6.agoda.net/hotelImages/121/12125/12125_13121917030017937179.jpg?s=1100x825",
        title: "Hotel Sunshine",
        location: "Mumbai, India",
        rating: 8.0,
        reviews: 45,
        description: "Very Good",
        originalPrice: "₹ 4,500",
        discountedPrice: "₹ 2,500",
        nights: 2,
        badge: "Genius"
    },
    {
        id: 6,
        image: "https://th.bing.com/th/id/OIP.uwBwmi78At7BuVADEMo7pAAAAA?rs=1&pid=ImgDetMain",
        title: "Hotel Blue Moon",
        location: "Chennai, India",
        rating: 7.8,
        reviews: 30,
        description: "Good",
        originalPrice: "₹ 3,800",
        discountedPrice: "₹ 2,200",
        nights: 2,
        badge: "Getaway Deal"
    },
    {
        id: 7,
        image: "https://th.bing.com/th/id/OIP.W-d6iDynuDADO3wFSwWApwHaEH?rs=1&pid=ImgDetMain",
        title: "Hotel Green Park",
        location: "Kolkata, India",
        rating: 8.5,
        reviews: 50,
        description: "Very Good",
        originalPrice: "₹ 5,000",
        discountedPrice: "₹ 2,900",
        nights: 2,
        badge: "Getaway Deal"
    },
    {
        id: 8,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/64/a6/a8/red-rose-hotel.jpg?w=700&h=-1&s=1",
        title: "Hotel Red Rose",
        location: "Bangalore, India",
        rating: 8.2,
        reviews: 40,
        description: "Very Good",
        originalPrice: "₹ 4,200",
        discountedPrice: "₹ 2,300",
        nights: 2,
        badge: "Genius"
    }
];

const Deal = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center mt-16 pb-10">
            <h1 className="text-4xl font-bold text-center mb-5">Deals for the Weekend</h1>
            <div className="flex space-x-4 overflow-x-auto no-scrollbar p-8 mt-6 mb-4 border border-gray-300 bg-[white] w-[53vw] rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500">
                {deals.map(deal => (
                    <div key={deal.id} className="bg-white rounded-lg shadow-md w-64 flex-shrink-0">
                        <img src={deal.image} alt={`Image of ${deal.title}`} className="rounded-t-lg w-full h-40 object-cover" />
                        <div className="p-4">
                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">{deal.badge}</span>
                            <h2 className="text-lg font-bold mt-2">{deal.title}</h2>
                            <p className="text-gray-600">{deal.location}</p>
                            <div className="flex items-center mt-2">
                                <FaStar className="text-yellow-500" /> {/* Using React Icons */}
                                <span className="ml-2 text-gray-600">{deal.rating} · {deal.reviews} reviews</span>
                            </div>
                            <div className="mt-2">
                                <span className="text-gray-600">{deal.nights} nights</span>
                                <span className="line-through text-gray-400 ml-2">{deal.originalPrice}</span>
                                <span className="text-red-500 font-bold ml-2">{deal.discountedPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Deal

// CSS styles for no scrollbar
const styles = `
.no-scrollbar::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

