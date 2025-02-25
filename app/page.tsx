'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';


const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Home() {
  function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSearch(searchTerm);
    };

    return (
      <div className='container flex flex-col md:flex-row px-6 md:justify-center items-center md:gap-[7rem] mt-4'>
        <div className='flex justify-between items-center w-full md:w-auto'>
          <h1 className='text-2xl md:text-3xl'>TheDevila</h1>
          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden p-2'>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
        
        <nav className={`absolute top-16 left-0 w-full bg-white shadow-md p-4 transition-transform duration-300 ease-in-out md:static md:shadow-none md:p-0 md:w-auto ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <ul className='flex flex-col md:flex-row gap-4'> 
            <li className='flex flex-row gap-1 items-center'>
              <Link href="/">Home</Link>
            </li>
            <li className='flex flex-row gap-1 items-center'>
              <Link href="/about">About</Link>
            </li>
            <li className='flex flex-row gap-1 items-center'>
              <Link href="/contact">Contact</Link>
            </li>
            <li className='flex flex-row gap-1 items-center'>
              <Link href="/blog">Blog </Link>
            </li>
          </ul>
        </nav>
        
        <div className='mt-4 px-8 md:mt-0'>
          <form onSubmit={handleSubmit} className='flex'>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={handleChange}
              className='border border-gray-300 rounded-md px-4 py-2 w-[300px] focus:outline-none'
            />
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2'>
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <SearchBar onSearch={(term) => console.log('Searching for:', term)} />;
}
