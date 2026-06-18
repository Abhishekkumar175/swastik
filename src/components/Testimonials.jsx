import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    quote: "Dr Nilesh is very accurate and thorough in his diagnosis ! He listens carefully to all my concerns and provided me with excellent care. Thank you doc for guiding me.",
    author: "Verified Patient Review"
  },
  {
    quote: "The doctor is very kind, patient, and truly cares about patients. They listen carefully to every problem and explain the treatment in a very simple way. I felt very reassured.",
    author: "Verified Patient Review"
  },
  {
    quote: "Best doctor in lanka bhu side area. I was suffering for the last 1 year with a vomiting problem after eating. Dr properly diagnosed and resolved it.",
    author: "Verified Patient Review"
  },
  {
    quote: "Excellent care and very knowledgeable. Highly recommended for any gastric or liver related issues.",
    author: "Verified Patient Review"
  },
  {
    quote: "Great facility and the doctor takes time to listen to all issues. Very satisfied with the treatment.",
    author: "Verified Patient Review"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0f766e] relative overflow-hidden" id="reviews">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-teal-300 rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-200 font-bold tracking-wider text-sm uppercase mb-3 block">Real Patient Experiences</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">Trusted by the Community</h2>
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-amber-400">4.8</span>
              <div className="flex text-amber-400">
                <Star size={24} fill="currentColor" />
                <Star size={24} fill="currentColor" />
                <Star size={24} fill="currentColor" />
                <Star size={24} fill="currentColor" />
                <Star size={24} fill="currentColor" />
              </div>
            </div>
            <p className="text-teal-100 font-medium text-lg">910 Ratings across the web</p>
            <p className="text-teal-200/70 text-sm">Jd rating index based on 910 ratings</p>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, index) => (
            <div key={index} className="flex-none w-[85vw] sm:w-[400px] snap-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 relative">
              <Quote className="absolute top-6 right-6 text-white/10 w-16 h-16 transform -scale-x-100 -rotate-12" />
              
              <div className="flex gap-1 text-amber-400 mb-6">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              
              <p className="text-white text-lg font-medium leading-relaxed mb-8 relative z-10">
                "{review.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/30 flex items-center justify-center text-white font-bold">
                  {review.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">{review.author}</span>
                  <span className="text-teal-200 text-xs font-medium">Verified Source</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a href="https://www.justdial.com/Varanasi/Swastik-Gastro-Liver-Clinic-Dr-Nilesh-Kumar-Rai-Near-Rashmi-Nagar-Colony-And-Saket-Nagar-Colony-Lanka/0542PX542-X542-230205053625-F9A9_BZDET" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#0f766e] bg-white rounded-full hover:bg-teal-50 transition-colors shadow-lg shadow-black/10">
            Read all 910 Reviews on Justdial
          </a>
        </div>
      </div>
    </section>
  );
}
