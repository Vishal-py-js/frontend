import React from "react";
import { TextField, Button, Typography, Divider, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { Apple, Android } from '@mui/icons-material';


const Footer = () => {
  return (
    <footer className="bg-[#0E1122] flex flex-col gap-8 text-white px-6 md:px-16 py-12">
      {/* Top section: Subscribe */}
      <div className="md:flex justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Typography variant="h5" className="font-semibold text-white mb-2">
            Join BoxCar
          </Typography>
          <Typography variant="body2" className="text-gray-300">
            Receive pricing updates, shopping tips & more!
          </Typography>
        </div>
        <div className="flex items-center space-x-2 bg-[#1B1E2F] rounded-full px-4 py-2 w-full md:w-[420px]">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-transparent flex-1 text-white placeholder-gray-400 focus:outline-none"
          />
          <Button
            variant="contained"
            className="!bg-[#4460F1] hover:!bg-[#3550d1] text-white rounded-lg px-6 py-2 capitalize"
          >
            Sign Up
          </Button>
        </div>
      </div>

      <Divider className="bg-gray-700 mb-8" />

      {/* Main links */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-sm mb-10">
        {/* Column 1 */}
        <div>
          <Typography className="font-semibold mb-4">Company</Typography>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Blog</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <Typography className="font-semibold mb-4">Quick Links</Typography>
          <ul className="space-y-2 text-gray-300">
            <li>Get in Touch</li>
            <li>Help center</li>
            <li>Live chat</li>
            <li>How it works</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <Typography className="font-semibold mb-4">Our Brands</Typography>
          <ul className="space-y-2 text-gray-300">
            <li>Toyota</li>
            <li>Porsche</li>
            <li>Audi</li>
            <li>BMW</li>
            <li>Ford</li>
            <li>Nissan</li>
            <li>Peugeot</li>
            <li>Volkswagen</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <Typography className="font-semibold mb-4">Vehicles Type</Typography>
          <ul className="space-y-2 text-gray-300">
            <li>Sedan</li>
            <li>Hatchback</li>
            <li>SUV</li>
            <li>Hybrid</li>
            <li>Electric</li>
            <li>Coupe</li>
            <li>Truck</li>
            <li>Convertible</li>
          </ul>
        </div>

        {/* Column 5 - Mobile App */}
        <div>
          <div>
            <Typography className="font-semibold">Our Mobile App</Typography>
             <div className="space-y-4 mt-4">
              {/* Apple Store */}
              <a
                //href="#"
                className="flex items-center bg-[#272b38] text-white rounded-xl px-5 py-3 w-64 shadow-md hover:scale-[1.02] transition"
              >
                <Apple className="text-white text-3xl mr-4" />
                <div className="text-left">
                  <p className="text-xs text-gray-300">Download on the</p>
                  <p className="text-lg font-semibold">Apple Store</p>
                </div>
              </a>

              {/* Google Play */}
              <a
                //href="#"
                className="flex items-center bg-[#272b38] text-white rounded-xl px-5 py-3 w-64 shadow-md hover:scale-[1.02] transition"
              >
                <Android className="text-white text-3xl mr-4" />
                <div className="text-left">
                  <p className="text-xs text-gray-300">Get in on</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </a>
            </div>
            {/* <div className="space-y-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29_SVG.svg"
                alt="App Store"
                className="w-36"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36"
              />
            </div> */}
          </div>

          {/* Column 6 - Social */}
          <div className="mt-4">
            <Typography className="font-semibold whitespace-nowrap">Connect With Us</Typography>
            <div className="flex space-x-3">
              <IconButton color="white" className="text-white">
                <Facebook sx={{color:"white"}} fontSize="small" />
              </IconButton>
              <IconButton color="white" className="text-white">
                <Twitter sx={{color:"white"}} fontSize="small" />
              </IconButton>
              <IconButton className="text-white">
                <Instagram sx={{color:"white"}} fontSize="small" />
              </IconButton>
              <IconButton className="text-white">
                <LinkedIn sx={{color:"white"}} fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between text-xs text-gray-400 border-t border-gray-700 pt-4">
        <p>© 2024 exemple.com. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <span>Terms & Conditions</span>
          <span>Privacy Notice</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
