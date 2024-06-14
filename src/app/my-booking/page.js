    "use client";
    import Image from "next/image";
    import Cookies from "js-cookie";
    import { Profiler } from "react";
    import { useRouter } from "next/navigation";
    import { Router } from "next/router";
    import { FaRegUserCircle, FaStar } from "react-icons/fa";
    import { IoIosArrowDown, IoIosLogOut, IoIosSettings } from "react-icons/io";
    import { useEffect, useState } from "react";
    import axios from "axios";
    import formatDate from "@/utils/FormatDate";
    import formatTime from "@/utils/FormatTime";
    import Link from "next/link";

    export default function MyBooking() {
    const route = useRouter();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const accessToken = Cookies.get("access-token");
        console.log(accessToken);

        const getData = async (token) => {
        try {
            const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets/`,
            {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            }
            );
            console.log(res.data);
            setData(res.data.data); // Set the fetched data into the state
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Error fetching data"); // Set error message
        } finally {
            setLoading(false); // Set loading to false after fetch completes
        }
        };

        if (accessToken) {
        getData(accessToken);
        } else {
        setLoading(false); // No token, no fetch, stop loading
        }
    }, []); // Empty dependency array to run once on mount

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    function handleLogout() {
        Cookies.remove("access-token");
        Cookies.remove("refresh-token");
        console.log("Cookies cleared");
        route.push("/").then(() => {
        window.location.reload();
        });
    }

    return (
        <main className="w-screen flex flex-row">
        <div className="w-1/4 h-fit flex flex-col bg-white p-4 m-10 items-center rounded-lg">
            <Image
            className="border-8 rounded-full border-blue-400"
            src={"/photoprof.png"}
            width={175}
            height={175}
            alt="profile"
            />
            <button className="border rounded-xl border-blue-500 p-4 m-4">
            Select Photo
            </button>
            <label className="text-2xl font-bold">Mike kowalski</label>
            <div className="flex flex-row m-2">
            <Image src={"/Vector.png"} width={15} height={2} alt="location" />
            <label>Medan, Indonesia</label>
            </div>
            <div className="flex flex-row m-2 justify-evenly">
            <label className="font-bold">Cards</label>
            <label className="text-blue-400">+ Add</label>
            </div>
            <div className="flex flex-col text-white bg-blue-400 h-15 w-4/5 items-center p-2  rounded-md">
            <label className="text-lg">4441 1233 5512 5551</label>
            <div className="flex justify-around text-sm items-stretch">
                <label>x-card</label>
                <span>
                <label>$ 1,440.2</label>
                </span>
            </div>
            </div>
            <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start">
                <FaRegUserCircle />
                <button className="p-4"> Profile </button>
            </div>
            <div className="flex flex-row items-center justify-start">
                <FaStar />
                <button className="p-4"> My Review </button>
            </div>
            <div className="flex flex-row items-center justify-start">
                <IoIosSettings />
                <button className="p-4"> Setting </button>
            </div>
            <div className="flex flex-row items-center justify-start">
                <IoIosLogOut />
                <button className="p-4" onClick={handleLogout}>
                {" "}
                Logout{" "}
                </button>
            </div>
            </div>
        </div>
        <div className="flex flex-col w-3/4 mt-10 mb-10 mr-10">
            <div className="flex flex-col bg-white h-auto rounded-lg p-8">
            <div>
                <label className="text-blue-600 font-semibold">
                M Y B O O K I N G
                </label>
            </div>
            <div className="flex flex-row justify-between">
                <label className="text-2xl font-bold">My Booking</label>
                <label className="text-blue-600 font-semibold">Order History</label>
            </div>
            </div>
            {data
            ? data.result?.map((item) => {
                return (
                    <div key={item.code} className="mt-4 bg-white h-auto rounded-lg p-6">
                    <label>{`${formatDate(item?.ticket.takeoff)} • ${formatTime(
                        item?.ticket.takeoff
                    )}`}</label>
                    <div className="flex flex-row items-center font-bold text-xl py-2">
                        <span className="pr-5">{item.ticket.from.country}</span>
                        <div className="relative px-10" style={{ width: 35, height: 30 }}>
                            <Image
                            src="/logoGrey.png"
                            alt="picture"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            />
                        </div>
                        <span>{item.ticket.to.country}</span>
                        </div>
                    <div className="border-b pb-4">
                        <label className="text-slate-300">
                        {item.ticket.airline.name}, AB-{item.ticketId}
                        </label>
                    </div>
                    <div className="flex flex-row justify-between py-4">
                        <div className="flex flex-row items-center justify-between w-2/5">
                        <label className="pr-20 font-semibold">Status</label>
                        {item.statusId == 1 ? (
                            <>
                            <Link href={`/payment/${item?.code}`}>
                                <button className="p-4 bg-orange-500 text-white rounded-lg">
                                Waiting for payments
                                </button>
                            </Link>
                            </>
                        ) : (
                            <>
                            <Link href={`/passes/${item?.code}`}>
                                <button className="p-4 bg-green-500 text-white rounded-lg">
                                Eticket Issued
                                </button>
                            </Link>
                            </>
                        )}
                        </div>
                        <div className="flex flex-row items-center text-blue-600 text-lg font-semibold">
                        <label className="p-4">View Details</label>
                        <IoIosArrowDown />
                        </div>
                    </div>
                    </div>
                );
                })
            : null}
        </div>
        </main>
    );
    }
