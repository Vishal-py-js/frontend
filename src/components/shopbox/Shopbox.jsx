import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
} from "@mui/material";

const categories = [
  "New Cars For Sale",
  "Used Cars For Sale",
  "Browse By Type",
  "Browse By Brand",
];

const carBrands = [
  "Ford Cars", "Honda Cars", "Hyundai Cars", "Infiniti Cars", "Jaguar Cars", "Jeep Cars",
  "Chrysler Cars", "Citroen Cars", "Cupra Cars", "Dacia Cars", "DS Cars", "Fiat Cars",
  "Land Rover Cars", "Lexus Cars", "Mercedes-Benz Cars", "Mazda Cars", "MG Cars", "Kia Cars",
  "Abarth Cars", "Romeo Cars", "Audi Cars", "Bentley Cars", "BMW Cars", "Chevrolet Cars",
  "Mini Cars", "Mitsubishi Cars", "Nissan Cars", "Peugeot Cars", "Porsche Cars", "Renault Cars",
];

const ShopBox = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="bg-white text-black px-8 py-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Shop BoxCar Your Way</h2>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          View More ↗
        </a>
      </div>

      <Tabs
        value={selectedTab}
        onChange={(_, newValue) => setSelectedTab(newValue)}
        indicatorColor="primary"
        textColor="inherit"
        className="mb-6"
        TabIndicatorProps={{ style: { height: "3px" } }}
      >
        {categories.map((label, index) => (
          <Tab
            key={index}
            label={label}
            className="capitalize text-sm font-medium text-gray-700"
          />
        ))}
      </Tabs>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 text-sm text-gray-800">
        {carBrands.map((brand, index) => (
          <a
            //href="#"
            key={index}
            className="hover:underline cursor-pointer transition duration-200"
          >
            {brand}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShopBox;
