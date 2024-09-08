import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

const suggestions: Option[] = [
  { value: 'new-train', label: 'New Train' },
  { value: 'new-stoppage', label: 'New Stoppage' },
  { value: 'passenger-amenities', label: 'Passenger Amenities' },
  { value: 'freight-services', label: 'Freight Services' },
  { value: 'high-speed-rail', label: 'High Speed Rail Travel' },
  { value: 'infusing-technology', label: 'Infusing Technology' },
  { value: 'reducing-carbon', label: 'Reducing Carbon Footprint' },
  { value: 'others', label: 'Others' },
];

const Suggestion: React.FC = () => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [fromStation, setFromStation] = useState<string>('');
  const [toStation, setToStation] = useState<string>('');

  const handleSuggestionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSuggestion(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      suggestion: selectedSuggestion,
      description,
      fromStation,
      toStation,
    };
    console.log('Submitted Data:', formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Suggestions Detail</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Suggestion <span className="text-red-500">*</span></label>
          <select
            value={selectedSuggestion}
            onChange={handleSuggestionChange}
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
          >
            <option value="">--Select--</option>
            {suggestions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {selectedSuggestion && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Description <span className="text-red-500">*</span></label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your suggestion description"
                className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {(selectedSuggestion === 'new-train' || selectedSuggestion === 'new-stoppage') && (
              <div className="flex justify-between gap-4 mb-4">
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">From Station <span className="text-red-500">*</span></label>
                  <input
                    value={fromStation}
                    onChange={(e) => setFromStation(e.target.value)}
                    placeholder="Select From Station"
                    className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">To Station <span className="text-red-500">*</span></label>
                  <input
                    value={toStation}
                    onChange={(e) => setToStation(e.target.value)}
                    placeholder="Select To Station"
                    className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
            )}
          </>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={() => {
              setSelectedSuggestion('');
              setDescription('');
              setFromStation('');
              setToStation('');
            }}
            className="ml-4 px-4 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Suggestion;
