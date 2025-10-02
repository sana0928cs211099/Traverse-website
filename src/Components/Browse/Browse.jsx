import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Browse = () => {


    const properties = [
        { title: "Hotels", img: "https://floridakeys.com/img/listings/6554-1.jpg", alt: "Hotel room with a large bed and modern decor" },
        { title: "Apartments", img: "https://www.apartments.com/blog/sites/default/files/styles/large/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=wuPUc6GK", alt: "Modern apartment kitchen with dining table" },
        { title: "Resorts", img: "https://th.bing.com/th/id/OIP._q6WfRwgfZrL0Mju39vR4wHaFj?rs=1&pid=ImgDetMain", alt: "Resort room with a large bed and seating area" },
        { title: "Villas", img: "https://th.bing.com/th/id/R.8a3a1c5c80bd3720d3255973d6246e85?rik=GtOFR1eDQ%2bkqVA&riu=http%3a%2f%2fwww.hauteresidence.com%2fwp-content%2fuploads%2f2015%2f07%2f808f6b332548d26e8985af0a18219456.jpg&ehk=TL%2btsG4nky04SUGU%2bfG1CxneLgpuIH5biRMk0bppj9A%3d&risl=&pid=ImgRaw&r=0", alt: "Luxury villa with a private pool" },
        { title: "Cabins", img: "https://th.bing.com/th/id/OIP.h41ystQDOB97FkvXYzpS8gAAAA?rs=1&pid=ImgDetMain", alt: "Cozy cabin in the woods" },
        { title: "Cottages", img: "https://th.bing.com/th/id/R.2fdbe9016ecf4ab2715b98e1df33fa5d?rik=QPXQkMAaApMD2Q&riu=http%3a%2f%2fwww.tournorfolk.co.uk%2fhovetonhall%2fspidergardenhouse2.jpg&ehk=fwpleGCTxgKRcaNbjnzDz1PAXLEE5Jgiyd%2fBRyKlZ8I%3d&risl=&pid=ImgRaw&r=0", alt: "Charming cottage with a garden" }
    ];

    const [startIndex, setStartIndex] = useState(0);

    const handlePrevClick = () => {
        setStartIndex((prevIndex) => (prevIndex - 3 + properties.length) % properties.length);
    };

    const handleNextClick = () => {
        setStartIndex((prevIndex) => (prevIndex + 3) % properties.length);
    };

    const visibleProperties = properties.slice(startIndex, startIndex + 3);


  return (
    <div className="flex flex-col items-center mt-24">
            <h1 className="text-4xl font-bold text-center mb-8">Browse by property type</h1>
            <div className="flex items-center">
                <button className="text-2xl p-2" onClick={handlePrevClick}>
                    <FaChevronLeft />
                </button>
                <div className="flex space-x-6">
                    {visibleProperties.map((property, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={property.img} alt={property.alt} className="rounded-lg w-72 h-48 object-cover" />
                            <p className="mt-2 font-semibold">{property.title}</p>
                        </div>
                    ))}
                </div>
                <button className="text-2xl p-2" onClick={handleNextClick}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
  )
}

export default Browse
