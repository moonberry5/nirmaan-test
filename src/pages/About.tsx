import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  const timeline = [
    { year: '2018', event: 'Founded with a vision to transform rural education' },
    { year: '2019', event: 'Launched our first education center in Pilani' },
    { year: '2020', event: 'Expanded to women empowerment programs' },
    { year: '2021', event: 'Introduced digital literacy initiatives' },
    { year: '2022', event: 'Reached 50 villages across Rajasthan' },
    { year: '2023', event: 'Partnered with local government for wider impact' },
    { year: '2024', event: 'Celebrating 6 years of transformative change' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-forest/90 to-maroon/90 text-white section-padding">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-nunito font-bold mb-6">
            About Nirmaan
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Building bridges between potential and opportunity, one community at a time.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg card-hover">
              <Target className="h-12 w-12 text-maroon mx-auto mb-4" />
              <h3 className="text-2xl font-nunito font-bold text-charcoal mb-4">Our Mission</h3>
              <p className="text-charcoal/70">
                To empower rural communities through quality education, skill development, and sustainable development initiatives that create lasting positive change.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg card-hover">
              <Eye className="h-12 w-12 text-forest mx-auto mb-4" />
              <h3 className="text-2xl font-nunito font-bold text-charcoal mb-4">Our Vision</h3>
              <p className="text-charcoal/70">
                A world where every individual, regardless of their background, has access to quality education and opportunities for personal growth and development.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg card-hover">
              <Award className="h-12 w-12 text-rust mx-auto mb-4" />
              <h3 className="text-2xl font-nunito font-bold text-charcoal mb-4">Our Values</h3>
              <p className="text-charcoal/70">
                Integrity, compassion, excellence, and inclusivity guide everything we do. We believe in sustainable impact through community participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-paper-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-nunito font-bold text-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-lg text-charcoal/80 mb-6">
                Nirmaan was born from a simple yet powerful belief: every child deserves access to quality education, 
                and every community has the potential to thrive when given the right support and resources.
              </p>
              <p className="text-lg text-charcoal/80 mb-6">
                Founded in 2018 by a group of passionate educators and social workers, we started with a single 
                education center in Pilani. Today, we've grown into a comprehensive development organization 
                working across multiple villages in Rajasthan.
              </p>
              <p className="text-lg text-charcoal/80">
                Our approach is holistic and community-driven. We don't just provide services; we work alongside 
                communities to identify their needs, build local capacity, and create sustainable solutions that 
                continue to make a difference long after our direct involvement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Our story" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Education in action" 
                className="rounded-lg shadow-md mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-nunito font-bold text-charcoal mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-charcoal/70">
              Key milestones in our mission to transform rural communities.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-maroon/20"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                    <div className="text-2xl font-nunito font-bold text-maroon mb-2">{item.year}</div>
                    <p className="text-charcoal/80">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-maroon rounded-full border-4 border-paper"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Philosophy */}
      <section className="section-padding bg-gradient-to-r from-forest/90 to-maroon/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-nunito font-bold mb-6">
            Our Philosophy
          </h2>
          <p className="text-xl mb-8">
            "Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime. 
            Build a fishing community, and you transform generations."
          </p>
          <p className="text-lg opacity-90">
            This philosophy drives everything we do. We don't just provide temporary solutions; 
            we build lasting capabilities within communities that continue to create positive change for years to come.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;