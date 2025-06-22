// components/Navbar.jsx
import { Button, Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';

const Navbar = () => {
  const [anchorEls, setAnchorEls] = useState({});

  const handleMenuClick = (name, event) => {
    setAnchorEls({ ...anchorEls, [name]: event.currentTarget });
  };

  const handleClose = (name) => {
    setAnchorEls({ ...anchorEls, [name]: null });
  };

  const menuItems = ['Home', 'Listings', 'Blog', 'Pages'];

  const token = sessionStorage.getItem('token')
  console.log(token);

  return (
    <nav className="w-full absolute left-0 flex items-center justify-between px-6 py-4 text-white fixed top-0 z-50">
      {/* Logo */}
      <img src='assets/icons/logo.svg'/>

      {/* Center nav items */}
      <div className='flex'>
      <div className="hidden md:flex space-x-6 text-sm items-center">
        {menuItems.map((item) => (
          <div key={item} className="relative">
            <button
              className="hover:text-gray-400"
              onClick={(e) => handleMenuClick(item, e)}
            >
              {item} <span className="ml-1">&#9662;</span>
            </button>
            <Menu
              anchorEl={anchorEls[item]}
              open={Boolean(anchorEls[item])}
              onClose={() => handleClose(item)}
              MenuListProps={{ className: 'bg-white text-black' }}
            >
              <MenuItem onClick={() => handleClose(item)}>Submenu 1</MenuItem>
              <MenuItem onClick={() => handleClose(item)}>Submenu 2</MenuItem>
            </Menu>
          </div>
        ))}
        <a className="hover:text-gray-400">About</a>
        <a className="hover:text-gray-400">Contact</a>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <IconButton>
          <AccountCircle sx={{ color: 'white', marginRight:"4px"}} />
            <Typography className='text-white ml-2'>{token?sessionStorage.getItem('name'):"Sign in"}</Typography>
        </IconButton>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '999px',
            '&:hover': { backgroundColor: '#ddd' },
          }}
        >
          Submit Listing
        </Button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
