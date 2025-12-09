'use client'

import Image from "next/image";
import Link from "next/link";
import { EmblaCarousel } from "@/components/ui/Carousel";
import { MapPin, Shirt, Truck, Building2, Clock, Box, Droplets, Loader2 } from "lucide-react";
import { useState } from "react";
import { pickupPoints } from "@/lib/data";

export default function Home() {
  const [loadingLocation, setLoadingLocation] = useState(false);

  const heroSlides = [
    
    
    <div key="1" className="relative h-[500px] w-full rounded-2xl overflow-hidden">
       <img src="/YOGI0398.jpg" alt="Washtex Operations" className="object-cover w-full h-full" />
    </div>,
    <div key="2" className="relative h-[500px] w-full rounded-2xl overflow-hidden">
       <img src="/YOGI0406.jpg" alt="Washtex Staff" className="object-cover w-full h-full" />
    </div>,
    <div key="3" className="relative h-[500px] w-full rounded-2xl overflow-hidden">
    <img src="/YOGI0359.jpg" alt="Washtex Facility" className="object-cover w-full h-full" />
 </div>,
    <div key="4" className="relative h-[500px] w-full rounded-2xl overflow-hidden">
    <img src="/washtex folding image 1.png" alt="Washtex Folding" className="object-cover w-full h-full" />
  </div>,
    <div key="5" className="relative h-[500px] w-full rounded-2xl overflow-hidden">
     <img src="/Washtex folding image 2.png" alt="Washtex Folding Process" className="object-cover w-full h-full" />
  </div>,
  <div key="6" className="relative h-[500px] w-full rounded-2xl overflow-hidden">
     <img src="/Washtex folding image 3.png" alt="Washtex Folding Service" className="object-cover w-full h-full" />
  </div>,
  ];

  const handleFindNearestPickup = () => {
    setLoadingLocation(true);
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        findNearestAndNavigate(latitude, longitude);
        setLoadingLocation(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Unable to retrieve your location. Please check your permissions.");
        setLoadingLocation(false);
      }
    );
  };

  const findNearestAndNavigate = (userLat: number, userLng: number) => {
    let nearestPoint = null;
    let minDistance = Infinity;

    pickupPoints.forEach(point => {
      const distance = getDistanceFromLatLonInKm(userLat, userLng, point.lat, point.lng);
      if (distance < minDistance) {
        minDistance = distance;
        nearestPoint = point;
      }
    });

    if (nearestPoint) {
      // @ts-ignore
      const url = `https://www.google.com/maps/dir/?api=1&destination=${nearestPoint.lat},${nearestPoint.lng}`;
      window.open(url, '_blank');
    }
  };

  // Haversine formula to calculate distance
  function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-block bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full w-fit">
            AP's Biggest Launderette Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-500 leading-tight">
            Premium Laundry At <span className="text-yellow-500">Your Doorstep</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Experience professional laundry care with pickup & delivery, dry cleaning, and corporate services. Find your nearest pickup point in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={handleFindNearestPickup}
              disabled={loadingLocation}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loadingLocation ? <Loader2 className="w-5 h-5 animate-spin" /> : <MapPin className="w-5 h-5" />}
              {loadingLocation ? 'Locating...' : 'Find Nearest Pickup'}
            </button>
            <Link href="#services" className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-semibold py-3 px-8 rounded-lg flex items-center justify-center transition-colors">
              Our Services
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold text-blue-500">50+</div>
              <div className="text-sm text-gray-600">Pickup Points</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500">100%</div>
              <div className="text-sm text-gray-600">Professional Care</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500">99%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <EmblaCarousel slides={heroSlides} className="w-full rounded-2xl shadow-xl" />
          
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-1000 hidden md:flex">
             <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-500" />
             </div>
             <div>
                <div className="font-bold text-gray-900">Quick Pickup</div>
                <div className="text-sm text-gray-500">Nearest point in 2 km</div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-gradient-to-b from-white to-blue-50/30 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive laundry solutions tailored to meet all your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shirt className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dry Cleaning</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Professional dry cleaning for delicate garments, suits, and formal wear with care.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Stain removal</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Press & fold</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Same-day service</li>
              </ul>
            </div>

            {/* Service 2 */}
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <PackageIcon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pickup & Delivery</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Convenient doorstep pickup and delivery service at your preferred time.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Free pickup</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Track order</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Flexible timing</li>
              </ul>
            </div>

            {/* Service 3 */}
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Laundry</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Bulk laundry solutions for hotels, hospitals, and corporate offices.
              </p>
               <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Volume discount</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Dedicated service</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Quality assured</li>
              </ul>
            </div>

            {/* Service 4 */}
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Express Service</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Get your laundry done in as little as 24 hours with our express service.
              </p>
               <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>24h turnaround</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Priority handling</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Premium care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Ultrawashtex Works</h2>
            <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
                Keep up a vital separation from the hussle of Washing Cloths. Book your Laundry in your general region with Ultrawashtex.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 relative">
                         <Box className="w-10 h-10 text-blue-500" />
                         <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Pick up and Sort</h3>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 relative">
                         <Droplets className="w-10 h-10 text-blue-500" />
                         <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Wash and Dry</h3>
                </div>

                 {/* Step 3 */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 relative shadow-lg">
                         <div className="grid grid-cols-2 gap-1">
                             <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                             <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                             <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                             <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                         </div>
                         <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Fold and Iron</h3>
                </div>

                 {/* Step 4 */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 relative">
                         <Truck className="w-10 h-10 text-blue-500" />
                         <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Pack and Delivery</h3>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}

// Helper component for package icon since it's not exported as PackageIcon sometimes or name conflict
function PackageIcon(props: any) {
    return (
        <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22v-10" />
    </svg>
    )
}
