"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon, MailIcon, BellIcon, UserCircleIcon } from '@heroicons/react/outline';

export function SearchTo() {
    const pathname = usePathname();

    return (
    <nav className="pl-14 pt-14 pb-14 rounded-b-3xl"  style={{ backgroundImage: 'url(/searchbg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="flex flex-row justify-items-start">
                <div className="flex flex-col justify-center">
                  <Image src="/searchlogo.png" alt="Logo" className="h-8 ml-20" />
                </div>
                <div className="flex flex-col ml-2">
                    <div className="flex flex-row justify-between">
                        <p className="text-white">From</p>
                        <p className="text-white">To</p>
                    </div>
                    <div className="flex flex-row justify-stretch">
                        <p className="text-white text-2xl mx-1">Medan (IDN)</p>
                        <p className="text-white text-2xl mx-1">↔</p>
                        <p className="text-white text-2xl mx-1">Tokyo (JPN)</p>
                    </div>
                    <div className="flex flex-row justify-around">
                        <p className="text-white text-sm">Monday, 20 July 20 </p>
                        <p className="text-white text-sm">6 Passenger </p>
                        <p className="text-white text-sm"> Economy</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-items-end">
              <p className="flex text-white mx-14">Change Search</p>
            </div>
          </div>
        </div>
      </nav>
    );
}