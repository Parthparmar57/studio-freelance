import { Link } from 'react-router-dom';
import { Cake, PartyPopper, Camera, Sparkles, Check, Gift } from 'lucide-react';

export default function Birthday() {
  const features = [
    'Fun props and balloons',
    'Theme-based decorations',
    'Candid moments capture',
    'Instant social media reels',
    'Same-day highlight delivery',
    'Unlimited photos',
    'Professional editing',
    'Online gallery access',
  ];

  const themes = [
    {
      name: 'Kids Birthday Party',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Colorful, playful, and energetic coverage',
    },
    {
      name: 'Adult Celebration',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant and stylish birthday photography',
    },
    {
      name: 'Milestone Birthdays',
      image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '1st birthday, Sweet 16, 21st, and more',
    },
  ];

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Birthday Shoot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-light-900/70 via-light-900/50 to-light-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Cake className="w-16 h-16 text-primary-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Birthday Shoots
            <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              Celebrations Worth Remembering
            </span>
          </h1>
          <p className="text-xl text-light-200 mb-8">
            Fun, vibrant, and joyful photography for all ages
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
          >
            Book Your Birthday Shoot
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <PartyPopper className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Birthday Coverage Types</h2>
            <p className="text-xl text-light-600">Perfect for every age and celebration style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-900 via-light-900/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{theme.name}</h3>
                  <p className="text-light-200">{theme.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Sparkles className="w-12 h-12 text-primary-500 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fun Props & Themes
              </h2>
              <p className="text-light-700 text-lg mb-6">
                We bring the party to life with colorful props, balloons, and themed decorations.
                From superhero parties to princess themes, unicorns to sports - we've got you
                covered!
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-primary-500" />
                  <span className="text-light-700">Custom backdrop setups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-primary-500" />
                  <span className="text-light-700">Props and accessories included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-primary-500" />
                  <span className="text-light-700">Themed photography concepts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-primary-500" />
                  <span className="text-light-700">Cake smash sessions available</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Birthday celebration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-500/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Package Inclusions</h2>
            <p className="text-xl text-light-600">Everything you need for a memorable celebration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-light-200 p-6 rounded-xl border border-light-300 flex items-start space-x-3 hover:border-primary-500 transition-colors"
              >
                <Check className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-light-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-light-200 p-8 md:p-12 rounded-2xl border border-light-300">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Instant Social Media Reels</h2>
              <p className="text-xl text-light-600">
                Share the joy immediately! We create quick highlight reels perfect for Instagram,
                Facebook, and WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Highlights</h3>
                <p className="text-light-600">
                  Get 10-15 edited photos within hours of the celebration
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Full Gallery</h3>
                <p className="text-light-600">
                  Complete collection delivered within 7 days
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PartyPopper className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Video Reels</h3>
                <p className="text-light-600">
                  Fun, music-synced video clips for social media
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make Your Birthday Unforgettable
          </h2>
          <p className="text-xl text-light-600 mb-8">
            Flexible packages for intimate gatherings or grand celebrations. Book your birthday
            shoot with XYZ Studio today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
            >
              Book Your Shoot
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