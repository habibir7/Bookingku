'use client';
import axios from 'axios';
import Cookies from "js-cookie";
import Image from "next/image"
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoAlertFill } from "react-icons/go";
import RenderPhoto from '@/utils/RenderPhoto';
import formatDate from '@/utils/FormatDate';
import formatTime from '@/utils/FormatTime';

export default function Booking({ params }) {
    const router = useRouter();
    const code = params.booking;
    const [data, setData] = useState(null);
    const [message, setMessage] = useState(null);
    const accessToken = Cookies.get('access-token');

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const title = formData.get('title1');
        const fullname = formData.get('fullname1');
        const nationality = formData.get('nationality1');

        const data = {
            title,
            fullname,
            nationality
        };

        const formBody = Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets/${code}`,
                formBody,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const result = response.data;

            if (response.status === 200) {
                console.log(result.data.code);
                setMessage(`Booking code: ${result.data.code}`);
                // Uncomment the next line if you want to redirect after successful booking
                router.push(`/payment/${result.data.code}`);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    useEffect(() => {
        const getData = async (code) => {
            try {
                console.log(code);
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/airlines/flight/${code}`);
                const data = res.data;
                console.log(data.data);
                setData(data.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (code) {
            getData(code);
        }
    }, [code]);

    console.log(data);
    return (
        <div>
            <nav className="pl-14 pt-20 pb-20 rounded-b-3xl" style={{ backgroundImage: 'url(/searchbg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></nav>
            <div className="container mx-auto p-4 -mt-32">
                <div className="flex justify-between">
                    <div className="w-2/3">
                        <h2 className="text-2xl text-white font-bold mb-4">Contact Person Details</h2>
                        <form className="space-y-4 " onSubmit={handleSubmit}>
                            <div className="bg-white p-8 rounded-lg m-4">

                                <div className="m-4">
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="m-4">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="m-4">
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phonenum"
                                        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="m-4 bg-red-200 p-4 rounded-lg flex items-center">
                                    <span>
                                        <GoAlertFill className="ml-2 text-2xl text-red-600" />
                                    </span>
                                    <label className="ml-4"> Make sure the customer data is correct</label>
                                </div>
                            </div>

                            <h2 className="text-2xl font-medium text-gray-900 p-8">Passenger Details</h2>
                            <div className="mt-6 bg-white p-10 rounded-lg m-4">
                                <div className="mt-2 space-y-4">
                                    <div className="m-4 bg-blue-200 p-4 rounded-lg flex items-center justify-between">
                                        <label>Passenger: 1 Adult</label>
                                        <div className="flex items-center">
                                            <label className="mr-2">Same as contact person</label>
                                            <label className="flex cursor-pointer select-none items-center">
                                                <div className="relative">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className="sr-only"
                                                    />
                                                    <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
                                                    <div className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''}`}></div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="m-4">
                                        <label className="block text-sm font-medium text-gray-700">Title</label>
                                        <input
                                            type="text"
                                            name="title1"
                                            className="mt-1 block w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div className="m-4">
                                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullname1"
                                            className="mt-1 block w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div className="m-4">
                                        <label className="block text-sm font-medium text-gray-700">Nationality</label>
                                        <input
                                            type="text"
                                            name="nationality1"
                                            className="mt-1 block w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-medium text-gray-900 p-8">Passenger Details</h2>
                            <div className="mt-6 bg-white p-10 rounded-lg m-4">
                                <div className="mt-2 space-y-4">
                                    <div className="m-4 flex items-center justify-between border-b">
                                        <div className="flex items-center">
                                            <input type="checkbox" className="form-checkbox h-5 w-5 bg-blue-400" />
                                            <span><label className="block mx-4 text-lg font-medium text-gray-700">Travel insurance</label></span>
                                        </div>
                                        <div>
                                            <span><label className="text-blue-400 text-xl">$ 2,00</label><label>/pax</label></span>
                                        </div>
                                    </div>
                                    <label>Get travel compensation up to $ 10.000,00</label>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit" className=" bg-blue-400 p-4 rounded-lg m-4 px-10 text-white">Proceed to payment</button>
                            </div>
                        </form>
                        {message && <p className="text-center mt-4 text-green-500">{message}</p>}
                    </div>

                    <div className="w-1/3">
                        <h2 className="text-xl text-white font-bold mb-4">Flight Details</h2>
                        <div className="flex flex-col bg-white p-6 rounded-lg">
                            <div className="flex flex-row items-center mb-4">
                                <Image src={RenderPhoto(data?.name)} width={150} height={75} alt={data?.name} />
                                <p className="ml-4 ">
                                    {data?.name}
                                </p>
                            </div>
                            <div className="flex items-center space-x-2 text-lg my-4">
                                <span>{`${data?.from?.country} (${data?.from?.code})`}</span>
                                <Image src="/logoGrey.png" width={20} height={20} alt="Logo" />
                                <span>{`${data?.to?.country} (${data?.to?.code})`}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-400 text-sm my-2 mb-4">
                                <span>{`${formatDate(data?.takeoff)} • ${formatTime(data?.takeoff)} - ${formatTime(data?.landing)}`}</span>
                                <span></span>
                            </div>
                            <Image src={'/bookdetail.png'} className="my-2 " width={150} height={60} alt="refundable" />
                            <div className="border-t flex space-x-2 justify-between my-4 p-2 text-lg">
                                <strong>Total Payment:</strong> 
                                  <div className='flex items-center'>
                                      <span className="text-blue-400 text-2xl mr-2">{`$${data?.price}`}</span> <IoIosArrowDown className="text-blue-400 text-2xl"/>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
