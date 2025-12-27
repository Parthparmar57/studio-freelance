import { Link } from 'react-router-dom';
import { Camera, MapPin, Palette, Heart, Check } from 'lucide-react';

export default function PreWedding() {
  const themes = [
    {
      name: 'Romantic Garden',
      description: 'Lush greenery, natural light, and intimate moments',
      image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Urban Street',
      description: 'City vibes, graffiti walls, and modern aesthetics',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Beach Sunset',
      description: 'Golden hour by the sea with waves and sand',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Traditional Heritage',
      description: 'Palaces, forts, and cultural backdrops',
      image: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const features = [
    '4-6 hours of shoot time',
    'Multiple outfit changes',
    'Location scouting assistance',
    'Styling and posing guidance',
    '200+ edited photos',
    'Quick 2-week delivery',
    'Social media reels',
    'Destination shoots available',
  ];

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Pre-Wedding Shoot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-light-900/70 via-light-900/50 to-light-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Camera className="w-16 h-16 text-primary-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Pre-Wedding Shoots
            <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              Romantic Storytelling
            </span>
          </h1>
          <p className="text-xl text-light-200 mb-8">
            Celebrate your love story before the big day
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
          >
            Plan Your Pre-Wedding Shoot with XYZ Studio
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Palette className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Theme-Based Concepts</h2>
            <p className="text-xl text-light-600">Choose a style that reflects your personality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-900 via-light-900/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold mb-2 text-white">{theme.name}</h3>
                  <p className="text-light-200 text-lg">{theme.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pre-wedding shoot"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-500/10 rounded-2xl -z-10"></div>
            </div>

            <div>
              <MapPin className="w-12 h-12 text-primary-500 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Outdoor & Destination Shoots
              </h2>
              <p className="text-light-700 text-lg mb-6">
                We offer pre-wedding shoots at stunning outdoor locations across India. From
                beaches to mountains, heritage sites to modern cityscapes - we'll help you find
                the perfect backdrop for your love story.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-light-700">
                  <Heart className="w-5 h-5 text-primary-500" />
                  <span>Popular destinations: Goa, Udaipur, Lonavala, Mahabaleshwar</span>
                </div>
                <div className="flex items-center space-x-3 text-light-700">
                  <Heart className="w-5 h-5 text-primary-500" />
                  <span>Travel arrangements can be coordinated</span>
                </div>
                <div className="flex items-center space-x-3 text-light-700">
                  <Heart className="w-5 h-5 text-primary-500" />
                  <span>Best seasons and timing recommendations provided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-light-600">Everything you need for a perfect shoot</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-light-200 p-6 rounded-xl border border-light-300 flex items-start space-x-3"
              >
                <Check className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-light-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-light-200 p-8 md:p-12 rounded-2xl border border-light-300">
            <h3 className="text-2xl font-bold mb-6 text-center">Styling & Posing Guidance</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-semibold mb-2">Outfit Coordination</h4>
                <p className="text-light-600 text-sm">
                  Professional advice on color combinations and outfit choices
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-semibold mb-2">Natural Posing</h4>
                <p className="text-light-600 text-sm">
                  Comfortable, candid poses that look effortless
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-semibold mb-2">Creative Concepts</h4>
                <p className="text-light-600 text-sm">
                  Unique ideas tailored to your personality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Pre-Wedding Shoot?
          </h2>
          <p className="text-xl text-light-600 mb-8">
            Let's create stunning memories before your big day. Book your session today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
            >
              Book Your Shoot
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-primary-500 text-primary-500 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-light-50 transition-all hover:scale-105"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}