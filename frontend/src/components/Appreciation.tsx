/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Appreciation = () => {
  // State variables to manage form data
  const [mobileNo, setMobileNo] = useState('');
  const [mode, setMode] = useState('');
  const [trainOrStation, setTrainOrStation] = useState('');
  const [positiveAspects, setPositiveAspects] = useState('');
  const [experience, setExperience] = useState('');
  const [rating, setRating] = useState(0);

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Mobile No:', mobileNo);
    console.log('Mode:', mode);
    console.log('Train No./Station Name:', trainOrStation);
    console.log('Positive Aspects:', positiveAspects);
    console.log('Experience:', experience);
    console.log('Rating:', rating);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Share Your Rail Experience</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-4">
          <label className="block text-gray-700">Mode *</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="Train">Train</option>
            <option value="Metro">Metro</option>
            <option value="Bus">Bus</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Train No./Station Name *</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter train number or station name"
            value={trainOrStation}
            onChange={(e) => setTrainOrStation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Positive Aspects *</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={positiveAspects}
            onChange={(e) => setPositiveAspects(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="Cleanliness">Cleanliness</option>
            <option value="Punctuality">Punctuality</option>
            <option value="Service">Service</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Write Your Experience *</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Share your experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Feedback *</label>
          <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                size={24}
                className="cursor-pointer"
                color={rating > index ? '#FFD700' : '#E5E7EB'}
                onClick={() => setRating(index + 1)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button type="submit" className="bg-pink-600 text-white py-2 px-4 rounded-md">
            Submit
          </button>
          <button type="reset" className="bg-gray-400 text-white py-2 px-4 rounded-md" onClick={() => {
            setMobileNo('');
            setMode('');
            setTrainOrStation('');
            setPositiveAspects('');
            setExperience('');
            setRating(0);
          }}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appreciation;
