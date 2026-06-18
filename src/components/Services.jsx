import { Stethoscope, Activity, Syringe, HeartPulse } from 'lucide-react';

const services = [
  {
    title: 'Gastro & Liver Specialist Consultation',
    description: 'Comprehensive evaluation and medical management strategies for chronic acidity, recurring vomiting issues, hepatitis, fatty liver, and complex abdominal distress.',
    icon: Stethoscope,
    color: 'text-sky-500',
    bg: 'bg-sky-50'
  },
  {
    title: 'Endoscopy & Colonoscopy',
    description: 'High-definition diagnostic luminal procedures to safely investigate upper and lower GI tracts with complete patient comfort prioritization.',
    icon: Activity,
    color: 'text-teal-500',
    bg: 'bg-teal-50'
  },
  {
    title: 'Therapeutic Endoscopy',
    description: 'Advanced minimally invasive interventions directly targeting structural abnormalities, polyps, and internal gastrointestinal clearings.',
    icon: Syringe,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    title: 'Fibroscan Services',
    description: 'Non-invasive, precise quantification tracking for liver stiffness and fatty liver conditions without needing surgical biopsies.',
    icon: HeartPulse,
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0d9488] font-bold tracking-wider text-sm uppercase mb-3 block">Specialized Clinical Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Advanced Digestive & Liver Care</h2>
          <p className="text-lg text-slate-600">
            Providing state-of-the-art diagnostic and therapeutic procedures with a focus on patient safety, comfort, and accurate clinical outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#0d9488] transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
              
              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#0d9488] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
