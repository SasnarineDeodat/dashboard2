import {
  BellIcon,
  ChipIcon,
  InboxIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#F0F5F5] w-full py-6 items-center justify-between flex px-12">
      {/* search */}
      <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2">
        {/* icons */}
        <SearchIcon className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none"
        />
      </div>
      {/* Logo */}
      <div className="items-center w-full justify-center flex space-x-4">
        <ChipIcon className="w-6 h-6" />
        <h1 className="text-xl text-gray-900 font-medium">DevSite</h1>
      </div>
      {/* icons */}
      <div className="items-center justify-end space-x-6 flex w-full">
        <BellIcon className="header-icon" />
        <InboxIcon className="header-icon" />
        <UserCircleIcon className="header-icon" />
      </div>
    </div>
  );
};

export default Header;
