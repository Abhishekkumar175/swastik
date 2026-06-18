import { useState } from 'react';
import { Star, ChevronRight, Phone } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    day: '',
    shift: '',
    service: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🩺 New Appointment Request

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Preferred Day: ${formData.day}
⏰ Preferred Shift: ${formData.shift}
🏥 Service: ${formData.service}
`;

    const whatsappUrl = `https://wa.me/918210826734?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      phone: '',
      day: '',
      shift: '',
      service: '',
    });
  };

  return (
    <section className="relative bg-slate-50 overflow-hidden" id="home">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/50 skew-x-12 translate-x-32 hidden lg:block" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#0d9488]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 md:pt-8 md:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
              <div className="flex text-amber-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-sm font-semibold text-slate-800">
                4.8 Rating{' '}
                <span className="text-slate-500 font-normal">
                  (873+ Google Reviews)
                </span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Expert Gastroenterology &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#0ea5e9]">
                Hepatology Care
              </span>{' '}
              in Varanasi
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              <strong className="text-slate-800">
                Dr. Nilesh Kumar Rai
              </strong>{' '}
              (DM Gastro, IMS BHU) provides advanced diagnostic and therapeutic
              care for complex liver, stomach, and digestive disorders at
              Swastik Gastro & Liver Clinic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#booking-form"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-[#0d9488] rounded-xl hover:bg-[#0f766e] hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-200"
              >
                Request Appointment Online
                <ChevronRight size={20} className="ml-2" />
              </a>

              <a
                href="tel:07307534075"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-[#0f766e] bg-white border-2 border-[#0d9488]/20 rounded-xl hover:bg-teal-50 hover:border-[#0d9488] transition-all duration-200"
              >
                <Phone size={20} className="mr-2" />
                Call Clinic Directly
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                  🏥
                </div>
                <span>Modern Setup</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                  🔬
                </div>
                <span>Advanced Diagnostics</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5 w-full" id="booking-form">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0d9488] to-[#0ea5e9]"></div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Schedule a Consultation
                </h3>
                <p className="text-sm text-slate-500">
                  Fill out this quick form. Our desk staff will call you back to
                  fix an exact slot.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all"
                    placeholder="e.g. 98765 43210"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="day"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Preferred Day
                    </label>

                    <select
                      id="day"
                      value={formData.day}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          day: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="shift"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Preferred Shift
                    </label>

                    <select
                      id="shift"
                      value={formData.shift}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          shift: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Shift</option>
                      <option value="Morning Session">
                        Morning Session
                      </option>
                      <option value="Afternoon Session">
                        Afternoon Session
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        service: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select Service</option>
                    <option value="General Consultation">
                      General Consultation
                    </option>
                    <option value="Endoscopy">Endoscopy</option>
                    <option value="Colonoscopy">Colonoscopy</option>
                    <option value="Fibroscan">Fibroscan</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-2 text-base font-bold text-white bg-[#0ea5e9] rounded-xl hover:bg-[#0284c7] hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-200"
                >
                  Request Callback Tracking
                </button>

                <p className="text-xs text-slate-400 text-center mt-4">
                  Please note: This form registers a callback request. Our team
                  will verify live physical register availability before locking
                  your slot.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

