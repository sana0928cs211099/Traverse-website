import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';


const Reason = () => {
  return (
    <div className="flex flex-col items-center  mx-auto p-4 pb-10">
    <div className="flex items-center justify-center space-x-6 p-6 mt-6 mb-4 border border-gray-300 bg-[white] w-[55vw] rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500 ">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                <h1 className="text-2xl font-bold mb-4">
                    Why book train tickets with <span className="text-red-600">Voyage</span>?
                </h1>
                <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                        <TableRow title="Authorized & Reliable" description="IRCTC Authorized Partner" />
                        <TableRow title="Ticket Booking" description="Within 2 mins" />
                        <TableRow title="Free Cancellation" description="Get full refund on base fare" />
                        <TableRow title="Trip Alerts" description="Get alerts for your train timings" />
                        <TableRow title="Live Tracking" description="Track your train's live status" />
                        <TableRow title="Customer Support" description="On time support and refund" />
                    </tbody>
                </table>
            </div>
        </div>
        </div>
  )
}

const TableRow = ({ title, description }) => {
    return (
        <tr className="border-b border-gray-300">
            <td className="p-2 font-semibold">
                <FaCheckCircle className="inline-block text-green-500 mr-2" />
                {title}
            </td>
            <td className="p-2">{description}</td>
        </tr>
    );
};

export default Reason
