import { useState } from 'react';
import { FaTrain, FaUniversity, FaClipboard, FaQuestionCircle, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';
import TrainGrievanceDetail from './TrainGrievanceDetail';
import StationGrievance from './StationGrievance';
import Appreciation from './Appreciation';
import Enquiry from './Enquiry';
import Suggestion from './Suggestion';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('train');

  const sections = [
    { name: 'train', icon: <FaTrain />, label: 'TRAIN' },
    { name: 'station', icon: <FaUniversity />, label: 'STATION' },
    { name: 'appreciation', icon: <FaClipboard />, label: 'APPRECIATION/ RAIL ANUBHAV' },
    { name: 'enquiry', icon: <FaQuestionCircle />, label: 'ENQUIRY' },
    { name: 'track', icon: <FaMapMarkerAlt />, label: 'TRACK YOUR CONCERN' },
    { name: 'suggestions', icon: <FaLightbulb />, label: 'SUGGESTIONS' },
  ];

  return (
    <div className="flex">
      <div className="w-32 bg-[#75002b] text-white flex flex-col">
        {sections.map((section) => (
          <button
            key={section.name}
            className={`flex flex-col items-center px-2 py-3 hover:bg-[#590020] border-b border-[#8b0a41] ${
              activeSection === section.name ? 'bg-[#590020]' : ''
            }`}
            onClick={() => setActiveSection(section.name)}
          >
            {section.icon}
            <p className="mt-1">{section.label}</p>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-white">
        {activeSection === 'train' && <div><TrainGrievanceDetail/></div>}
        {activeSection === 'station' && <div><StationGrievance/></div>}
        {activeSection === 'appreciation' && <div><Appreciation/></div>}
        {activeSection === 'enquiry' && <div><Enquiry/></div>}
        {activeSection === 'track' && <div>Track Your Concern Content</div>}
        {activeSection === 'suggestions' && <div><Suggestion/></div>}
      </div>
    </div>
  );
};

export default Sidebar;
