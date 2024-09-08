/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const StationGrievance = () => {
    const [formData, setFormData] = useState({
        grievanceType: '',
        subType: '',
        incidentDate: '',
        grievanceDescription: '',
        stationName: '',
        pnrUtsNo: '',
        uploadFile: '',
        mobileNo: ''
    });

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e:any) => {
        setFormData({
            ...formData,
            uploadFile: e.target.files[0]
        });
    };

    const handleSubmit = () => {
        // Implement submission logic here
        console.log('Form data:', formData);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#75002b] mb-4">Grievance Detail</h2>

            <div className="grid grid-cols-2 gap-4">
                {/* Grievance Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Type <span className="text-red-500">*</span></label>
                    <select
                        name="grievanceType"
                        value={formData.grievanceType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    >
                        <option value="">--Select Type--</option>
                        <option value="Medical Assistance">Medical Assistance</option>
                        {/* Add other options here */}
                    </select>
                </div>

                {/* Sub Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Sub Type <span className="text-red-500">*</span></label>
                    <select
                        name="subType"
                        value={formData.subType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    >
                        <option value="">--Select Sub Type--</option>
                        <option value="Medical Assistance">Medical Assistance</option>
                        {/* Add other options here */}
                    </select>
                </div>

                {/* Incident Date */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Incident Date <span className="text-red-500">*</span></label>
                    <div className="relative mt-1">
                        <input
                            type="datetime-local"
                            name="incidentDate"
                            value={formData.incidentDate}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <FaCalendarAlt className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                    </div>
                </div>

                {/* Grievance Description */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Grievance Description <span className="text-red-500">*</span></label>
                    <textarea
                        name="grievanceDescription"
                        value={formData.grievanceDescription}
                        onChange={handleInputChange}
                        placeholder="Describe your grievance"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    />
                </div>

                {/* Station Name */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Station Name <span className="text-red-500">*</span></label>
                    <input
                        name="stationName"
                        value={formData.stationName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    >
                        {/* <option value="">Select Station</option> */}
                        {/* Populate with station names */}
                    </input>
                </div>

                {/* PNR/UTS No. */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">PNR/UTS No. <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="pnrUtsNo"
                        value={formData.pnrUtsNo}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    />
                </div>

                {/* Upload File */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Upload File (Optional)</label>
                    <input
                        type="file"
                        name="uploadFile"
                        onChange={handleFileChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    />
                </div>

                {/* Mobile No */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Mobile No. <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    className="bg-[#75002b] text-white hover:bg-[#590020] py-2 px-4 rounded"
                    onClick={handleSubmit}
                >
                    Get OTP
                </button>
            </div>
        </div>
    );
};

export default StationGrievance;
