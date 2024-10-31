import Link from 'next/link';
import Menu from './Menu';
import Image from 'next/image';
import SearchBar from './SearchBar';
import Navicons from './Navicons';


const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <div className="h-full flex items-center justify-between md:hidden">
      {/* Mobile */} 
      <Link href="/" className="text-2xl tracking-wide">PURU</Link>
       <Menu/>
      </div>
      {/* Bigger screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left */}
        <div className=" w-1/3 xl:w-1/2 flex items-center gap-12">
        <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.png" alt="Logo" width={24} height={24} />
        <div className="text-2xl tracking-wide">PURU</div>
        </Link>
        <div className="hidden xl:flex gap-4">
          <Link href="/" className="text-sm font-medium">Home</Link>
          <Link href="/" className="text-sm font-medium">About</Link>
          <Link href="/" className="text-sm font-medium">Contact</Link>
          <Link href="/" className="text-sm font-medium">Stores</Link>
        </div>
        </div>
        {/* Right */}
        <div className=" w-2/3 flex items-center justify-between gap-8">
         <SearchBar/>
         <Navicons/>
        </div>
      </div>
    </div>
     
  )
}

export default Navbar