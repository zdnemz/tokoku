'use client';

import Button from '@/components/elements/Button';
import useFetch from '@/hooks/useFetch';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();

      await axios.get(`/api/search?q=${query}`);
    } catch (err) {
      if (err instanceof AxiosError) {
        return toast.error(err.response?.data.data.message);
      }

      return toast.error('Something went wrong');
    }
  }

  return (
    <div className="flex justify-center items-center w-full sm:w-fit relative">
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="input min-w-72 w-[40vw!important]"
        type="search"
        placeholder="Temukan barang impianmu"
        autoComplete="off"
      />
      <Button className="absolute right-0" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </div>
  );
}
