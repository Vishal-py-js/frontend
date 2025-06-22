// components/CarTypesFilter.jsx
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import CommuteIcon from '@mui/icons-material/Commute';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

const carTypes = [
  { label: 'suv', icon: <AirportShuttleIcon /> },
  { label: 'Sedan', icon: <DirectionsCarIcon /> },
  { label: 'Hatchback', icon: <CommuteIcon /> },
  { label: 'Coupe', icon: <TimeToLeaveIcon /> },
  { label: 'Hybrid', icon: <ElectricCarIcon /> },
];

const FeatureModel = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-4">
      {carTypes.map((type) => (
        <button
          key={type.label}
          className="flex items-center space-x-2 px-4 py-2 cursor-pointer bg-white/10 text-white rounded-full backdrop-blur-sm hover:bg-white/20 transition"
        >
          {type.icon}
          <span className="capitalize text-sm">{type.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FeatureModel;
