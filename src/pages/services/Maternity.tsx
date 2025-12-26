import { Link } from 'react-router-dom';
import { Baby, Heart, Camera, Sun, Check } from 'lucide-react';

export default function Maternity() {
  const features = [
    'Maternity photography (7-8 months)',
    'Baby shower event coverage',
    'Newborn sessions',
    'Family portraits',
    'Natural light setups',
    'Comfortable environment',
    'Props and gowns available',
    'Gentle posing guidance',
  ];

  const sessionTypes = [
    {
      title: 'Maternity Session',
      description: 'Celebrate the beauty of pregnancy with elegant, timeless photos',
      image: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Best timing: 7-8 months',
        'Indoor or outdoor options',
        'Partner and sibling photos',
        'Maternity gowns provided',
      ],
    },
    {
      title: 'Baby Shower Coverage',
      description: 'Document your special day with family and friends',
      image: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Full event coverage',
        'Candid moments',
        'Decoration details',
        'Group photos',
      ],
    },
    {
      title: 'Newborn Photography',
      description: 'Precious first moments with your little one',
      image: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Best within first 2 weeks',
        'Safe posing techniques',
        'Soft, gentle lighting',
        'Family bonding shots',
      ],
    },
  ];

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Maternity Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Baby className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Baby Shower & Maternity
            <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Beautiful Beginnings
            </span>
          </h1>
          <p className="text-xl text-zinc-300 mb-8">
            Celebrating the journey to parenthood with gentle, emotional photography
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-500 text-zinc-950 px-10 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 transition-all hover:scale-105"
          >
            Book Your Maternity Shoot
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-zinc-400">
              Comprehensive photography for this special chapter
            </p>
          </div>

          <div className="space-y-12">
            {sessionTypes.map((session, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-3xl font-bold mb-4">{session.title}</h3>
                  <p className="text-zinc-300 text-lg mb-6">{session.description}</p>
                  <ul className="space-y-3">
                    {session.details.map((detail, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <span className="text-zinc-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative">
                    <img
                      src={session.image}
                      alt={session.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-2xl -z-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Sun className="w-12 h-12 text-amber-500 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Natural Light Photography
              </h2>
              <p className="text-zinc-300 text-lg mb-6">
                We specialize in soft, natural light photography that creates a warm, comfortable
                atmosphere. Our approach is gentle and relaxed, ensuring you feel at ease
                throughout the session.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-amber-500" />
                  <span className="text-zinc-300">Soft, flattering lighting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-amber-500" />
                  <span className="text-zinc-300">Comfortable, relaxed environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-amber-500" />
                  <span className="text-zinc-300">Professional yet personal approach</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Natural light photography"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-zinc-400">Complete care for your comfort and memories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex items-start space-x-3 hover:border-amber-500 transition-colors"
              >
                <Check className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900 p-8 md:p-12 rounded-2xl border border-zinc-800">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Family Storytelling</h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Your journey to parenthood is unique and beautiful. We capture not just photos, but
                emotions, connections, and the love that surrounds this special time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Partner Involvement</h3>
                <p className="text-zinc-400">
                  Beautiful couple portraits celebrating your growing family
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sibling Photos</h3>
                <p className="text-zinc-400">
                  Include older children in this exciting journey
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Timeless Memories</h3>
                <p className="text-zinc-400">
                  Photos you'll treasure for generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Celebrate Your Beautiful Journey
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Let Offtbeat Studio document this precious chapter of your life with care and artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-500 text-zinc-950 px-10 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 transition-all hover:scale-105"
            >
              Book Your Session
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-amber-500 text-amber-500 px-10 py-4 rounded-full font-semibold text-lg hover:bg-amber-500 hover:text-zinc-950 transition-all hover:scale-105"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
