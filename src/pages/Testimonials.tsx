import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya & Rahul Sharma',
      service: 'Wedding Shoot',
      rating: 5,
      text: 'XYZ Studio captured our wedding day perfectly! Every moment, every emotion was beautifully documented. The team was professional, creative, and made us feel comfortable throughout. Our photos are absolutely stunning and we cannot thank them enough!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'December 2023',
    },
    {
      name: 'Ananya Desai',
      service: 'Maternity Shoot',
      rating: 5,
      text: 'Such a comfortable and beautiful experience! The photographer was gentle, patient, and created such a relaxed atmosphere. The photos turned out gorgeous - soft, emotional, and exactly what I wanted. Highly recommend XYZ Studio for maternity photography!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'November 2023',
    },
    {
      name: 'Vikram Industries',
      service: 'Corporate Event',
      rating: 5,
      text: 'Professional, punctual, and exceptionally creative. XYZ Studio covered our annual conference and the results exceeded our expectations. Perfect for business needs with a creative touch. Will definitely work with them again!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'October 2023',
    },
    {
      name: 'Meera & Aditya',
      service: 'Pre-Wedding Shoot',
      rating: 5,
      text: 'Our pre-wedding shoot in Goa was magical! The team helped us choose locations, guided us with poses, and made the whole experience fun and memorable. The photos are breathtaking and we cherish them so much. Thank you XYZ Studio!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'September 2023',
    },
    {
      name: 'Kavita Patel',
      service: '1st Birthday Shoot',
      rating: 5,
      text: 'My son\'s first birthday was captured so beautifully! The team was patient with the kids, brought fun props, and delivered the photos quickly. The same-day highlights were perfect for sharing with family. Absolutely loved working with them!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'August 2023',
    },
    {
      name: 'Rohan & Simran',
      service: 'Destination Wedding',
      rating: 5,
      text: 'We had our wedding in Udaipur and XYZ Studio traveled with us. They captured the grandeur of the location and the intimacy of our moments perfectly. The cinematic video is like a movie! Worth every penny.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'July 2023',
    },
  ];

  const videoTestimonials = [
    {
      name: 'Neha & Karan',
      thumbnail: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Ritu & Arjun',
      thumbnail: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Testimonials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-light-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Client{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              Love
            </span>
          </h1>
          <p className="text-xl text-light-200">
            Stories from our happy clients at XYZ Studio
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-primary-500 fill-primary-500" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-light-600">
              Real experiences from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-light-200 rounded-2xl p-8 border border-light-300 hover:border-primary-500 transition-colors"
              >
                <Quote className="w-10 h-10 text-primary-500 mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary-500 fill-primary-500" />
                  ))}
                </div>

                <p className="text-light-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-light-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-light-600">{testimonial.service}</p>
                    <p className="text-xs text-light-500">{testimonial.date}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-xl text-light-600">
              Hear directly from our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="relative aspect-video bg-light-200 rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-light-900/40 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <div className="w-0 h-0 border-l-[16px] border-l-light-50 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-white font-semibold">{video.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-light-200 p-8 md:p-12 rounded-2xl border border-light-300 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Happy Clients</h2>
            <p className="text-xl text-light-600 mb-8">
              Experience the XYZ Studio difference. Let us capture your special moments with
              the same care and creativity our clients love.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-500 text-light-50 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Statistics</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-light-600">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">5.0</div>
              <div className="text-light-600">Average Rating</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-light-600">Would Recommend</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">1000+</div>
              <div className="text-light-600">Events Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}