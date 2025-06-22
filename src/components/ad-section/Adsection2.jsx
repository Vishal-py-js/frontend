// components/WhyChooseUs.jsx
import DiamondIcon from '@mui/icons-material/Diamond';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const features = [
  {
    icon: <LocalOfferIcon className="text-[40px] text-indigo-400" />,
    title: 'Special Financing Offers',
    desc: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: <DiamondIcon className="text-[40px] text-indigo-400" />,
    title: 'Trusted Car Dealership',
    desc: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: <PriceCheckIcon className="text-[40px] text-indigo-400" />,
    title: 'Transparent Pricing',
    desc: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: <DirectionsCarIcon className="text-[40px] text-indigo-400" />,
    title: 'Expert Car Service',
    desc: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
];

const Adsection2 = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">Why Choose Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2 max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adsection2;
