import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const packages = [
  { name: "Thailand", price: "₹80,000", image: "https://th.bing.com/th/id/OIP.3ZEJ5Y0Vdo1Pux6ZlCmHCwHaFV?rs=1&pid=ImgDetMain" },
  { name: "Bali", price: "70,800", image: "https://i.pinimg.com/originals/28/25/ea/2825ea75d1e15f7c65c488d9145e4353.jpg" },
  { name: "Singapore", price: "₹69,500", image: "https://d2csxpduxe849s.cloudfront.net/media/D9C47D27-CF22-4106-BDD62A07BB6C91E1/F7379F72-F113-4E8E-A3D9010CB02F6DD1/A1BE754F-B6C0-4DFC-B5E0A6AC05177284/Header%203000-singapore_gardens-by-the-bay_marina-bay_supertree-grove_cloud%20-forest_getty.jpg" },
  { name: "Dubai", price: "₹90,700", image: "https://tse2.mm.bing.net/th/id/OIP.wAVAkHPTzu4snb7A2MIETgHaFB?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Vitenam", price: "₹78,700", image: "https://static.independent.co.uk/2023/06/21/14/newFile-1.jpg" },
  { name: "Srilanka", price: "₹54,400", image: "https://tse4.mm.bing.net/th/id/OIP.DWHEToUHeQ3LW_CZ_2LaWQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Paris", price: "₹3,00,400", image: "https://livingnomads.com/wp-content/uploads/2017/10/27/Alexandre-III-Bridge-1-1068x694.jpg" },
  { name: "Tokyo", price: "₹6,00,500", image: "https://www.fodors.com/wp-content/uploads/2020/04/11_UltimateTokyofromHome__HERO_jezael-melgoza-_noSmX8Kgoo-unsplash.jpg" },
  { name: "Bangkok", price: "₹8,00,800", image: "https://lp-cms-production.imgix.net/2021-06/GettyRF_1057166794.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3" },
  { name: "Athens", price: "₹7,00,500", image: "https://tse3.mm.bing.net/th/id/OIP.IdI2FBmFIbZ9qED04wO31gHaEr?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Las Vegas", price: "₹15,700", image: "https://tse2.mm.bing.net/th/id/OIP.z4ydq86goMloDj54tAB3zgHaE5?rs=1&pid=ImgDetMain&o=7&rm=3" },
];

const PackageH = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef(null);
  
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        setScrollPosition(scrollContainerRef.current.scrollLeft - 200);
      }
    };
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        setScrollPosition(scrollContainerRef.current.scrollLeft + 200);
      }
    };

  return (
    <div className="flex flex-col items-center justify-center mx-auto pb-10 p-2 bg-white">
    <div className="bg-white p-4 mt-6 mb-4 pb-28 border border-gray-300 w-[54vw]  rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500 relative">
      <h1 className="text-4xl font-bold mb-4">Top International Destinations</h1>
      <p className="text-xl mb-6">Book now to grab best offers!</p>
      <div className="absolute top-4 right-4 flex space-x-2">
        <button onClick={scrollLeft} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaChevronRight />
        </button>
      </div>
      <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4">
        {packages.map((pkg, index) => (
          <div key={index} className="flex-shrink-0 w-48">
            <div className="relative">
              <img src={pkg.image} alt={pkg.name} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <h2 className="text-white text-lg font-semibold">{pkg.name}</h2>
                <p className="text-white text-sm">Starting at {pkg.price}<br />Per person</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default PackageH
