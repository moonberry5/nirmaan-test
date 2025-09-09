import React from 'react';
import { Users, Heart, Clock, MapPin, Mail, Phone } from 'lucide-react';

const GetInvolved = () => {

  const donationOptions = [
    {
      amount: "₹500",
      impact: "Provides school supplies for 5 children for a month",
      category: "Education Support"
    },
    {
      amount: "₹1,000",
      impact: "Funds skill training materials for 2 women",
      category: "Women Empowerment"
    },
    {
      amount: "₹2,500",
      impact: "Supports digital literacy training for 10 people",
      category: "Digital Education"
    },
    {
      amount: "₹5,000",
      impact: "Sponsors a scholarship for one deserving student",
      category: "Higher Education"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-maroon/90 to-rust/90 text-white section-padding">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-nunito font-bold mb-6">
            Donate
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join our mission to transform rural communities. Every contribution, big or small, makes a difference.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-paper-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-nunito font-bold text-charcoal mb-4">
              Make a Donation
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Your financial support helps us expand our reach and create greater impact in rural communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
                <div className="text-3xl font-nunito font-bold text-maroon mb-3">{option.amount}</div>
                <div className="text-sm text-rust font-semibold mb-3">{option.category}</div>
                <p className="text-charcoal/70 text-sm mb-6">{option.impact}</p>
                <button className="w-full bg-rust hover:bg-rust-dark text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-charcoal/70 mb-6">Want to make a custom donation or set up monthly giving?</p>
            <button className="btn-primary">
              Custom Donation
            </button>
          </div>
          <div className="text-center mt-12">
            <p className="text-charcoal/70 mb-6">Want to do CSR Funding?</p>
            <button className="btn-primary">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;