// components/CarSearchBar.jsx
import { useState } from 'react';
import { Button, MenuItem, Select, InputLabel, FormControl, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const CarSearchBar = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');

  const tabs = ['All', 'New', 'Used'];

  return (
    <div className="w-full px-4 flex flex-col items-center space-y-4">
      {/* Tabs */}
      <div className="flex space-x-6 text-sm font-medium text-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 border-b-2 ${
              activeTab === tab ? 'border-white text-white' : 'border-transparent text-gray-200'
            } transition-all`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="w-full max-w-5xl bg-white shadow-md px-4 py-3 flex flex-col gap-2 sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
        {/* Make */}
        <FormControl size="small" className="min-w-[120px] w-full">
          <InputLabel>Any Makes</InputLabel>
          <Select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            label="Any Makes"
            sx={{
                  fontSize: '14px',
                  minWidth: 150,               
                  '.MuiSelect-select': {
                    padding: '8px 12px',       
                    fontSize: '14px',  
                  },
                    "&:hover:not(.Mui-focused)": {
                        border: "none",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "none",
                        },
                    },
                }}
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="toyota">Toyota</MenuItem>
            <MenuItem value="ford">Ford</MenuItem>
          </Select>
        </FormControl>
        <Divider orientation="vertical" variant="middle" flexItem />
        {/* Model */}
        <FormControl size="small" className="min-w-[120px] w-full">
          <InputLabel>Any Models</InputLabel>
          <Select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            label="Any Models"
            sx={{
                  fontSize: '14px',
                  minWidth: 150,               
                  '.MuiSelect-select': {
                    padding: '8px 12px',       
                    fontSize: '14px',  
                  },
                    "&:hover:not(.Mui-focused)": {
                        border: "none",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "none",
                        },
                    },
                }}
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="camry">Camry</MenuItem>
            <MenuItem value="mustang">Mustang</MenuItem>
          </Select>
        </FormControl>

        <Divider orientation="vertical" variant="middle" flexItem />
        {/* Price */}
        <FormControl size="small" className="min-w-[120px] w-full">
          <InputLabel>All Prices</InputLabel>
          <Select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="All Prices"
            sx={{
                  fontSize: '14px',
                  minWidth: 150,               
                  '.MuiSelect-select': {
                    padding: '8px 12px',       
                    fontSize: '14px',  
                  },
                    "&:hover:not(.Mui-focused)": {
                        border: "none",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "none",
                        },
                    },
                }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="under20k">Under $20k</MenuItem>
            <MenuItem value="20kto50k">$20k - $50k</MenuItem>
            <MenuItem value="50kplus">$50k+</MenuItem>
          </Select>
        </FormControl>

        {/* Search Button */}
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          className="rounded-full whitespace-nowrap w-full bg-blue-600 text-white font-semibold py-2 normal-case hover:bg-blue-700 "
          sx={{ borderRadius: '999px', textTransform: 'none' }}
        >
          Search Cars
        </Button>
      </div>
    </div>
  );
};

export default CarSearchBar;
