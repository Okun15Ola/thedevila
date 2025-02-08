'use client'
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa';

export default function Home() {
  function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSearch(searchTerm);
    };

    return (
      <div className='flex flex-row justify-center items-center gap-[10rem] mt-4'>
        <h1 className='text-3xl'>TheDevila</h1>
        <nav>
          <ul className='flex flex-row gap-4'> 
            <li className='flex flex-row gap-1 items-center'>
              <span>Home
              </span> 
            </li>
            <li className='flex flex-row gap-1 items-center'>
              <span>About</span>
            </li>
            <li className='flex flex-row gap-1 items-center'>
              <span>Contact</span>
            </li>
            <li className='flex flex-row gap-1 items-center'>
              <span>Blog</span>
            </li>
          </ul>
        </nav>
        <div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-[300px] focus:outline-none "
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
  return <SearchBar onSearch={(term) => console.log("Searching for:", term)} />
} // Removed extra closing brace