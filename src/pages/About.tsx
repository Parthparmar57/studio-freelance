import { Camera, Award, Users, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Events Covered' },
    { number: '50K+', label: 'Photos Delivered' },
  ];

  const team = [
    {
      name: 'Arjun Mehta',
      role: 'Founder & Lead Photographer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Priya Desai',
      role: 'Creative Director & Videographer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Rohan Kumar',
      role: 'Senior Photographer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Sneha Patel',
      role: 'Post-Production Specialist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-background.jpg"
            alt="About XYZ Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-light-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              XYZ Studio
            </span>
          </h1>
          <p className="text-xl text-light-200">
            Passionate storytellers crafting timeless memories since 2014
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-light-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-light-700 leading-relaxed">
                <p>
                  XYZ Studio was born from a simple belief: every moment deserves to be
                  captured in its most authentic and beautiful form. Founded in 2014, we started
                  as a small team of passionate photographers with a shared vision of creating
                  timeless memories.
                </p>
                <p>
                  Over the years, we've grown into a full-service photography and videography
                  studio, but our core values remain unchanged. We believe in emotional
                  storytelling, creative excellence, and building lasting relationships with our
                  clients.
                </p>
                <p>
                  From intimate moments to grand celebrations, we approach each project with fresh
                  eyes and genuine excitement. Your story is unique, and we're here to tell it in
                  a way that you'll cherish forever.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Behind the scenes"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-500/10 rounded-2xl -z-10"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-light-200 p-8 rounded-2xl border border-light-300">
              <Camera className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-light-600">
                To be the most trusted name in creative photography, known for our artistic
                excellence and emotional storytelling.
              </p>
            </div>

            <div className="bg-light-200 p-8 rounded-2xl border border-light-300">
              <Heart className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Passion</h3>
              <p className="text-light-600">
                We're not just photographers; we're memory makers who genuinely care about
                preserving your most precious moments.
              </p>
            </div>

            <div className="bg-light-200 p-8 rounded-2xl border border-light-300">
              <Award className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Promise</h3>
              <p className="text-light-600">
                Delivering exceptional quality, professionalism, and creativity in every single
                project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Creative Team</h2>
            <p className="text-xl text-light-600">
              Talented professionals dedicated to your vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-light-900 via-transparent to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-light-200 rounded-3xl p-8 md:p-12 border border-light-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Behind the Scenes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Behind the scenes 1"
                className="rounded-xl"
              />
              <img
                src="https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Behind the scenes 2"
                className="rounded-xl"
              />
            </div>
            <p className="text-center text-light-600 mt-8 text-lg">
              We believe in transparency and love sharing our creative process with our clients.
              Every shoot is a collaborative journey where your vision meets our expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}