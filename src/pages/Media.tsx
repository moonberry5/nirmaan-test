import React, { useState } from 'react';
import { Play, Image, Quote, Calendar } from 'lucide-react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const photos = [
    {
      url: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Education Center in Action",
      description: "Children engaged in learning activities at our education center"
    },
    {
      url: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Women Empowerment Workshop",
      description: "Skill development session for rural women"
    },
    {
      url: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Digital Literacy Training",
      description: "Teaching computer skills to community members"
    },
    {
      url: "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Health Awareness Camp",
      description: "Community health checkup and awareness program"
    },
    {
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Skill Development Training",
      description: "Vocational training session for youth"
    },
    {
      url: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Community Gathering",
      description: "Local community meeting and discussion"
    }
  ];

  const videos = [
    {
      thumbnail: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Education Program Impact",
      duration: "3:45",
      description: "See how our education initiatives are transforming young lives"
    },
    {
      thumbnail: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Women Empowerment Success Stories",
      duration: "5:20",
      description: "Inspiring stories of women who have transformed their lives"
    },
    {
      thumbnail: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Digital Divide Bridge",
      duration: "4:10",
      description: "How we're bringing digital literacy to rural communities"
    },
    {
      thumbnail: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Community Development Journey",
      duration: "6:30",
      description: "A comprehensive look at our community development work"
    }
  ];

  const testimonials = [
    {
      name: "Meera Sharma",
      role: "Beneficiary, Women Empowerment Program",
      quote: "Nirmaan's skill development program changed my life. I learned tailoring and now run my own business, supporting my family with dignity.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Village Khejroli, Rajasthan"
    },
    {
      name: "Rahul Kumar",
      role: "Student, Education Support Program",
      quote: "Thanks to Nirmaan's scholarship, I was able to complete my engineering degree. Now I'm working as a software engineer and giving back to my community.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Village Ratangarh, Rajasthan"
    },
    {
      name: "Sunita Devi",
      role: "Digital Literacy Graduate",
      quote: "Learning to use computers and the internet opened up a whole new world for me. I can now help my children with their studies and stay connected with family.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Village Mandawa, Rajasthan"
    },
    {
      name: "Amit Singh",
      role: "Volunteer Teacher",
      quote: "Being part of Nirmaan's education program has been incredibly rewarding. Seeing children discover their potential and pursue their dreams is priceless.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Volunteer from Jaipur"
    }
  ];

  const newsItems = [
    {
      title: "Nirmaan Reaches Milestone of 5000 Children Educated",
      date: "March 15, 2024",
      source: "Rajasthan Patrika",
      excerpt: "Local NGO Nirmaan Pilani celebrates significant achievement in rural education development..."
    },
    {
      title: "Digital Literacy Program Wins State Recognition",
      date: "February 28, 2024",
      source: "Dainik Bhaskar",
      excerpt: "Nirmaan's innovative approach to teaching digital skills in rural areas receives state government appreciation..."
    },
    {
      title: "Women Entrepreneurs Showcase Success at District Fair",
      date: "January 20, 2024",
      source: "Times of India",
      excerpt: "Women trained under Nirmaan's empowerment program display their products and share success stories..."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-forest/90 to-rust/90 text-white section-padding">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-nunito font-bold mb-6">
            Media Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore our journey through photos, videos, and stories from the field.
          </p>
        </div>
      </section>

      {/* Media Navigation */}
      <section className="bg-paper-light py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-1 bg-white rounded-lg p-2 shadow-md">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'photos' 
                  ? 'bg-maroon text-white' 
                  : 'text-charcoal hover:bg-maroon/10'
              }`}
            >
              <Image className="h-5 w-5 mr-2" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'videos' 
                  ? 'bg-maroon text-white' 
                  : 'text-charcoal hover:bg-maroon/10'
              }`}
            >
              <Play className="h-5 w-5 mr-2" />
              Videos
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'testimonials' 
                  ? 'bg-maroon text-white' 
                  : 'text-charcoal hover:bg-maroon/10'
              }`}
            >
              <Quote className="h-5 w-5 mr-2" />
              Stories
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'news' 
                  ? 'bg-maroon text-white' 
                  : 'text-charcoal hover:bg-maroon/10'
              }`}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Press
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Photos Tab */}
          {activeTab === 'photos' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-nunito font-bold text-charcoal mb-4">
                  Photo Gallery
                </h2>
                <p className="text-lg text-charcoal/70">
                  Capturing moments of transformation and impact in our communities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={photo.url} 
                        alt={photo.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="font-nunito font-bold mb-1">{photo.title}</h3>
                          <p className="text-sm">{photo.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-nunito font-bold text-charcoal mb-4">
                  Video Stories
                </h2>
                <p className="text-lg text-charcoal/70">
                  Watch our programs in action and hear directly from those we serve.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-nunito font-bold text-charcoal mb-2">{video.title}</h3>
                      <p className="text-charcoal/70">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-nunito font-bold text-charcoal mb-4">
                  Success Stories
                </h2>
                <p className="text-lg text-charcoal/70">
                  Real stories from real people whose lives have been transformed.
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
                        <p className="text-maroon text-sm font-semibold">{testimonial.role}</p>
                        <p className="text-charcoal/60 text-xs">{testimonial.location}</p>
                      </div>
                    </div>
                    <blockquote className="text-charcoal/80 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News Tab */}
          {activeTab === 'news' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-nunito font-bold text-charcoal mb-4">
                  Press & Recognition
                </h2>
                <p className="text-lg text-charcoal/70">
                  Media coverage and recognition of our work and impact.
                </p>
              </div>
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-nunito font-bold text-charcoal mb-2">{item.title}</h3>
                        <div className="flex items-center text-sm text-charcoal/60 mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{item.date}</span>
                          <span className="mx-2">•</span>
                          <span>{item.source}</span>
                        </div>
                        <p className="text-charcoal/70">{item.excerpt}</p>
                      </div>
                    </div>
                    <button className="text-maroon font-semibold hover:text-maroon-dark transition-colors">
                      Read Full Article →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-maroon/90 to-forest/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-nunito font-bold mb-6">
            Share Your Story
          </h2>
          <p className="text-xl mb-8">
            Are you part of the Nirmaan community? We'd love to feature your story and inspire others.
          </p>
          <button className="bg-white text-maroon hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Submit Your Story
          </button>
        </div>
      </section>
    </div>
  );
};

export default Media;