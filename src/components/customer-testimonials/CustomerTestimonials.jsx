import React, { useState } from "react";
import { Avatar, Rating, IconButton, Typography, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const testimonials = [
  {
    name: "Ali TUFAN",
    role: "Designer",
    rating: 5,
    text: `I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.`,
    image: "assets/images/users/user1.png",
  },
  // Add more testimonials here if needed
];

const CustomerTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-gray-50 px-8 py-12">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-2xl font-bold text-gray-900">What our customers say</h2>
        <Typography className="text-sm text-gray-500">
          Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
        </Typography>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-xl w-64 h-64 object-cover shadow-md"
          />
          <IconButton
            onClick={prevTestimonial}
            className="!absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white shadow"
          >
            <ArrowBackIos fontSize="small" />
          </IconButton>
        </div>

        <div className="max-w-xl">
          <Box className="flex items-center gap-2 mb-1">
            <Rating value={testimonial.rating} readOnly size="small" />
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
              {testimonial.rating.toFixed(1)}
            </span>
          </Box>

          <Typography className="font-semibold text-gray-900">
            {testimonial.name}
          </Typography>
          <Typography className="text-sm text-gray-500 mb-4">
            {testimonial.role}
          </Typography>

          <Typography className="text-lg text-gray-900 leading-relaxed">
            {testimonial.text}
          </Typography>
        </div>

        <IconButton
          onClick={nextTestimonial}
          className="!bg-white shadow md:ml-4"
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
