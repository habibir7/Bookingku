import { Place } from "@/components/Place";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-white w-screen">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start justify-center pl-40">
          <label className="text-7xl ">
              Find Your <span className="text-blue-400">Flight</span>
          </label>
          <label>
              and explore the world with us
          </label>
        </div>
        <Image src={'/landing2.png'} width={500} height={500}  alt=""/>
      </div>
      <div className="flex flex-row justify-between items-center">
      <Image className="-mt-40" src={'/landing1.png'} width={750} height={500} alt=""/>
      <Image src={'/blob.png'} width={200} height={200} alt="" />
      </div>
      <Place />
    </main>
  );
}
