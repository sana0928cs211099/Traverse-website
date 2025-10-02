import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Transport = () => {

    const corporations = [
        { id: 1, code: "KTC", name: "Kadamba Transport Corporation", img: "https://th.bing.com/th/id/OIP.vsPGL99cicGFAqoYPjdN6AAAAA?rs=1&pid=ImgDetMain" },
        { id: 2, code: "SBSTC", name: "South Bengal State Transport Corporation", img: "https://th.bing.com/th/id/OIP._asaHb1mb4Gni80IGnprmwAAAA?rs=1&pid=ImgDetMain" },
        { id: 3, code: "TSRTC", name: "Telangana State Road Transport Corporation", img: "https://th.bing.com/th/id/OIP.9_VaV9PuW14z97ee0IMq4AAAAA?rs=1&pid=ImgDetMain" },
        { id: 4, code: "UPSRTC", name: "Uttar Pradesh State Road Transport Corporation", img: "https://th.bing.com/th/id/OIP.CNhA2w4dabPqalB58UphhAAAAA?rs=1&pid=ImgDetMain" },
        { id: 5, code: "WBTC", name: "West Bengal Transport Corporation", img: "https://th.bing.com/th/id/OIP.r4VCkPwk-WHocaLEp1ubRwAAAA?rs=1&pid=ImgDetMain" },
        { id: 6, code: "NBSTC", name: "North Bengal State Transport Corporation", img: "https://th.bing.com/th/id/OIP.f2VhthSHfv2l9Lk8cDx4twAAAA?rs=1&pid=ImgDetMain" },
        { id: 7, code: "KSRTC (Kerala)", name: "Kerala State Road Transport Corporation", img: "https://cms.uitp.org/wp/wp-content/uploads/2023/08/KSRTC.png" },
        { id: 8, code: "CTU", name: "Chandigarh Transport Undertaking", img: "https://th.bing.com/th/id/OIP.rcXlx0R_8botkcRxL5XisQHaHa?rs=1&pid=ImgDetMain" },
        { id: 9, code: "BMTC", name: "Bangalore Metropolitan Transport Corporation", img: "https://thumbs.dreamstime.com/b/print-205337007.jpg" },
        { id: 10, code: "DTC", name: "Delhi Transport Corporation", img: "https://th.bing.com/th/id/OIP.nUgsq081eUNy0kmHsXnbfAHaFa?rs=1&pid=ImgDetMain" },
        { id: 11, code: "MSRTC", name: "Maharashtra State Road Transport Corporation", img: "https://th.bing.com/th/id/OIP.UpimurCMDhbQlZ5zRHi-BAAAAA?rs=1&pid=ImgDetMain" },
        { id: 12, code: "APSRTC", name: "Andhra Pradesh State Road Transport Corporation", img: "https://th.bing.com/th/id/OIP.paPav0Cp5qnkeMbkLtmQJAAAAA?rs=1&pid=ImgDetMain" }
    ];

    const containerRef = useRef(null);


  return (
    <div className="flex items-center justify-center p-4">
            <div className="flex items-center border rounded-lg shadow-lg p-4 bg-white w-[52vw]">
               
                <div ref={containerRef} className="grid grid-cols-4 gap-4 px-4 ">
                    {corporations.map(corp => (
                        <div key={corp.id} className="flex flex-col h-40 w-56 rounded-lg shadow-lg p-4 bg-white items-center">
                            <img src={corp.img} alt={`${corp.code} logo`} className="w-12 h-12 mb-2" />
                            <span className="font-bold">{corp.code}</span>
                            <span className="text-center text-sm">{corp.name}</span>
                        </div>
                    ))}
                </div>
               
            </div>
        </div>
  )
}

export default Transport
