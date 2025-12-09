import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-white to-blue-50/50 py-4 px-6 md:px-12 flex items-center justify-between shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
             <Image 
               src="/Washtex logo.webp" 
               alt="Ultra Washtex Logo" 
               width={200} 
               height={60} 
               className="h-20 w-auto object-contain"
               priority
             />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/#services" className="hover:text-blue-600 transition-colors">Services</Link>
        <Link href="/points" className="hover:text-blue-600 transition-colors">Pickup Points</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
      </div>
      {/* Mobile menu button could go here */}
    </nav>
  )
}

