import React from 'react';
import { ArrowRight, Users, BookOpen, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

const Home = () => {
  const programs = [
    {
      icon: <BookOpen className="h-8 w-8 text-maroon mb-4" />,
      title: "Education",
      description: "The School Adoption Program (SAP) is one of the six education projects in Nirmaan. SAP aims to improve the learning environment of government schools by providing resources, infrastructure upgrades, and to enhance the overall education standard. Our ultimate goal is to provide enough comprehensive support to the schools so that they can eventually become selfreliant and sustain the improvements on their own.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Users className="h-8 w-8 text-forest mb-4" />,
      title: "Community Development",
      description: "The Participatory Community Development project of Nirmaan works with the residents of bastis in and around Pilani to improve their quality of life and equip them with basic day-today necessities. This seeks to engage local populations in development projects in order to make the projects more sustainable and successful.",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Globe className="h-8 w-8 text-rust mb-4" />,
      title: "Woman Empowerment",
      description: "Unnati is a project under the Nirmaan dedicated to empowering women. Our mission is to guide beneficiaries in establishing sustainable businesses through skill development, mentorship, and resource access. Women acquire skills like stitching and jewelry making, creating products such as jute handbags, bracelets, and organic Holi colors. Unnati stands as a beacon of hope, fostering a society where women are strong and self-reliant",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Volunteer Teacher",
      quote: "Working with Nirmaan has been the most rewarding experience of my life. Seeing children's faces light up when they learn something new is priceless.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Rajesh Kumar",
      role: "Community Leader",
      quote: "Nirmaan's digital literacy program has transformed our village. Now our youth can access online opportunities and education.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-maroon/90 to-forest/90 text-white section-padding">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-nunito font-bold mb-6 animate-slide-up">
            Building Dreams, Creating Impact
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Empowering rural communities through education, skill development, and sustainable development initiatives across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/get-involved" className="btn-primary inline-flex items-center">
              Donate <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-paper-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-nunito font-bold text-charcoal mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Every number represents a life touched, a dream realized, and a community transformed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Counter end={2000} label="Beneficiaries Benefitted" />
            <Counter end={150} label="Regular Volunteers" />
            <Counter end={15} label="Areas Reached" />
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-nunito font-bold text-charcoal mb-4">
              Our Key Programs
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Comprehensive initiatives designed to create lasting change in rural communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }}></div>
                <div className="p-6">
                  {program.icon}
                  <h3 className="text-xl font-nunito font-bold text-charcoal mb-3">{program.title}</h3>
                  <p className="text-charcoal/70 mb-4">{program.description}</p>
                  <Link to="/work" className="text-maroon font-semibold hover:text-maroon-dark transition-colors inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-nunito font-bold mb-6">
                See Our Work in Action
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Watch how we're transforming lives and communities through our various initiatives. 
                Every story is a testament to the power of collective action and compassion.
              </p>
              <Link to="/media" className="btn-primary">
                View Gallery
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Our work in action"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-paper-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-nunito font-bold text-charcoal mb-4">
              Voices from Our Community
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Hear from the people who make our mission possible and those whose lives we've touched.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-nunito font-bold text-charcoal">{testimonial.name}</h4>
                    <p className="text-charcoal/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-charcoal/80 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-maroon to-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-nunito font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8">
            Join our community of changemakers and help us build a better tomorrow for rural India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="bg-white text-maroon hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Donate
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-maroon px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;