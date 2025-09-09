import React from 'react';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: 'Arush Mangalam Bajpai',
    role: 'President',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Anushka Bhandari',
    role: 'Vice President',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Naman Sen',
    role: 'Head of Human Resources',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Arsh Kumar',
    role: 'Head of External Relations',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Ansh Agarwal',
    role: 'Head of External Relations',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Vedant Kabra',
    role: 'Head of Finance',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Swasti Dubey',
    role: 'Head of Education Development',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Swarnim Chaudhary',
    role: 'Head of Community Development',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Tripti Malik',
    role: 'Head of Women Empowerment',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Udit Paliwal',
    role: 'Head of Education Operations & Kadam Coordinator',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Niharika Sharma',
    role: 'Oasis Coordinator',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Tejus Manoharan',
    role: 'Oasis & Kadam Joint Coordinator',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Ankita Choudhury',
    role: 'Apogee Coordinator',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Gaurav Bansal',
    role: 'Apogee Joint Coordinator & Yuvaan Coordinator',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Ayush Patel',
    role: 'Joy of Giving Week Coordinator',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Kanishka Gupta',
    role: 'Joy of Giving Week Joint Coordinator',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const Team: React.FC = () => {
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
            Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            The minds and hearts behind every Nirmaan initiative.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-fade-up"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-nunito font-bold text-charcoal mb-2">
                  {member.name}
                </h3>
                <p className="text-maroon font-semibold">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;