'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Image from 'next/image';
import { FaRegCreditCard, FaCalendarAlt, FaLock } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { LuClock9 } from 'react-icons/lu';
import RenderPhoto from '@/utils/RenderPhoto';
import formatDate from '@/utils/FormatDate';
import formatTime from '@/utils/FormatTime';
import { useRouter } from 'next/navigation';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Barcode from 'react-barcode';

export default function Passes({ params }) {
    const router = useRouter();
    const code = params.passes
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const accessToken = Cookies.get('access-token');

    useEffect(() => {

        const getData = async (code, accessToken) => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets/${code}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const data = res.data;
        setData(data.data.result);
        console.log(data.data.result)
        } catch (error) {
            console.log("erro")
            console.error('Error:', error);
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
        }; 

        if (code) {
        getData(code, accessToken);
        } else {
        setLoading(false);
        }
    }, [code]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="flex flex-col bg-white w-3/5 h-fit px-20 py-12 rounded-lg">
            <div className="flex flex-row justify-between text-2xl font-bold mb-10">
            <label>Booking Pass</label>
            <label className="text-blue-600"><BsThreeDotsVertical /></label>
            </div>
            <div className='flex flex-row'>
            <div className="w-2/3 border p-4 pt-12" style={{height:450}}>
                <div className='flex flex-row justify-center items-center p-4'>
                    <Image src={RenderPhoto(data?.ticket.airline.name)} width={150} height={75} alt={data?.name} />
                    <div className="flex flex-row items-center font-bold text-xl py-2">
                        <span className="pr-5">{data.ticket.from.code}</span>
                        <div className="relative px-10" style={{ width: 30, height: 30 }}>
                            <Image
                            src="/logoGrey.png"
                            alt="picture"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            />
                        </div>
                        <span>{data.ticket.to.code}</span>
                        </div>
                </div>
            <div className="grid grid-cols-2 gap-x-12 m-10 gap-y-4 w-2/3">
                <div className="flex flex-col text-sm">
                    <label className="text-slate-400">Code</label>
                    <label>{`AB-${data.ticket.id}`}</label>
                </div>
                <div className="flex flex-col text-sm">
                    <label className="text-slate-400">Class</label>
                    <label>Economy</label>
                </div>
                <div className="flex flex-col text-sm">
                    <label className="text-slate-400">Terminal</label>
                    <label>A</label>
                </div>
                <div className="flex flex-col text-sm">
                    <label className="text-slate-400">Gate</label>
                    <label>{data.ticket.id}</label>
                </div>
            </div>
            <div className="flex flex-col text-sm  w-2/3 m-10">
                    <label className="text-slate-400">Departure</label>
                    <label>{`${formatDate(data?.ticket.takeoff)} • ${formatTime(
                        data?.ticket.takeoff
                    )}`}</label>
                </div>
        </div>
        <div className="w-1/3 border p-4 flex justify-center items-center " style={{height:450}}>
          <div className="transform  -rotate-90 scale-50">
            <Barcode value={data.ticket.code} />
          </div>
        </div>
        </div> 
    </div>
    );
    }
