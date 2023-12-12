"use client";
import React , { useState, ChangeEvent }  from "react";
import Link from "next/link";
import Image from "next/image";

interface SearchDetailsProps {
  data: any[]; // Replace 'any' with the actual type of your JSON data
  onSearch: (results: any[]) => void;
  add: string;
  setShowModal: (isVisible: boolean) => void;
  value: string;
}

const Searchdetails: React.FC<SearchDetailsProps> = ({
  data,
  onSearch,
  add,
  setShowModal,
  value,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const results = data.filter((item) =>
      // Replace 'name' with the property you want to search on
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    onSearch(results);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex justify-between items-center space-x-1">
      <div>
        <Link href="/" className="flex items-center space-x-[1.1rem]">
          <Image
            src="/icon/left.svg"
            alt="Left-icon"
            width="6"
            height="12"
            className="w-[0.6rem] h-[1.2rem]"
          />
          <div className="text-[1.4rem] font-semibold leading-[2.4rem]">
            Home
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-[1.3rem]">
        <div className="w-[100%] xl:w-[47.5rem] h-[3.2rem] relative">
          <input
            type="text"
            name="look for a member"
            placeholder={value}
            value={query}
            onChange={handleChange}
            id=""
            className="w-full h-full rounded-[0.6rem] pl-[1.5rem] pr-[2rem] border border-[#CBD5E1] outline-none text-[1rem] text-[#94A3B8]"
          />
          <Image
            src="/icon/search.svg"
            alt="Search-icon"
            width="17"
            height="17"
            className="w-[1.7rem] h-[1.7rem] absolute right-[1.5rem] top-[0.75rem]"
          />
        </div>
        <div
          onClick={handleSearch}
          className="bg-black text-[1rem] font-medium rounded-[0.6rem] px-[4.5rem] py-[0.8rem] text-white cursor-pointer"
        >
          Search
        </div>
      </div>
      <div
        onClick={() => setShowModal(true)}
        className="flex items-center space-x-[1rem] border border-black px-[1.6rem] py-[0.4rem] rounded-[0.6rem] cursor-pointer"
      >
        <p className="text-[1rem] font-medium leading-[2.4rem]">{add}</p>
        <Image
          src="/icon/plus.svg"
          alt="Plus-icon"
          width="15"
          height="15"
          className="w-[1.5rem] h-[1.5rem]"
        />
      </div>
    </div>
  );
};

export default Searchdetails;
