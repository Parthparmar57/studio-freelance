import { Link } from 'react-router-dom';
import { Heart, Camera, Video, Album, Plane, Clock, Check } from 'lucide-react';

export default function Wedding() {
  const coverageTypes = [
    {
      icon: Camera,
      title: 'Candid Photography',
      description: 'Natural, unposed moments captured as they happen',
    },
    {
      icon: Heart,
      title: 'Traditional Photography',
      description: 'Classic poses and formal family portraits',
    },
    {
      icon: Video,
      title: 'Cinematic Videography',
      description: 'Movie-style wedding films with professional editing',
    },
    {
      icon: Plane,
      title: 'Aerial Shots',
      description: 'Stunning drone footage of your venue and celebration',
    },
  ];

  const deliverables = [
    'High-resolution edited photos (500+ images)',
    'Cinematic wedding film (15-20 minutes)',
    'Social media highlight reel (1-2 minutes)',
    'Premium photo album',
    'Online gallery for 2 years',
    'All raw footage on request',
  ];

  const gallery = [
    'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Wedding Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-light-900/70 via-light-900/50 to-light-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Heart className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Wedding Photography
            <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              & Cinematic Videography
            </span>
          </h1>
          <p className="text-xl text-light-200 mb-8">
            Your love story deserves to be told beautifully
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
          >
            Book Your Wedding with XYZ Studio
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Coverage Types</h2>
            <p className="text-xl text-light-600">Complete documentation of your special day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverageTypes.map((type, index) => (
              <div
                key={index}
                className="bg-light-200 p-8 rounded-2xl border border-light-300 hover:border-primary-500 transition-colors"
              >
                <type.icon className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-light-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Album className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Full Wedding Gallery</h2>
            <p className="text-xl text-light-600">Every moment, every emotion, beautifully captured</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Wedding ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-light-900/0 group-hover:bg-light-900/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Clock className="w-12 h-12 text-primary-500 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Receive</h2>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-light-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-light-200 p-8 rounded-2xl border border-light-300">
                <h3 className="text-2xl font-bold mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-light-50 font-bold">
                        1
                      </div>
                      <h4 className="font-semibold">Pre-Wedding Consultation</h4>
                    </div>
                    <p className="text-light-600 ml-11">
                      Discuss your vision, preferences, and important moments
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-light-50 font-bold">
                        2
                      </div>
                      <h4 className="font-semibold">Wedding Day Coverage</h4>
                    </div>
                    <p className="text-light-600 ml-11">
                      Full-day documentation from getting ready to reception
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-light-50 font-bold">
                        3
                      </div>
                      <h4 className="font-semibold">Professional Editing</h4>
                    </div>
                    <p className="text-light-600 ml-11">
                      Cinematic color grading and expert post-production
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-light-50 font-bold">
                        4
                      </div>
                      <h4 className="font-semibold">Delivery</h4>
                    </div>
                    <p className="text-light-600 ml-11">
                      Receive your photos within 4 weeks, films within 8 weeks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Wedding?
          </h2>
          <p className="text-xl text-light-600 mb-8">
            Let's create timeless memories of your special day. Packages starting from competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
            >
              Book Your Wedding
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-primary-500 text-primary-500 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-light-50 transition-all hover:scale-105"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}