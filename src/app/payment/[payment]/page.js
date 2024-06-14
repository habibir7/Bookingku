import Image from "next/image"
import { FaRegCreditCard,FaCalendarAlt, FaLock } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { LuClock9 } from "react-icons/lu"

export default function MyPayment({params}) {
    // const code = params.mypayment

    // useEffect(() => {
    //     const getData = async (code) => {
    //         try {
    //             console.log(code);
    //             const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/airlines/flight/${code}`);
    //             const data = res.data;
    //             console.log(data.data);
    //             setData(data.data);
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     };

    //     if (code) {
    //         getData(code);
    //     }
    // }, [code]);

    // console.log(data);
    return(
       
            <div className="flex flex-row bg-white w-3/4 h-3/4 px-16 py-28">
                <div className="flex flex-col w-1/2">
                    <label>
                        Payment Method
                    </label>
                    <div className="flex flex-col bg-gray-100 p-3 ">
                        <div className="flex justify-between  flex-row py-2">
                            <label>
                                Paypal
                            </label>
                            <span>
                            <Image src={"/pypl.png"} width={35} height={25} alt={"paypal"} />
                            </span>
                        </div>
                        <div className="flex justify-between  flex-row py-2">
                            <label>
                                Credit Card
                            </label>
                            <span>
                            <Image src={"/cdrcd.png"} width={95} height={40} alt={"credit Card"} />
                            </span>
                        </div>
                    </div>
                    <div className="p-2">
                        <label>
                                Card Number
                        </label>
                        <div className="relative flex items-center">
                            <FaRegCreditCard className="absolute left-3 text-gray-500" />
                            <input
                                type="text"
                                className="pl-10 p-2 rounded-sm border w-full"
                                placeholder="0000-0000-0000"
                            />
                        </div>
                        <div className="flex flex-row mt-2">
                            <div>
                            <label >
                                Expiry Date
                        </label>
                        <div className="relative flex items-center">
                            <FaCalendarAlt className="absolute left-3 text-gray-500" />
                            <input
                                type="text"
                                className="pl-10 p-2 rounded-sm border w-11/12"
                                placeholder="MM/YY"
                            />
                        </div>
                            </div>
                            <div>
                            <label >
                                CVC / CVV
                        </label>
                        <div className="relative flex items-center">
                            <FaLock className="absolute left-3 text-gray-500" />
                            <input
                                type="text"
                                className="pl-10 p-2 rounded-sm border w-full"
                                placeholder="000"
                            />
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 pl-2">
                    <label>
                        Summary
                    </label>
                    <div className="flex flex-row justify-between p-4 border-b">
                        <div className="flex flex-col">
                            <div className="flex flex-row text-base items-center">
                                <label>{`Pro(Billed Monthly)`}</label><IoIosArrowDown />
                            </div>
                            <label className="text-xs border-b border-blue-600 text-blue-600">Save 20% with annual billing</label>
                        </div>
                            <div className="flex flex-row items-center">
                                <label className="text-xl">{`$9.99`}</label><label>/Month</label>
                            </div>
                    </div>
                    <div className="flex flex-col p-4 border-b py-6">
                            <div className="flex flex-row text-sm justify-between pb-1">
                                <label>Referal Bonuses</label>
                                <label>{`-2.00%`}</label>
                            </div>
                            <div className="flex flex-row text-sm justify-between">
                                <div className="flex flex-row items-center">
                                <label>Vat</label>
                                <LuClock9 className="pl-1"/>
                                </div>
                                <label>{`-20%`}</label>
                            </div>
                    </div>
                    <div className="flex flex-row justify-between p-4 border-b">
                        <div className="flex flex-col">
                            <div className="flex flex-row text-base items-center">
                                <label>{`Today you pay(US Dollars)`}</label>
                            </div>
                            <label className="text-xs">{`After 30 days $9.59`}</label>
                        </div>
                            <div className="flex flex-row items-center">
                                <label className="text-base">{`$0`}</label>
                            </div>
                    </div>
                    <button className="flex w-full px-20 p-4 bg-blue-600 justify-center text-white rounded-lg">
                        Try it for free 30 days
                    </button>
                    <div className="flex justify-center">
                    <label className="inline-block text-xs text-blue-600 border-b border-blue-600">Have Promo Code ?</label>
                    </div>
                </div>
            </div>
    )
}