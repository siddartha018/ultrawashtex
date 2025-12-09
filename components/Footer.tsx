import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-blue-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
                <Image 
                   src="/Washtex logo.webp" 
                   alt="Ultra Washtex Logo" 
                   width={200} 
                   height={60} 
                   className="h-14 w-auto object-contain"
                />
            </Link>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            AP's biggest launderette service provider, offering premium laundry care with pickup & delivery, dry cleaning, and corporate solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-900">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li><Link href="/#services" className="hover:text-blue-600">Our Services</Link></li>
            <li><Link href="/points" className="hover:text-blue-600">Pickup Points</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-900">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
              <span>Plot No. 66,67, E-Block, Apparel Export Park, Autonagar, Gajuwaka, Visakhapatnam - 530 012. Andhra Pradesh, India.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="flex flex-col">
                <a href="tel:08912766222" className="hover:text-blue-600">0891 2766222</a>
                <a href="tel:08912766333" className="hover:text-blue-600">0891 2766333</a>
                <a href="tel:8790902819" className="hover:text-blue-600">8790902819</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400 shrink-0" />
              <a href="mailto:info@ultrawashtex.com" className="hover:text-blue-600">info@ultrawashtex.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
        © 2025 UltraWashTex. All rights reserved.
      </div>
    </footer>
  )
}

