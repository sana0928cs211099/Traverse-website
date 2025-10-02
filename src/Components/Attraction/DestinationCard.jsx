import React from "react";

const destinations = [
  { name: "Mumbai", img: "https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg", desc: "Cosmopolitan and financial capital of India" },
  { name: "Ho Chi Minh", img: "https://www.tripsavvy.com/thmb/BHG9Xa_H59w8uNR51eldY4jlfP8=/4096x2730/filters:fill(auto,1)/ho-chi-minh-city-at-night-22c7df816ce4493eb0e86cf54fe03309.jpg", desc: "Vietnam’s vibrant city" },
  { name: "Paris", img: "https://i.pinimg.com/originals/25/50/e9/2550e991b9f112a841f46722364ac4e8.jpg", desc: "The City of Light" },
  { name: "Krabi", img: "https://a.cdn-hotels.com/gdcs/production82/d183/f8382092-5689-463d-b693-42331d2eaa66.jpg?impolicy=fcrop&w=1600&h=1066&q=medium", desc: "Thailand’s vacation featuring islands and beaches" },
  { name: "Maldives", img: "https://th.bing.com/th/id/OIP.Haz8Tk6qR_zmGkYFz9EdWwHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Tropical paradise with luxury resorts" },
  { name: "Phuket", img: "https://www.nothingfamiliar.com/wp-content/uploads/2022/01/Old-Town-in-Phuket-Thailand.jpg", desc: "A famous beach destination in Thailand" },
  { name: "Bali", img: "https://tse2.mm.bing.net/th/id/OIP.pioranM1arH6_SqdrSFWLAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Island of Gods" },
  { name: "Hyderabad", img: "https://tse2.mm.bing.net/th/id/OIP.XsxoGd7QvHC3vdgNJMD47QHaF_?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Historic city with rich culture" },
  { name: "Shimla", img: "https://th.bing.com/th/id/OIP.PlNQ75jWkAaNHVY5i4Q9nQHaDj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Queen of Hills" },
  { name: "Udaipur", img: "https://th.bing.com/th/id/R.db3dc153dbfb17d86d1f08ef5b1e1ee4?rik=2jdqybuAeillVw&riu=http%3a%2f%2fcdn.theculturetrip.com%2fwp-content%2fuploads%2f2016%2f05%2fcover-image.jpg&ehk=%2fNBdK9iXIyEf1wdENY7VBOxdt9Ojcag4CwnIU6JMo2I%3d&risl=&pid=ImgRaw&r=0", desc: "Romantic and royal destination city" },
  { name: "Langkawi", img: "https://4.bp.blogspot.com/-CvTRDiVvc3M/WUjVXbBNm2I/AAAAAAAAMl8/yUlhpbHbA0YQAzdyPVA5Ho0a3SUobLfvACLcBGAs/s1600/Langkawi-1.jpg", desc: "Famous island boasting scenic blue waters" },
  { name: "Ooty", img: "https://static.toiimg.com/photo/msid-65754989,width-96,height-65.cms", desc: "Hill station in Tamil Nadu" },
  { name: "Dubai", img: "https://photos.tui.fr/vnf/Produits/ARECTARE_dubai-mall-circuits-emirats-arabe-unis-tui.jpg", desc: "Luxury shopping and modern architecture" },
  { name: "Manali", img: "https://i.redd.it/lbbeb4dhtqx01.jpg", desc: "Snow-capped mountains and adventure vibes" },
  { name: "Amsterdam", img: "https://canalsofamsterdam.com/wp-content/uploads/2022/07/Canals-of-Amsterdam-scaled.jpg", desc: "Beautiful canals and historic charm" },
  { name: "Mysore", img: "https://img.locationscout.net/images/2017-05/mysore-palace-india_l.jpeg", desc: "City of Palaces and Mysore Dasara festival" },
  { name: "Munnar", img: "https://www.bontravelindia.com/wp-content/uploads/2022/11/Munnar-Tourism-Kerala-1000x565.jpg", desc: "Lush green tea plantations" },
  { name: "Singapore", img: "https://tse1.mm.bing.net/th/id/OIP.UpafA49wiHKR6AuemCWx-QHaFD?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Modern city-state with futuristic vibe" },
  { name: "Amritsar", img: "https://tse1.mm.bing.net/th/id/OIP.CjKdC0FdKpSLnymZFKpM7wHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Famous for Golden Temple" },
  { name: "Bengaluru", img: "https://www.agoda.com/wp-content/uploads/2024/01/Featured-image-The-Vidhana-Soudha-in-Bangalore.jpg", desc: "India’s IT hub" },
  { name: " Leh Ladakh", img: "https://th.bing.com/th/id/R.4abc3a4e63481a9cf1692c4297218d2d?rik=mIqd3hDZQ163cQ&riu=http%3a%2f%2fwww.indiantourister.com%2fwp-content%2fuploads%2f2018%2f08%2fLeh.jpg&ehk=e76MCvmJqeLmo6il3YEsCJzghEr3OyEQ4iXrqdi%2fcMU%3d&risl=&pid=ImgRaw&r=0", desc: "India’s Snow beauty spot " },

];

const DestinationCard = ({ name, img, desc }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
    <img src={img} alt={name} className="w-full h-48 object-cover" />
    <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 flex flex-col justify-end p-3 text-white">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  </div>
);

export default function PopularDestinations() {
  return (
    <div className="px-6 py-10 max-w-7xl shadow-slate-300 border border-gray-300 w-[54vw]  rounded-lg shadow-lg hover:shadow-gray-500 mx-auto p-4 mb-7">
      <h2 className="text-2xl font-bold mb-2">Popular Destinations</h2>
      <p className="text-gray-600 mb-6">We have selected some best locations around the world for you.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </div>
  );
}
