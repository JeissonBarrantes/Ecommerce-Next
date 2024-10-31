"use client"

import Image from 'next/image';
import {useState } from 'react';
import Link from 'next/link';

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div className="">
        <Image src="/menu.png" alt="Imagen de cuero" width={28} height={28} className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && (
          <div className= "bg-red-50 text-black absolute top-20 left-0 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
            <Link href="/" onClick={() => setIsOpen(false)}>Homepage</Link>
            <Link href="/menu" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="/" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
    </div>
  )
}

export default Menu