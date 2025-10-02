import React from 'react'
import { FaTimesCircle, FaCheckCircle, FaHandHoldingUsd } from 'react-icons/fa';

const Trust = () => {
  return (
    <div className="bg-blue-50 p-8">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">1 million+ customers</h1>
                <p className="text-lg">book train tickets with us because</p>
            </div>
            <div className="flex justify-around">
                <BenefitCard 
                    icon={<FaTimesCircle className="text-blue-500 text-3xl" />} 
                    title="No Cancellation Fee" 
                    description="You can opt for free cancellation & get full refund." 
                    linkText="Learn more about cancellation" 
                />
                <BenefitCard 
                    icon={<FaCheckCircle className="text-blue-500 text-3xl" />} 
                    title="goConfirmed Trip" 
                    description="Guaranteed confirmed tickets or we give you 2x refund." 
                    linkText="Learn more about goConfirmed" 
                />
                <BenefitCard 
                    icon={<FaHandHoldingUsd className="text-blue-500 text-3xl" />} 
                    title="No PG Fee via UPI" 
                    description="Zero Payment Gateway Charges via UPI mode" 
                    linkText="Learn more about UPI" 
                />
            </div>
        </div>
  )
}

const BenefitCard = ({ icon, title, description, linkText }) => {
    return (
        <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                {icon}
            </div>
            <h2 className="font-bold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <a href="#" className="text-blue-500">{linkText}</a>
        </div>
    );
};

export default Trust
