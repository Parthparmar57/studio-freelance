import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Booking Process',
      questions: [
        {
          question: 'How do I book a session with XYZ Studio?',
          answer:
            'You can book a session by filling out our contact form, calling us directly, or WhatsApp us. We\'ll discuss your requirements, check availability, and send you a detailed quote. Once confirmed, we require a 30% advance payment to secure your booking.',
        },
        {
          question: 'How far in advance should I book?',
          answer:
            'For weddings and major events, we recommend booking 3-6 months in advance. For other services like birthdays or maternity shoots, 2-4 weeks notice is usually sufficient. However, we do accommodate last-minute bookings based on availability.',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'Cancellations made 30+ days before the event receive a full refund minus processing fees. 15-29 days notice receives 50% refund. Less than 15 days notice, the advance is non-refundable. We understand emergencies happen and will work with you on rescheduling when possible.',
        },
      ],
    },
    {
      category: 'Editing & Delivery',
      questions: [
        {
          question: 'How long does it take to receive edited photos?',
          answer:
            'Delivery times vary by service: Birthday shoots - 7 days, Pre-wedding shoots - 2 weeks, Weddings - 4-6 weeks for photos and 6-8 weeks for videos. We provide same-day highlights for most events so you can share on social media immediately!',
        },
        {
          question: 'Will all photos be edited?',
          answer:
            'All delivered photos are professionally edited with color correction, exposure adjustment, and minor retouching. We remove duplicates and unflattering shots. You\'ll receive only the best images. Advanced retouching is available for an additional fee.',
        },
        {
          question: 'Can I request edits or changes to photos?',
          answer:
            'Yes! We offer one round of minor revisions included in all packages. This includes adjustments to brightness, color, and cropping. Major changes or additional retouching can be arranged for an additional fee.',
        },
        {
          question: 'In what format will I receive my photos?',
          answer:
            'You\'ll receive high-resolution JPEG files suitable for printing and sharing. Photos are delivered via an online gallery where you can download, share, and order prints. We also provide all photos on a USB drive for wedding packages.',
        },
      ],
    },
    {
      category: 'Payments',
      questions: [
        {
          question: 'What are your payment terms?',
          answer:
            'We require 30% advance payment to confirm booking, 40% before the shoot/event, and the remaining 30% before final delivery. We accept bank transfers, UPI, credit/debit cards, and digital wallets.',
        },
        {
          question: 'Are there any hidden costs?',
          answer:
            'No hidden costs! Our quotes are comprehensive and include photographer fees, editing, and delivery. Additional costs only apply for: travel beyond 50km from Mumbai, extra hours beyond package time, rush delivery requests, or physical prints/albums.',
        },
        {
          question: 'Do you offer payment plans?',
          answer:
            'Yes, for wedding packages above ₹75,000, we offer flexible payment plans spread over 3-4 installments. This makes it easier to budget for your special day. Contact us to discuss a payment schedule that works for you.',
        },
      ],
    },
    {
      category: 'Destination Shoots',
      questions: [
        {
          question: 'Do you travel for destination shoots?',
          answer:
            'Absolutely! We love destination shoots and have covered weddings and pre-wedding shoots across India - from Goa beaches to Rajasthan palaces. Travel and accommodation costs are additional and discussed during booking.',
        },
        {
          question: 'What are the charges for destination coverage?',
          answer:
            'Destination charges include: travel costs (flights/train), accommodation, local transport, and a per-day rate. We provide a detailed quote based on your location. For multi-day events, we offer package discounts.',
        },
        {
          question: 'Can you recommend good locations for pre-wedding shoots?',
          answer:
            'Yes! We have extensive experience with locations across India. Popular choices include: Goa (beaches), Udaipur (palaces), Lonavala (mountains), Mumbai (urban), and many more. We help you choose based on your theme, budget, and season.',
        },
      ],
    },
    {
      category: 'General Questions',
      questions: [
        {
          question: 'How many photographers will be present at my event?',
          answer:
            'This depends on your package: Basic events - 1 photographer, Premium packages - 2 photographers, Wedding packages - 2-3 photographers plus videographers. We ensure complete coverage without missing any important moments.',
        },
        {
          question: 'What equipment do you use?',
          answer:
            'We use professional-grade equipment including Canon and Sony full-frame cameras, various lenses for different situations, professional lighting, DJI drones for aerial shots, and stabilization equipment for smooth videos. All our gear is regularly maintained and we carry backups.',
        },
        {
          question: 'Do you have backup equipment?',
          answer:
            'Yes! We carry backup cameras, lenses, memory cards, and batteries to every shoot. We also have backup photographers on call for emergencies. Your special day is too important to risk any technical issues.',
        },
        {
          question: 'Can we meet before the shoot?',
          answer:
            'Definitely! We encourage a pre-shoot consultation to discuss your vision, preferences, and any special requests. For weddings, we can also do a venue visit to plan the best shots. This helps us deliver exactly what you\'re dreaming of.',
        },
        {
          question: 'Do you provide albums and prints?',
          answer:
            'Yes! We offer premium photo albums in various sizes, canvas prints, framed photos, and photo books. These can be added to any package or ordered separately after you receive your digital photos.',
        },
      ],
    },
  ];

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="FAQ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-light-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <HelpCircle className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-light-200">
            Everything you need to know about XYZ Studio
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-500">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="bg-light-200 rounded-xl border border-light-300 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between hover:bg-light-300 transition-colors"
                      >
                        <span className="text-left font-semibold pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-light-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-light-600 mb-8">
            Can't find the answer you're looking for? We're here to help! Reach out to our team
            and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-500 text-primary-500 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-light-50 transition-all hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}