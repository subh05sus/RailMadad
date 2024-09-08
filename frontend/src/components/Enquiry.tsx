/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from 'react';

const Enquiry = () => {
  // State variables to manage form data
  const [type, setType] = useState('');
  const [subType, setSubType] = useState('');
  const [inquiryDate, setInquiryDate] = useState('');
  const [description, setDescription] = useState('');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [volume, setVolume] = useState('');
  const [commodity, setCommodity] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [mobileNo, setMobileNo] = useState('');

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Type:', type);
    console.log('Sub Type:', subType);
    console.log('Inquiry Date:', inquiryDate);
    console.log('Inquiry Description:', description);
    console.log('From Station:', fromStation);
    console.log('To Station:', toStation);
    console.log('Approx Volume:', volume);
    console.log('Commodity:', commodity);
    console.log('File:', file);
    console.log('Mobile No:', mobileNo);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Grievance Detail</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Type *</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="Luggage / Parcels">Luggage / Parcels</option>
            <option value="Booking Issues">Booking Issues</option>
            <option value="Ticketing">Ticketing</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sub Type *</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={subType}
            onChange={(e) => setSubType(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="Parcel Facilitation">Parcel Facilitation</option>
            <option value="Booking Complaint">Booking Complaint</option>
            <option value="Ticketing Complaint">Ticketing Complaint</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Inquiry Date *</label>
          <input
            type="datetime-local"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={inquiryDate}
            onChange={(e) => setInquiryDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Inquiry Description *</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">From Station *</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter the starting station"
            value={fromStation}
            onChange={(e) => setFromStation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">To Station *</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter the destination station"
            value={toStation}
            onChange={(e) => setToStation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Approx Volume</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter the volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Commodity *</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="Fragile Goods">Fragile Goods</option>
            <option value="Perishable Goods">Perishable Goods</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload File</label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mobile No.</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your mobile number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button type="submit" className="bg-pink-600 text-white py-2 px-4 rounded-md">
            Submit
          </button>
          <button type="reset" className="bg-gray-400 text-white py-2 px-4 rounded-md" onClick={() => {
            setType('');
            setSubType('');
            setInquiryDate('');
            setDescription('');
            setFromStation('');
            setToStation('');
            setVolume('');
            setCommodity('');
            setFile(null);
            setMobileNo('');
          }}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Enquiry;
