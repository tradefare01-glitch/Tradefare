import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Who can sign up?',
    answer:
      'Any current student at one of our 8 live campuses (more rolling out monthly). We verify with school-issued email + matric number, so every account on the platform belongs to a real student on a real campus.',
  },
  {
    question: 'How does escrow actually work?',
    answer:
      'When you pay for an item or service, the money goes into escrow — not directly to the seller. The seller only receives payment after you confirm delivery or task completion. If there\'s a dispute, our team mediates within 24 hours.',
  },
  {
    question: "What's the platform cut?",
    answer:
      'We charge a 1% service fee on completed transactions. Anything under ₦1,000 is completely free. For errands, the fee applies only to the runner\'s service charge, not your shopping budget.',
  },
  {
    question: 'Is being a Runner safe?',
    answer:
      'Yes! All runners are verified students with their school credentials on file. We track all errands in real-time, and payment is held in escrow until the task is confirmed complete.',
  },
  {
    question: 'Can I trade across campuses?',
    answer:
      'Currently, trading is limited to your registered campus to ensure safe, in-person exchanges. We\'re working on a secure inter-campus shipping solution for the future.',
  },
  {
    question: 'What happens when I graduate?',
    answer:
      'Graduates can keep their accounts for up to 6 months after graduation to complete ongoing transactions. After that, you can export your data or transfer your wallet balance.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector('.faq-heading');
      const items = sectionRef.current?.querySelectorAll('.faq-item');

      if (heading) {
        gsap.fromTo(
          heading,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      if (items) {
        gsap.fromTo(
          items,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.06,
            scrollTrigger: {
              trigger: items[0],
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-blue-bg py-16 lg:py-24">
      <div className="grunge-overlay" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left - Heading */}
            <div className="lg:col-span-2 faq-heading">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-cream border-2 border-text-primary rounded-full text-xs font-semibold mb-6">
                🤔 FAQs
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
                Answers, <span className="italic">real</span> ones.
              </h2>
              <p className="text-sm text-text-secondary">
                Still stuck? DM us on WhatsApp or X, we actually reply.
              </p>
            </div>

            {/* Right - Accordion */}
            <div className="lg:col-span-3 space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="faq-item bg-cream border-2 border-text-primary rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 lg:p-5 text-left hover:bg-cream/80 transition-colors"
                  >
                    <span className="font-semibold text-sm lg:text-base text-text-primary pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-text-primary shrink-0 transition-transform duration-200 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-4 lg:px-5 pb-4 lg:pb-5">
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
