import React from 'react'
import { FaSmile } from 'react-icons/fa';

const Enquire = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-blue-100">
    <h1 className="text-2xl font-bold mb-8">Railways inquiry just a click away!</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card 
            title="Live Train Status" 
            description="Know the whereabouts of your train easily" 
        />
        <Card 
            title="Coach & Seat Position" 
            description="View coach & seat layout of the train you wish to" 
        />
        <Card 
            title="PNR Status" 
            description="Check PNR Status effortlessly" 
        />
        <Card 
            title="Platform Locator" 
            description="Know the platform for your train" 
        />
    </div>
</div>
  )
}

const Card = ({ title, description }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-60">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="text-blue-500 text-2xl">
                <FaSmile />
            </div>
        </div>
    );
};

export default Enquire
