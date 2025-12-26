import { Link } from 'react-router-dom';
import { Heart, Camera, Cake, Baby, Briefcase, PartyPopper, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography & Videography',
      description:
        'Capture every emotion, every tear, every smile of your special day. Our wedding coverage includes candid moments, traditional shots, and cinematic films that tell your unique love story.',
      features: [
        'Full-day coverage',
        'Candid & traditional photography',
        'Cinematic highlight films',
        'Premium albums & prints',
        'Drone shots',
        'Same-day editing available',
      ],
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/wedding',
    },
    {
      icon: Camera,
      title: 'Pre-Wedding Shoots',
      description:
        'Celebrate your love story before the big day with romantic, creative pre-wedding shoots. Choose from outdoor locations, studio setups, or destination shoots that reflect your personality.',
      features: [
        'Concept-based themes',
        'Multiple location options',
        'Costume & styling guidance',
        'Outdoor & destination shoots',
        'Creative poses & ideas',
        'Quick delivery',
      ],
      image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/pre-wedding',
    },
    {
      icon: Cake,
      title: 'Birthday Shoots',
      description:
        'Make birthdays memorable with fun, vibrant photography. From kids to adults, we create joyful moments filled with laughter, balloons, and celebration.',
      features: [
        'Kids & adult birthdays',
        'Theme-based decorations',
        'Fun props & setups',
        'Instant social media reels',
        'Same-day highlights',
        'Flexible packages',
      ],
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/birthday',
    },
    {
      icon: Baby,
      title: 'Baby Shower & Maternity',
      description:
        'Celebrate the journey to parenthood with soft, emotional photography. We specialize in gentle maternity shoots and joyful baby shower coverage.',
      features: [
        'Maternity photography',
        'Baby shower events',
        'Natural light setups',
        'Comfortable environment',
        'Family portraits',
        'Newborn sessions',
      ],
      image: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/maternity',
    },
    {
      icon: Briefcase,
      title: 'Corporate & Product Shoots',
      description:
        'Professional photography for businesses. From corporate events to product catalogs, we deliver high-quality images that elevate your brand.',
      features: [
        'Corporate events',
        'Product photography',
        'Professional headshots',
        'Conference coverage',
        'Brand storytelling',
        'Commercial use rights',
      ],
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/corporate',
    },
    {
      icon: PartyPopper,
      title: 'Event Coverage',
      description:
        'Complete coverage for all types of events. Whether it\'s an engagement, anniversary, or cultural celebration, we capture the essence of your special occasion.',
      features: [
        'Engagement ceremonies',
        'Anniversary celebrations',
        'Cultural events',
        'Private parties',
        'Festival coverage',
        'Custom packages',
      ],
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/events',
    },
  ];

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-light-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-light-200">
            Comprehensive photography & videography solutions for every occasion
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <service.icon className="w-12 h-12 text-primary-500 mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-light-700 text-lg mb-6">{service.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary-500">What's Included:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-light-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center space-x-2 bg-primary-500 text-light-50 px-8 py-3 rounded-full font-semibold hover:bg-primary-400 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-light-900/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-light-600 mb-8">
            Let's discuss your requirements and create a custom package that fits your needs and
            budget.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}