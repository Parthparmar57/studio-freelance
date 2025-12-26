import { Link } from 'react-router-dom';
import { Camera, Video, Heart, Star, ArrowRight, Play } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Wedding Shoots',
      description: 'Capturing your special day with cinematic elegance',
      icon: Heart,
      image: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260',
      link: '/services/wedding',
    },
    {
      title: 'Pre-Wedding Shoots',
      description: 'Romantic storytelling before the big day',
      icon: Camera,
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260',
      link: '/services/pre-wedding',
    },
    {
      title: 'Birthday Shoots',
      description: 'Fun and vibrant celebration photography',
      icon: Star,
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=1260',
      link: '/services/birthday',
    },
    {
      title: 'Maternity & Baby Shower',
      description: 'Gentle and emotional milestone photography',
      icon: Heart,
      image: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=1260',
      link: '/services/maternity',
    },
    {
      title: 'Corporate & Events',
      description: 'Professional coverage for your business needs',
      icon: Video,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260',
      link: '/services/corporate',
    },
  ];

  const features = [
    { title: 'Creative Vision', description: 'Unique storytelling approach for every project' },
    { title: 'Premium Equipment', description: 'Latest cameras and cinematic gear' },
    { title: 'Experienced Team', description: '10+ years of professional photography' },
    { title: 'High-Quality Editing', description: 'Cinematic color grading and post-production' },
  ];

  const testimonials = [
    {
      name: 'Priya & Rahul',
      service: 'Wedding Shoot',
      text: 'Offtbeat Studio made our wedding unforgettable. The photos are absolutely stunning!',
      rating: 5,
    },
    {
      name: 'Ananya Sharma',
      service: 'Maternity Shoot',
      text: 'Such a comfortable and beautiful experience. The team was amazing!',
      rating: 5,
    },
    {
      name: 'Vikram Industries',
      service: 'Corporate Event',
      text: 'Professional, punctual, and creative. Perfect for our business needs.',
      rating: 5,
    },
  ];

  const portfolio = [
    'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1146603/pexels-photo-1146603.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-light-900/70 via-light-900/50 to-light-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <Play className="w-16 h-16 text-primary-500 animate-pulse cursor-pointer hover:text-primary-400 transition-colors" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turning Moments into
            <span className="block bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              Timeless Stories
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-light-100 mb-8 max-w-2xl mx-auto">
            Professional Photography & Cinematic Videography by Offtbeat Studio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-500 text-light-50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
            >
              Book a Shoot
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-light-50 transition-all hover:scale-105"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-500 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-light-600">Specializing in moments that matter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] hover:scale-105 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-900 via-light-900/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <service.icon className="w-10 h-10 text-primary-500 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-light-200">{service.description}</p>
                  <div className="flex items-center mt-4 text-primary-500 group-hover:translate-x-2 transition-transform">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-light-600">A glimpse of our creative journey</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolio.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-light-900/0 group-hover:bg-light-900/40 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-400 font-semibold text-lg"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Offtbeat Studio</h2>
            <p className="text-xl text-light-600">Excellence in every frame</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-light-200 p-8 rounded-2xl hover:bg-light-300 transition-colors border border-light-300"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-light-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Love</h2>
            <p className="text-xl text-light-600">What our clients say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-light-200 p-8 rounded-2xl border border-light-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary-500 fill-primary-500" />
                  ))}
                </div>
                <p className="text-light-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-light-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-400 font-semibold text-lg"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let Offtbeat Studio Capture Your Story
          </h2>
          <p className="text-xl text-light-600 mb-8">
            Ready to create timeless memories? Get in touch with us today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-500 text-light-50 px-12 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
