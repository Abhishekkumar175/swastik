import { CheckCircle2, Award, GraduationCap } from "lucide-react";

export default function DoctorProfile() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0d9488]/20 to-[#0ea5e9]/20 rounded-3xl transform -rotate-3 scale-105" />
            <div className="relative aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white group">
              <img
                src="/doctor.png"
                alt="Dr. Nilesh Kumar Rai"
                className="absolute inset-0 w-full h-full object-cover  transition-transform duration-500 group-hover:scale-105"
                
              />

              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#0d9488]">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Senior Consultant
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Over 10+ Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Credentials */}
          <div className="order-1 lg:order-2">
            <span className="text-[#0ea5e9] font-bold tracking-wider text-sm uppercase mb-3 block">
              Meet Your Consultant Specialist
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              Dr. Nilesh Kumar Rai
            </h2>
            <p className="text-xl text-[#0d9488] font-semibold mb-8">
              Senior Gastroenterologist & Hepatology Specialist
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                    <GraduationCap size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Academic Qualifications
                  </h4>
                  <p className="text-slate-700 font-medium text-lg leading-snug">
                    MBBS, M.D. (Med.), D.M. (Gastro)
                  </p>
                  <p className="text-slate-500 mt-1">
                    Institute of Medical Sciences, Banaras Hindu University (IMS
                    BHU)
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                Swastik Gastro & Liver Clinic has established itself as a
                premier center for comprehensive digestive healthcare near the
                Lanka BHU area. Dr. Nilesh Kumar Rai is widely recognized for
                his thorough diagnostic accuracy, patient-first approach, and
                exceptional care standard in managing both acute and chronic
                gastrointestinal conditions.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Evidence-based treatment protocols",
                "Compassionate patient-doctor communication",
                "Advanced endoscopic procedural expertise",
                "Specialized liver disease management",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2
                    className="text-[#0d9488] mr-3 mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
