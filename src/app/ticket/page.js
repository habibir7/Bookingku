'use server';
import { SearchTo } from "@/components/searchTo";
import { Filter } from "@/components/Filter";
import Link from "next/link";
import Image from "next/image";
import { FaBurger } from "react-icons/fa6";
import { BsFillSuitcaseFill } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import RenderPhoto from '@/utils/RenderPhoto';

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/airlines/flight`,{
      headers: {
        'Cache-Control': 'no-cache'
      }
});

  if (!res.ok) {
    throw new Error("Failed get data");
  }
  const data = await res.json();
  return  data;
};

export default async function Ticket() {
  const data = await getData();

  const RenderFacilities = (facility) => {
    switch (facility) {
      case "baggage":
        return <BsFillSuitcaseFill />;
      case "meal":
        return <FaBurger />;
      case "wifi":
        return <FaWifi />;
    }
  };

  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const calculateTimeDifference = (takeoff, landing) => {
    const takeoffTime = new Date(takeoff);
    const landingTime = new Date(landing);
    const timeDifference = Math.abs(landingTime - takeoffTime);
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${hours} hours ${minutes} minutes`;
  };

  return (
    <main>
      <SearchTo />
      <div className="flex">
        <Filter />
        <div className=" p-5 w-9/12 ">
          <div className="w-full flex justify-between">
            <h1 className="text-xl font-semibold">
              Select Ticket
              <span className="pl-2 text-base text-gray-500 font-normal">
                (6 flight found)
              </span>
            </h1>
            <button className="flex items-center w-fit text-xl
              font-semibold">
              Sort by
              <span className="pl-2">
                <LuArrowUpDown className="text-2xl" />
              </span>
            </button>
          </div>
          {data.data
            ? data.data?.map((item) => {
                return (
                  <div
                    href={`/ticket/${item?.code}`}
                    key={item?.code}
                    className=" rounded mt-10 w-full px-10 flex flex-col py-5 space-y-6 bg-white
                      hover:bg-slate-300 hover:transition-all hover:duration-200 hover:ease-in"
                  >
                    <div className="flex items-center space-x-5 text-base text-gray-800">
                      <Image
                        alt={item.name}
                        src={RenderPhoto(item.name)}
                        width={110}
                        height={110}
                      />
                      <h1>{item.name}</h1>
                    </div>
                    <div className="flex items-center">
                      <div className="pr-36">
                        <span className="flex justify-between w-44">
                          <h1 className="text-3xl">{item?.from?.code}</h1>
                          <Image
                            src={"/logoGrey.png"}
                            width={20}
                            height={5}
                            alt=""
                            className="object-contain"
                          />
                          <h1 className="text-3xl">{item?.to?.code}</h1>
                        </span>
                        <span className="text-sm flex justify-between w-40 text-gray-500">
                          <h2>{formatTime(item.takeoff)}</h2>
                          <h2>{formatTime(item.landing)}</h2>
                        </span>
                      </div>
                      <div className="text-gray-700 text-center text-sm w-fit pr-36">
                        <h4>
                          {calculateTimeDifference(item.takeoff, item.landing)}
                        </h4>
                        <p>({item.transit}) transit</p>
                      </div>
                      <div className="flex">
                        <div className="flex items-center text-gray-500 text-3xl space-x-1 pr-7">
                          {item?.facilities?.map((facility) => {
                            return RenderFacilities(facility);
                          })}
                        </div>
                        <div className="flex items-center space-x-1">
                          <h1 className="text-[#2395FF] text-lg">
                            {`$${item.price}`}
                            <span className="text-gray-400 text-base">
                              /pax
                            </span>
                          </h1>
                          <Link href={`/booking/${item?.code}`}>
                            <button className="text-white rounded-lg shadow-xl font-bold bg-[#2395FF] px-10 py-3">
                              Select
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-500 font-semibold">
                      <h1>View Details</h1>
                      <IoIosArrowDown />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </main>
  );
}
