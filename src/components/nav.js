"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon, MailIcon, BellIcon, UserCircleIcon } from '@heroicons/react/outline';

export function Nav() {
    const pathname = usePathname();

    return (
    <nav className="bg-white p-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo and Website Name */}
            <div className="flex items-center">
              <Link href="/">
                  <img src="/logo.png" alt="Logo" className="h-8" />
              </Link>
            </div>
  
            {/* Search Bar */}
            <div className="relative flex items-center">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Where you want to go ?"
              className="py-2 pl-10 pr-4 bg-slate-50 text-black rounded-lg focus:outline-none focus:bg-slate-100"
            />
          </div>

          {/* Find Ticket and My Booking Links */}
          <div className="flex items-center">
            <div className="ml-4">
              <Link href="/dashboard/ticket" className="text-black relative inline-block">
                
                  Find Ticket
                  <div className="h-1 w-8 bg-blue-400 absolute bottom-0 left-0 ms-6"></div>
                
              </Link>
            </div>
            <div className="ml-4">
              <Link href="/my-booking" className="text-black relative inline-block">
                  My Booking
                  <div className="h-1 w-8 bg-blue-400 absolute bottom-0 left-0 ms-6"></div>
              </Link>
            </div>
          </div>
  
            {/* Message, Notification, Profile Icons */}
            <div className="flex items-center">
              <Link href="/messages" className=" mx-4"> 
                  <MailIcon className="h-8 w-8" />
              </Link>
              <Link href="/notifications" className=" mx-4">
                  <BellIcon className="h-8 w-8" />
              </Link>
              <Link href="/profile" className=" mx-4">
                  <img src="/profile.png" className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}