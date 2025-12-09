'use client'

import { MapPin, Phone, Clock } from "lucide-react";
import { pickupPoints } from "@/lib/data";

export default function PointsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Pickup Points</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find a Washtex pickup point near you. We have over 50+ locations across the city to serve you better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pickupPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{point.area}</h3>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600">
                <p className="leading-relaxed">
                  {point.address},<br />
                  {point.city}
                </p>
                
                <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <a href={`tel:${point.phone}`} className="hover:text-blue-600 font-medium">
                    {point.phone}
                  </a>
                </div>

                 <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{point.timings}</span>
                </div>
                 <div className="mt-4 pt-3 border-t border-gray-100">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 text-xs font-semibold flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3" />
                      Get Directions
                    </a>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action for Franchise or more info if needed */}
        <div className="mt-16 bg-blue-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to open a franchise?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Join the largest laundry network in AP. Contact us for franchise opportunities.</p>
            <a href="/contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block">
                Contact Us
            </a>
        </div>
      </div>
    </main>
  );
}
