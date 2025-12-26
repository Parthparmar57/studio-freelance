import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Basic',
      service: 'Birthday / Small Events',
      price: '₹15,000',
      features: [
        '3 hours coverage',
        '150+ edited photos',
        'Online gallery',
        'Social media reels',
        'Same-day highlights',
        'Basic props included',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      service: 'Pre-Wedding / Maternity',
      price: '₹35,000',
      features: [
        '5 hours coverage',
        '250+ edited photos',
        'Multiple locations',
        'Costume changes',
        'Premium editing',
        'Online gallery',
        'Printed album (optional)',
        'Quick 2-week delivery',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      service: 'Wedding Photography',
      price: '₹75,000',
      features: [
        'Full day coverage',
        '500+ edited photos',
        'Cinematic wedding film',
        'Drone shots',
        'Multiple photographers',
        'Premium album',
        'Online gallery (2 years)',
        'All raw footage',
      ],
      popular: false,
    },
    {
      name: 'Platinum',
      service: 'Complete Wedding Package',
      price: '₹1,50,000',
      features: [
        'Pre-wedding shoot included',
        '2-day wedding coverage',
        '1000+ edited photos',
        'Multiple cinematic films',
        'Drone coverage',
        '3-4 photographers',
        'Premium albums',
        'Same-day editing',
        'Destination coverage',
      ],
      popular: false,
    },
  ];

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Pricing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-light-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transparent{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-light-200">
            Quality photography packages for every budget and occasion
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-light-200 rounded-2xl p-8 border-2 ${
                  pkg.popular ? 'border-primary-500' : 'border-light-300'
                } hover:border-primary-500 transition-colors`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-light-50 px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-light-50" />
                      <span>POPULAR</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-light-600 text-sm mb-4">{pkg.service}</p>
                  <div className="text-4xl font-bold text-primary-500 mb-2">{pkg.price}</div>
                  <p className="text-light-500 text-sm">Starting from</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-light-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-primary-500 text-light-50 hover:bg-primary-400'
                      : 'bg-light-300 text-light-700 hover:bg-light-400'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-light-200 p-8 md:p-12 rounded-2xl border border-light-300 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Package?</h2>
            <p className="text-xl text-light-600 mb-8">
              Every event is unique. Let's discuss your specific requirements and create a tailored
              package that fits your vision and budget perfectly.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
            >
              Get Custom Quote from Offtbeat Studio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in All Packages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-200 p-6 rounded-xl border border-light-300">
              <h3 className="text-xl font-bold mb-3">Professional Equipment</h3>
              <p className="text-light-600">
                Latest cameras, lenses, and lighting gear for the best quality
              </p>
            </div>

            <div className="bg-light-200 p-6 rounded-xl border border-light-300">
              <h3 className="text-xl font-bold mb-3">Expert Editing</h3>
              <p className="text-light-600">
                Professional color grading and retouching by experienced editors
              </p>
            </div>

            <div className="bg-light-200 p-6 rounded-xl border border-light-300">
              <h3 className="text-xl font-bold mb-3">Online Gallery</h3>
              <p className="text-light-600">
                Secure online gallery for easy sharing with family and friends
              </p>
            </div>

            <div className="bg-light-200 p-6 rounded-xl border border-light-300">
              <h3 className="text-xl font-bold mb-3">High Resolution</h3>
              <p className="text-light-600">
                All images delivered in high resolution for printing
              </p>
            </div>

            <div className="bg-light-200 p-6 rounded-xl border border-light-300">
              <h3 className="text-xl font-bold mb-3">Backup Security</h3>
              <p className="text-light-600">
                Multiple backups to ensure your photos are never lost
              </p>
            </div>

            <div className="bg-light-200 p-6 rounded-xl border border-light-300">
              <h3 className="text-xl font-bold mb-3">Customer Support</h3>
              <p className="text-light-600">
                Dedicated support throughout the booking and delivery process
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}