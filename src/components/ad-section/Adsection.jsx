// components/AdSection.jsx
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AdSection = () => {
  return (
    <section className="bg-white px-6 py-12">
      {/* Top section */}
      <div className="grid md:grid-cols-2 gap-6 items-center bg-[#f4f7fd] rounded-xl p-6 md:p-10">
        {/* Image */}
        <div className="relative">
          <img
            src="assets/images/background/Background2.png"
            alt="Car Ad"
            className="rounded-xl w-full h-auto object-cover"
          />
          <button className="absolute inset-0 flex justify-center items-center">
            <PlayCircleOutlineIcon
              fontSize="large"
              className="text-white bg-black/40 rounded-full p-2"
              style={{ fontSize: 60 }}
            />
          </button>
        </div>

        {/* Text content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
            Get A Fair Price For Your Car <br /> Sell To Us Today
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.
          </p>

          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="text-green-600" fontSize="small" />
              <span>
                We are the UK’s largest provider, with more patrols in more places
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="text-green-600" fontSize="small" />
              <span>You get 24/7 roadside assistance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="text-green-600" fontSize="small" />
              <span>We fix 4 out of 5 cars at the roadside</span>
            </li>
          </ul>

          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg flex items-center gap-1">
            Get Started <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
        {[
          { label: 'CARS FOR SALE', value: '836M' },
          { label: 'DEALER REVIEWS', value: '738M' },
          { label: 'VISITORS PER DAY', value: '100M' },
          { label: 'VERIFIED DEALERS', value: '238M' },
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-xs text-gray-500 mt-1 uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdSection;
