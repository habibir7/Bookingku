import { SiFacebook,SiTwitter,SiInstagram,SiYoutube } from "@icons-pack/react-simple-icons";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-white text-black p-14">
      <div className="max-w-7xl mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo with Description */}
          <div>
            <Image src="/logo.png" alt="Footer Logo" className="h-10 mb-4" width={200} height={40} />
            <p className="text-sm">Find your Flight and explore the world with us. We will take care of the rest</p>
            <p className="text-sm flex mt-10">© Ankasa. All Rights Reserved.</p>
          </div>
          {/* Feature */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Feature</h4>
            <ul className="text-sm text-gray-400">
              <li className="mt-2">Find Ticket</li>
              <li className="mt-2">My Booking</li>
              <li className="mt-2">Chat</li>
              <li className="mt-2">Notification</li>
              {/* Add more features as needed */}
            </ul>
          </div>
          {/* Download App */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Download Bookingku App</h4>
            <div className="flex flex-col">
              <Image src="/app-store-badge.png" alt="App Store" className="w-52" width={208} height={100}/>
              <Image src="/play-store-badge.png" alt="Play Store" className="w-52 mt-1" width={208} height={100}/>
            </div>
          </div>
          {/* Follow Us with Social Media Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <SiFacebook className="h-6 w-6" />
              <SiTwitter className="h-6 w-6" />
              <SiInstagram className="h-6 w-6" />
              <SiYoutube className="h-6 w-6" />
              {/* Add more Simple Icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
