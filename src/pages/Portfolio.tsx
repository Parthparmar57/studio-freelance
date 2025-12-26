import { useState } from 'react';
import { Camera } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'wedding', 'pre-wedding', 'birthday', 'maternity', 'corporate'];

  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      image: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Elegant Wedding',
    },
    {
      id: 2,
      category: 'pre-wedding',
      image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Romantic Pre-Wedding',
    },
    {
      id: 3,
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Ceremony',
    },
    {
      id: 4,
      category: 'birthday',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Birthday Celebration',
    },
    {
      id: 5,
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Outdoor Wedding',
    },
    {
      id: 6,
      category: 'maternity',
      image: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Maternity Session',
    },
    {
      id: 7,
      category: 'pre-wedding',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Beach Pre-Wedding',
    },
    {
      id: 8,
      category: 'wedding',
      image: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Grand Reception',
    },
    {
      id: 9,
      category: 'corporate',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Corporate Event',
    },
    {
      id: 10,
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1146603/pexels-photo-1146603.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Intimate Wedding',
    },
    {
      id: 11,
      category: 'pre-wedding',
      image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Urban Pre-Wedding',
    },
    {
      id: 12,
      category: 'birthday',
      image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kids Birthday',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-light-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-light-200">
            A showcase of our creative journey and memorable moments
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold capitalize transition-all ${
                  activeCategory === category
                    ? 'bg-primary-500 text-light-50'
                    : 'bg-light-200 text-light-700 hover:bg-light-300 border border-light-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-900 via-light-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Camera className="w-12 h-12 text-primary-500 mb-3" />
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-light-200 capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Reels</h2>
            <p className="text-xl text-light-600 mb-8">
              Experience our cinematic storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative aspect-video bg-light-200 rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={`https://images.pexels.com/photos/${
                    item === 1 ? '265722' : item === 2 ? '2253870' : item === 3 ? '1444442' : '1043473'
                  }/pexels-photo-${
                    item === 1 ? '265722' : item === 2 ? '2253870' : item === 3 ? '1444442' : '1043473'
                  }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={`Video ${item}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-light-900/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[16px] border-l-light-50 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}