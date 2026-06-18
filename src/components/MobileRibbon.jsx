import { Phone, CalendarPlus } from 'lucide-react';

export default function MobileRibbon() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex shadow-[0_-4px_20px_rgba(0,0,0,0.15)] bg-white border-t border-slate-200 safe-area-bottom">
      <a 
        href="tel:07307534075" 
        className="flex-1 flex flex-col items-center justify-center py-3 bg-white text-[#0f766e] active:bg-teal-50 transition-colors border-r border-slate-200"
      >
        <Phone size={20} className="mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Tap to Call</span>
      </a>
      
      <a 
        href="#booking-form" 
        className="flex-1 flex flex-col items-center justify-center py-3 bg-[#0ea5e9] text-white active:bg-[#0284c7] transition-colors"
      >
        <CalendarPlus size={20} className="mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Book Form</span>
      </a>
    </div>
  );
}
