import React from "react";
import { Button, Typography } from "@mui/material";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const CarActionsSection = () => {
  return (
    <div className="grid rounded-bl-2xl rounded-br-2xl md:grid-cols-2 gap-6 px-8 py-10 bg-white">
      {/* Buy Car Card */}
      <div className="bg-blue-50 rounded-xl p-8 flex justify-between items-end shadow-sm">
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900">Are You Looking <br /> For a Car ?</h2>
          <Typography variant="body2" className="text-gray-600 mb-4">
            We are committed to providing our customers with exceptional service.
          </Typography>
          <Button
            variant="contained"
            className="!bg-indigo-600 w-fit hover:!bg-indigo-700 !text-white rounded-lg px-5"
            endIcon={<span>↗</span>}
          >
            Get Started
          </Button>
        </div>
        <ElectricCarIcon sx={{ fontSize: 60 }} className="text-indigo-500" />
      </div>

      {/* Sell Car Card */}
      <div className="bg-pink-50 rounded-xl p-8 flex justify-between items-end shadow-sm">
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900">Do You Want to <br /> Sell a Car ?</h2>
          <Typography variant="body2" className="text-gray-600 mb-4">
            We are committed to providing our customers with exceptional service.
          </Typography>
          <Button
            variant="contained"
            className="!bg-gray-900 w-fit hover:!bg-black !text-white rounded-md px-5"
            endIcon={<span>↗</span>}
          >
            Get Started
          </Button>
        </div>
        <MonetizationOnIcon sx={{ fontSize: 60 }} className="text-pink-500" />
      </div>
    </div>
  );
};

export default CarActionsSection;
