import { MapPin, PhoneCall, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0f766e] text-white text-sm py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center z-50 relative">
      <div className="flex items-center gap-2 mb-2 md:mb-0 text-teal-50">
        <MapPin size={16} className="text-teal-200" />
        <span className="hidden md:inline">B31/82K, Rashmi Nagar Colony, Saket Nagar Colony, Lanka, Varanasi</span>
        <span className="md:hidden">Lanka, Varanasi</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
        <div className="flex items-center gap-2 font-medium">
          <PhoneCall size={16} className="text-teal-200" />
          <a href="tel:07307534075" className="hover:text-teal-200 transition-colors">Emergency: 073075 34075</a>
        </div>
        <div className="flex items-center gap-2 text-teal-50">
          <Clock size={16} className="text-teal-200" />
          <span>Mon - Sat (10:00 AM - 5:00 PM)</span>
        </div>
      </div>
    </div>
  );
}
