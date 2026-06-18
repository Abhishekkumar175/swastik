import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';

export default function Footer() {
  const schedule = [
    { day: 'Monday', hours: '10:00 AM – 5:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM – 5:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM – 5:00 PM' },
    { day: 'Thursday', hours: '10:00 AM – 5:00 PM' },
    { day: 'Friday', hours: '10:00 AM – 5:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
    { day: 'Sunday', hours: 'Closed / Emergency Only', isClosed: true },
  ];

  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t-4 border-[#0ea5e9]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Block: Location & Access Details */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-heading flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0d9488] rounded flex items-center justify-center text-white text-sm">
                +
              </div>
              Swastik Gastro & Liver Clinic
            </h3>
            
            <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
              A premier center for comprehensive digestive healthcare, dedicated to providing advanced diagnostic and therapeutic care with a patient-first approach.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-[#0ea5e9]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Physical Address</h4>
                  <p className="text-slate-400 leading-relaxed">
                    B31/82K, Rashmi Nagar Colony,<br />
                    Saket Nagar Colony, Lanka,<br />
                    Varanasi, Uttar Pradesh 221005
                  </p>
                  <p className="text-sm text-slate-500 mt-2 italic">
                    📍 Landmark Context: Prime central location, easily accessible via local public transportation from the Lanka BHU side.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-[#0ea5e9]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Direct Line</h4>
                  <a href="tel:07307534075" className="text-2xl font-bold text-[#0ea5e9] hover:text-white transition-colors">
                    073075 34075
                  </a>
                </div>
              </div>
            </div>

            {/* Digital Map Integration */}
            <div className="mt-8 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 h-64 shadow-inner">
              <iframe 
                title="Swastik Gastro & Liver Clinic Location"
                src="https://maps.google.com/maps?q=Swastik%20Gastro%20&%20Liver%20Clinic,%20Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Block: Explicit Consultation Timings */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-white mb-6 font-heading flex items-center gap-3">
              <Clock className="text-[#0d9488]" size={28} />
              Consultation Timings
            </h3>
            
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden shadow-inner">
              <div className="p-1">
                {schedule.map((slot, index) => (
                  <div 
                    key={slot.day} 
                    className={`flex justify-between items-center p-4 rounded-xl mb-1 ${slot.day === 'Sunday' ? 'bg-rose-950/20' : 'hover:bg-slate-700/50 transition-colors'}`}
                  >
                    <span className={`font-medium ${slot.day === 'Sunday' ? 'text-rose-400' : 'text-slate-300'}`}>
                      {slot.day}
                    </span>
                    <span className={`font-bold text-sm tracking-wide ${slot.day === 'Sunday' ? 'text-rose-500' : 'text-white bg-slate-700/80 px-3 py-1 rounded-md'}`}>
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-5 bg-[#0d9488]/10 border border-[#0d9488]/30 rounded-xl">
              <h4 className="text-teal-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                Walk-ins vs Appointments
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                While walk-ins are accepted, we highly recommend booking an appointment in advance to minimize your waiting time. Emergency cases are prioritized.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#0b1121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 Swastik Gastro & Liver Clinic. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-slate-600">Designed for Patient Accessibility</span>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
