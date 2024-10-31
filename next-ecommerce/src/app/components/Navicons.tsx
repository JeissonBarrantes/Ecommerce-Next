"use client"

import Image from "next/image"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CartModal from "./CartModal";

const Navicons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);


    //Temporal
    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login");
        } 
        setIsProfileOpen((prev) => !prev);
        
    };


    const router = useRouter();

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative"> 
        <Image src="/profile.png" alt="profile" width={22} height={22} className="cursor-pointer" onClick={handleProfile} />
        {isProfileOpen && <div className="absolute top-12 p-4 left-0 text-sm rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div>Logout</div>
          </div>}
        <Image src="/notification.png" alt="notification" width={22} height={22} className="cursor-pointer" />
        <div className="relative cursor-pointer">
        <Image src="/cart.png" alt="profile" width={22} height={22} onClick={() => setIsCartOpen((prev) => !prev)} />
        <div className="absolute -top-2 -right-2 text-xs w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center">2</div>
        {isCartOpen && <CartModal/>}
        </div>
    </div>
  )
}

export default Navicons