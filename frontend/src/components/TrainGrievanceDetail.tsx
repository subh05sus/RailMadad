import { FaCalendarAlt } from 'react-icons/fa';
import { useState, ChangeEvent } from 'react';

const TrainGrievanceDetail = () => {
    // Separate state for journey type and grievance type
    const [journeyType, setJourneyType] = useState<string>('');
    const [grievanceType, setGrievanceType] = useState<string>('');
    const [subType, setSubType] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
    const [pnr, setPnr] = useState<string>('');
    const [uts, setUts] = useState<string>('');
    const [incidentDate, setIncidentDate] = useState<string>('');
    const [grievanceDescription, setGrievanceDescription] = useState<string>('');
    const [uploadFile, setUploadFile] = useState<File | null>(null);

    // Type options
    const grievanceTypeOptions = [
        { value: 'facilities-for-men', label: 'Facilities for men with Special' },
        { value: 'facilities-for-women', label: 'Facilities for Women with Special' },
        // Add more options here
    ];

    // Sub Type options based on selected grievance type
    const subTypeOptions: { [key: string]: string[] } = {
        'facilities-for-women': ['Baby Food', 'Other Subtypes'],
        // Add sub-type arrays for other types here
    };

    // Handle input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        switch (name) {
            case 'mobile':
                setMobile(value);
                break;
            case 'otp':
                setOtp(value);
                break;
            case 'pnr':
                setPnr(value);
                break;
            case 'uts':
                setUts(value);
                break;
            case 'incidentDate':
                setIncidentDate(value);
                break;
            case 'grievanceDescription':
                setGrievanceDescription(value);
                break;
            case 'uploadFile':
                setUploadFile(files ? files[0] : null);
                break;
            case 'journeyType':
                setJourneyType(value);
                break;
            case 'grievanceType':
                setGrievanceType(value);
                break;
            case 'subType':
                setSubType(value);
                break;
            default:
                break;
        }
    };

    // Handle submit
    const handleSubmit = () => {
        console.log('Mobile No:', mobile);
        console.log('OTP:', otp);
        console.log('Journey Type:', journeyType);
        console.log('PNR:', journeyType === 'pnr' ? pnr : 'N/A');
        console.log('UTS No:', journeyType === 'uts' ? uts : 'N/A');
        console.log('Grievance Type:', grievanceType);
        console.log('Sub Type:', subType);
        console.log('Incident Date:', incidentDate);
        console.log('Grievance Description:', grievanceDescription);
        console.log('File:', uploadFile ? uploadFile.name : 'No file');
    };

    // Handle reset
    const handleReset = () => {
        setJourneyType('');
        setGrievanceType('');
        setSubType('');
        setMobile('');
        setOtp('');
        setShowOtpInput(false);
        setPnr('');
        setUts('');
        setIncidentDate('');
        setGrievanceDescription('');
        setUploadFile(null);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#75002b] mb-4">Grievance Detail</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mobile No. */}
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Mobile No.</label>
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                        value={mobile}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Get OTP Button */}
                <div className="col-span-2 md:col-span-1 flex items-end">
                    <button
                        type="button"
                        className="w-full bg-[#75002b] text-white hover:bg-[#590020] py-2 px-4 rounded"
                        onClick={() => setShowOtpInput(true)}
                    >
                        Get OTP
                    </button>
                </div>

                {/* OTP Input and Verify Button */}
                {showOtpInput && (
                    <div className="col-span-4 md:col-span-2 grid grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">OTP</label>
                            <input
                                type="text"
                                name="otp"
                                placeholder="Enter OTP"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                                value={otp}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            type="button"
                            className="mt-2 w-full bg-[#75002b] text-white hover:bg-[#590020] py-2 px-4 rounded"
                        >
                            Verify
                        </button>
                    </div>
                )}

                {/* Journey Details */}
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Journey Details</label>
                    <select
                        name="journeyType"
                        value={journeyType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    >
                        <option value="" disabled>--Select--</option>
                        <option value="pnr">PNR</option>
                        <option value="uts">UTS</option>
                    </select>
                </div>

                {/* PNR No */}
                {journeyType === 'pnr' && (
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700">PNR No.</label>
                        <input
                            type="text"
                            name="pnr"
                            placeholder="Enter your PNR number"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                            value={pnr}
                            onChange={handleInputChange}
                        />
                    </div>
                )}

                {/* UTS No */}
                {journeyType === 'uts' && (
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700">UTS No.</label>
                        <input
                            type="text"
                            name="uts"
                            placeholder="Enter your UTS number"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                            value={uts}
                            onChange={handleInputChange}
                        />
                    </div>
                )}

                {/* Grievance Type */}
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Grievance Type</label>
                    <select
                        name="grievanceType"
                        value={grievanceType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    >
                        <option value="" disabled>--Select--</option>
                        {grievanceTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sub Type */}
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Sub Type</label>
                    <select
                        name="subType"
                        value={subType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                    >
                        <option value="" disabled>--Select--</option>
                        {subTypeOptions[grievanceType]?.map((subOption) => (
                            <option key={subOption} value={subOption}>
                                {subOption}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Incident Date */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Incident Date</label>
                    <div className="relative mt-1">
                        <input
                            type="date"
                            name="incidentDate"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                            value={incidentDate}
                            onChange={handleInputChange}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <FaCalendarAlt className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                    </div>
                </div>

                {/* Grievance Description */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Grievance Description</label>
                    <textarea
                        name="grievanceDescription"
                        placeholder="Describe your grievance"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                        value={grievanceDescription}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Upload File */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Upload File (Optional)</label>
                    <input
                        type="file"
                        name="uploadFile"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#75002b] focus:ring-[#75002b] sm:text-sm"
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* Submit and Reset Buttons */}
            <div className="mt-6 flex justify-between">
                <button
                    type="button"
                    className="bg-[#75002b] text-white hover:bg-[#590020] py-2 px-4 rounded"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="bg-gray-400 text-white hover:bg-gray-500 py-2 px-4 rounded"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default TrainGrievanceDetail;
