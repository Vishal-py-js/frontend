// components/BrandShowcase.jsx
import { ArrowOutward } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';

// const brands = [
//   { name: 'Audi', logo: '/brands/audi.png' },
//   { name: 'BMW', logo: '/brands/bmw.png' },
//   { name: 'Ford', logo: '/brands/ford.png' },
//   { name: 'Mercedes Benz', logo: '/brands/mercedes.png' },
//   { name: 'Peugeot', logo: '/brands/peugeot.png' },
//   { name: 'Volkswagen', logo: '/brands/volkswagen.png' },
// ];

const BrandShowcase = () => {

    const[brands, setBrands] = useState(null)

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const getBrands = async() => {
        let data = await axios.get(`${baseUrl}/brands`)
        console.log(data)
        setBrands(data.data)
    }

    useEffect(() => {
        getBrands()
    }, [])

    return (
        <div className="bg-gray-50 py-10 h-fit px-6">
        {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                Explore Our Premium Brands
                </h2>
                <a
                //href="#"
                className="text-sm text-gray-600 hover:text-blue-600 flex items-center space-x-1"
                >
                <span>Show All Brands</span>
                <ArrowOutward fontSize="small" />
                </a>
            </div>

            {/* Brand Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {brands?.map((brand) => (
                <div
                    key={brand.name}
                    className="bg-white cursor-pointer rounded-lg shadow-sm flex flex-col items-center justify-center p-4 hover:shadow-md transition"
                >
                    <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="h-12 object-contain mb-2"
                    />
                    <p className="text-sm font-medium text-gray-800 text-center">
                    {brand.name}
                    </p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default BrandShowcase;
