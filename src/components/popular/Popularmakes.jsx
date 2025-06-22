import React, { useEffect, useState, useSyncExternalStore } from "react";
import Slider from "react-slick";
import {
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
} from "@mui/icons-material";
import axios from "axios";

const carData = {
  Audi: [
    {
      title: "Audi A5 – 2023",
      subtitle: "2.0 D5 PowerPulse Momentum 5dr AWD",
      miles: "500 Miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$45,000",
      originalPrice: "$50,000",
      image: "https://via.placeholder.com/350x200?text=Audi+A5+2023",
      sale: true,
    },
    {
      title: "Audi A4 – 2022",
      subtitle: "2.0 D6 PowerPulse Momentum 5dr AWD",
      miles: "150 Miles",
      fuel: "Diesel",
      transmission: "CVT",
      price: "$120,000",
      image: "https://via.placeholder.com/350x200?text=Audi+A4+2022",
      sale: true,
    },
    {
      title: "Audi Q7 – 2021",
      subtitle: "3.0 TDI Quattro 5dr",
      miles: "300 Miles",
      fuel: "Diesel",
      transmission: "Manual",
      price: "$85,000",
      originalPrice: "",
      image: "https://via.placeholder.com/350x200?text=Audi+Q7+2021",
      sale: false,
    },
  ],
  Ford: [],
  "Mercedes Benz": [],
};

const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute -left-6 top-1/2 z-10 transform -translate-y-1/2 bg-white/10 border border-white/20 rounded-full p-2 text-white hover:bg-white/20"
  >
    <ArrowBackIos fontSize="small" />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className="absolute -right-6 top-1/2 z-10 transform -translate-y-1/2 bg-white/10 border border-white/20 rounded-full p-2 text-white hover:bg-white/20"
  >
    <ArrowForwardIos fontSize="small" />
  </button>
);

const PopularMakes = () => {
    const [selectedMake, setSelectedMake] = useState("685790a20ed71690fbfaa6aa");

    const[brands, setBrands] = useState(null)
    const[cars, setCars] = useState(null)

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const getBrands = async() => {
        let data = await axios.get(`${baseUrl}/brands`)
        console.log(data)
        setBrands(data.data)
    }

    const getCars = async() => {
        let data = await axios.get(`${baseUrl}/cars?brand=${selectedMake}`)
        console.log(data)
        setCars(data.data)
    }

    useEffect(() => {
        getBrands()
    }, [])

    useEffect(() => {
        getCars()
    }, [selectedMake])

  const handleTabChange = (_, newValue) => {
    setSelectedMake(newValue);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#0B0F1C] text-white p-8 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Popular Makes</h2>
        <a className="text-sm text-gray-300 hover:underline">
          View All ↗
        </a>
      </div>

      <Tabs
        value={selectedMake}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="primary"
      >
        {/* {Object.keys(carData).map((make) => (
          <Tab key={make} value={make} label={make} className="text-white" />
        ))} */}
        {
            brands?.map((brand, ind) =>(
                <Tab key={brand._id} value={brand._id} label={brand.name} className="text-white" />
            ))
        }
      </Tabs>

      <div className="relative mt-8">
        <Slider {...sliderSettings}>
          {cars?.map((car, index) => (
            <div key={index} className="px-2">
              <Card
                className="bg-[#1C2130] rounded-2xl overflow-hidden w-[550px] h-[250px] flex"
                sx={{
                '.MuiCardContent-root':{
                    backgroundColor: "#050B20"
                }
                }}
              >
                <div className="relative h-full w-full">
                  <img
                    src={car.imageUrl}
                    alt={car.title}
                    className="object-cover w-full h-full"
                  />
                    <Chip
                      label="Sale"
                      color="primary"
                      size="small"
                      className="absolute top-2 left-2"
                    />

                </div>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <div>
                    <Typography variant="h5" className="font-extrabold text-gray-400">
                      {car.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-400 mb-3 text-xs"
                    >
                      2.0 D5 PowerPulse Momentum 5dr AWD..
                    </Typography>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>🚗 2000</li>
                      <li>⛽ {car.fuelType}</li>
                      <li>⚙️ {car.transmission}</li>
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                    
                      <span className="text-white font-semibold">
                        {car.price}
                      </span>
                    </div>
                    <a
                      //href="#"
                      className="text-sm text-blue-400 hover:underline"
                    >
                      View Details ↗
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularMakes;
