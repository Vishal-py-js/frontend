// components/CarSliderWithDrag.jsx
import Slider from 'react-slick';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const cars = [
//     {
//         title: 'Ford Transit – 2021',
//         image: '/cars/car1.jpg',
//         tag: 'Great Price',
//         mileage: '2500 Miles',
//         fuel: 'Diesel',
//         transmission: 'Manual',
//         price: '$22,000',
//     },
//     {
//         title: 'New GLC – 2023',
//         image: '/cars/car2.jpg',
//         tag: 'Low Mileage',
//         mileage: '50 Miles',
//         fuel: 'Petrol',
//         transmission: 'Automatic',
//         price: '$95,000',
//     },
//     {
//         title: 'Audi A6 3.5 – New',
//         image: '/cars/car3.jpg',
//         mileage: '100 Miles',
//         fuel: 'Petrol',
//         transmission: 'Automatic',
//         price: '$58,000',
//     },
//     {
//         title: 'Corolla Altis – 2023',
//         image: '/cars/car4.jpg',
//         mileage: '15000 Miles',
//         fuel: 'Petrol',
//         transmission: 'CVT',
//         price: '$45,000',
//     },
//     {
//         title: 'Ford Explorer 2023',
//         image: '/cars/car5.jpg',
//         tag: 'Great Price',
//         mileage: '10 Miles',
//         fuel: 'Diesel',
//         transmission: 'Automatic',
//         price: '$35,000',
//     },
//     {
//         title: 'Audi A6 3.5 – New',
//         image: '/cars/car3.jpg',
//         mileage: '100 Miles',
//         fuel: 'Petrol',
//         transmission: 'Automatic',
//         price: '$58,000',
//     },
//     {
//         title: 'Corolla Altis – 2023',
//         image: '/cars/car4.jpg',
//         mileage: '15000 Miles',
//         fuel: 'Petrol',
//         transmission: 'CVT',
//         price: '$45,000',
//     },
//     {
//         title: 'Ford Explorer 2023',
//         image: '/cars/car5.jpg',
//         tag: 'Great Price',
//         mileage: '10 Miles',
//         fuel: 'Diesel',
//         transmission: 'Automatic',
//         price: '$35,000',
//     },
//     {
//         title: 'Audi A6 3.5 – New',
//         image: '/cars/car3.jpg',
//         mileage: '100 Miles',
//         fuel: 'Petrol',
//         transmission: 'Automatic',
//         price: '$58,000',
//     },
//     {
//         title: 'Corolla Altis – 2023',
//         image: '/cars/car4.jpg',
//         mileage: '15000 Miles',
//         fuel: 'Petrol',
//         transmission: 'CVT',
//         price: '$45,000',
//     },
//     {
//         title: 'Ford Explorer 2023',
//         image: '/cars/car5.jpg',
//         tag: 'Great Price',
//         mileage: '10 Miles',
//         fuel: 'Diesel',
//         transmission: 'Automatic',
//         price: '$35,000',
//     },
// ];

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
};

const CarSliderWithDrag = () => {

    const[cars, setCars] = useState(null)

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const getCars = async() => {
        let data = await axios.get(`${baseUrl}/cars`)
        console.log(data)
        setCars(data.data)
    }

    useEffect(() => {
        getCars()
    }, [])

    return (
        <div className="px-6 py-10 bg-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Explore All Vehicles</h2>
            <a className="text-sm text-blue-600 flex items-center space-x-1">
            <span>View All</span>
            <ArrowForwardIcon fontSize="small" />
            </a>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 mb-6 text-sm font-medium text-gray-600 border-b border-blue-500">
            {['In Stock', 'New Cars', 'Used Cars'].map((tab, idx) => (
            <button
                key={tab}
                className={`pb-2 ${
                idx === 0 ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-blue-500'
                }`}
            >
                {tab}
            </button>
            ))}
        </div>

        {/* Slider */}
        <Slider {...settings}>
            {cars?.map((car, index) => (
            <div key={index} className="px-2">
                <div className="bg-white rounded-xl shadow hover:shadow-md transition">
                <div className="relative">
                    <img
                        src={car.imageUrl}
                        alt={car.title}
                        className="w-full h-40 object-cover rounded-t-xl"
                    />
                    {car.tags && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        {car.tags[0]}
                    </span>
                    )}
                </div>

                <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900">{car.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">4.0 D5 PowerPulse Momentum 5dr...</p>

                    {/* Specs */}
                    <div className="flex items-center justify-between mt-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                        <SpeedIcon fontSize="small" /> {car.mileage}
                    </div>
                    <div className="flex items-center gap-1">
                        <LocalGasStationIcon fontSize="small" /> {car.fuelType}
                    </div>
                    <div className="flex items-center gap-1">
                        <SettingsIcon fontSize="small" /> {car.transmission}
                    </div>
                    </div>

                    {/* Price and Link */}
                    <div className="mt-4 flex justify-between items-center">
                    <p className="font-bold text-sm">{car.price}</p>
                    <a className="text-xs text-blue-600 flex items-center">
                        View Details <ArrowForwardIcon fontSize="inherit" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </Slider>
        </div>
    );
};

export default CarSliderWithDrag;
