'use client'

import { EmblaCarousel } from "@/components/ui/Carousel";
import { Users, CheckCircle } from "lucide-react";

export default function AboutPage() {
    const aboutSlides = [
        <div key="1" className="relative h-[400px] w-full rounded-2xl overflow-hidden">
          <img src="/YOGI0359.jpg" alt="Laundry Service Truck" className="object-cover w-full h-full" />
        </div>,
        <div key="2" className="relative h-[400px] w-full rounded-2xl overflow-hidden">
           <img src="/YOGI0398.jpg" alt="Laundry Facility" className="object-cover w-full h-full" />
        </div>,
        <div key="3" className="relative h-[400px] w-full rounded-2xl overflow-hidden">
           <img src="/YOGI0406.jpg" alt="Laundry Staff" className="object-cover w-full h-full" />
        </div>,
         <div key="4" className="relative h-[400px] w-full rounded-2xl overflow-hidden">
          <img src="/washtex folding image 1.png" alt="Folding Service" className="object-cover w-full h-full" />
        </div>,
    ];

     const inaugurationSlides = [
        <div key="1" className="relative h-[300px] w-full rounded-2xl overflow-hidden">
          <img src="/inauguration-C8YibDyT.png" alt="Inauguration Event" className="object-cover w-full h-full" />
        </div>,
         <div key="2" className="relative h-[300px] w-full rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2940&auto=format&fit=crop" alt="Staff" className="object-cover w-full h-full" />
        </div>,
    ];

  return (
    <main className="flex flex-col items-center">
      {/* Page Header */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50/50 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold border border-blue-100">
           ISO 9001:2008 Certified
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full max-w-7xl px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Are</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                    Ultra Washtex is an ISO 9001:2008 certified Company and is one of the leading commercial and industrial laundries, offering premium laundry services to various Star Hotels & Resorts, Government Sectors (Railway/RTC/Navy), Leisure, Restaurants, Pharmaceutical companies, New Garments & Domestic Sector.
                </p>
                <p>
                    The company is one of the most reliable names in the service industry, involved in providing customized Laundry Services.
                </p>
            </div>
        </div>
        <div>
             <EmblaCarousel slides={aboutSlides} className="w-full rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="w-full max-w-7xl px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BuildingIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-sm text-gray-500 mb-1">01 Jan 2010</div>
                <h3 className="font-bold text-gray-900">Domestic Facility Inaugurated</h3>
            </div>
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUpIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-sm text-gray-500 mb-1">05 Sep 2010</div>
                <h3 className="font-bold text-gray-900">Industrial Facility Launched</h3>
            </div>
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <AwardIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-sm text-gray-500 mb-1">06 Nov 2015</div>
                <h3 className="font-bold text-gray-900">Express Laundry Service</h3>
            </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-2xl text-center text-gray-600 max-w-4xl mx-auto">
            Our service range is renowned for its reliability and prompt delivery. Ultra Washtex empowered with state-of-the-art imported machinery and spread over an extent of 2 Acres in APIIC industrial area has a capacity to process 20,000 garments per day with a turnaround time of less than 24 hours. It is also known to be one of Asia's biggest facilities for commercial laundry.
        </div>
      </section>

      {/* Leading Laundry Services */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50/20 py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ultra Washtex Leading Laundry Services</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                      <EmblaCarousel slides={inaugurationSlides} className="w-full rounded-2xl shadow-lg" />
                  </div>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                      <p>
                        The facility was appreciated by Honourable Minister for Revenue, Relief and Rehabilitation Mr Dharmana Prasada Rao Guest of Honour. While MLC Mr Gade Srinivasulu Naidu inaugurated the Boiler room, MLA Mr Chintalpudi Venkataramaiah inaugurated the Hospital Division. Mr Tynala Vijaya Kumar inaugurated Garments Division.
                      </p>
                      <p>
                        The facility offers both dry and wet washing by using state of art technologies, wet washing is undertaken without the usage of harmful detergents. All kinds of stain removal are guaranteed by using imported stain removal formulations.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Vertices */}
      <section className="w-full py-16 px-6 md:px-12 text-center">
           <h2 className="text-3xl font-bold text-gray-900 mb-2">Vertices of ULTRA WASHTEX</h2>
           <p className="text-blue-500 font-medium mb-12">Leading Laundry Services</p>
           
           <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               {['Leading Laundry Services', 'Steam Iron', 'Dry Cleaning', 'Rolling', 'Polishing', '100% Pure Petrol Wash', 'Stain Removal Services'].map((service, idx) => (
                   <div key={idx} className="bg-white border border-gray-100 py-4 px-6 rounded-lg font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                       {service}
                   </div>
               ))}
           </div>
      </section>

      {/* Clients */}
       <section className="w-full py-16 px-6 md:px-12 text-center bg-gradient-to-t from-blue-50 to-white mb-12">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-500">
               <Users className="w-8 h-8" />
           </div>
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
           <p className="text-gray-600">Our struggle and dedication make us successful but our partners make it more easy as we thought.</p>
       </section>

    </main>
  );
}

// Helpers for icons
function BuildingIcon(props: any) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
    )
}

function TrendingUpIcon(props: any) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
    )
}

function AwardIcon(props: any) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
    )
}

