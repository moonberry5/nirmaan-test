import React from 'react';
import { MapPin, Mail, Phone, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rust/90 to-maroon/90 text-white section-padding">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-nunito font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to make a difference? We'd love to hear from you and explore how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-nunito font-bold text-charcoal mb-8">
                Let's Connect
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                Whether you want to volunteer, partner with us, or simply learn more about our work,
                we're here to help. Reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-maroon/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold text-charcoal mb-1">Address</h3>
                    <p className="text-charcoal/70">
                      Near BITS Pilani Campus<br />
                      Pilani, Rajasthan 333031<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold text-charcoal mb-1">Email</h3>
                    <p className="text-charcoal/70">contact@nirmaanpilani.org</p>
                    <p className="text-charcoal/70">volunteer@nirmaanpilani.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-rust/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-rust" />
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold text-charcoal mb-1">Phone</h3>
                    <p className="text-charcoal/70">+91 12345 67890</p>
                    <p className="text-charcoal/70">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-maroon/10 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold text-charcoal mb-1">Office Hours</h3>
                    <p className="text-charcoal/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12">
                <h3 className="text-xl font-nunito font-bold text-charcoal mb-4">Quick Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center bg-maroon text-white px-4 py-2 rounded-lg hover:bg-maroon-dark transition-colors">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </button>
                  <button className="flex items-center bg-forest text-white px-4 py-2 rounded-lg hover:bg-forest-dark transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </button>
                  <button className="flex items-center bg-rust text-white px-4 py-2 rounded-lg hover:bg-rust-dark transition-colors">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form Replacement */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-nunito font-bold text-charcoal mb-6">
                Send us a Message
              </h3>
              <p className="text-charcoal/70 mb-6">
                Please use the form below to get in touch with us.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-maroon text-white px-6 py-3 rounded-lg hover:bg-maroon-dark transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                Open Contact Form
              </a>

              {/* Existing form kept as comment */}
              {/*
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-nunito font-bold text-charcoal mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-charcoal font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-charcoal font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-colors"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-colors">
                      <option>Select a topic</option>
                      <option>Volunteer Opportunities</option>
                      <option>Internship Program</option>
                      <option>Donation Inquiry</option>
                      <option>Partnership Proposal</option>
                      <option>Media & Press</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-colors"
                      placeholder="Tell us more about how you'd like to get involved or what questions you have..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
              */}
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-paper-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-nunito font-bold text-charcoal mb-4">
              Find Us
            </h2>
            <p className="text-lg text-charcoal/70">
              Located in the heart of Pilani, we're easily accessible and always welcome visitors.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-maroon mx-auto mb-4" />
                <h3 className="text-xl font-nunito font-bold text-charcoal mb-2">Interactive Map</h3>
                <p className="text-charcoal/70">
                  Near BITS Pilani Campus, Pilani, Rajasthan 333031
                </p>
                <a
                  href="https://www.google.com/maps/place/Birla+Institute+of+Technology+And+Science+-+Pilani/@28.3563479,75.5859456,15z/data=!4m6!3m5!1s0x39131964f43e4575:0x1fbad30854cf884d!8m2!3d28.3591259!4d75.5881638!16zL20vMDFnNHYw?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-maroon font-semibold hover:text-maroon-dark transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-nunito font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-charcoal/70">
              Quick answers to common questions about getting involved with Nirmaan.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-nunito font-bold text-charcoal mb-2">How can I volunteer with Nirmaan?</h3>
              <p className="text-charcoal/70">
                You can apply when we roll out recruitments at the start of each semester. We offer various roles including
                teaching, women empowerment, community outreach, and external relations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-nunito font-bold text-charcoal mb-2">How can I donate to Nirmaan?</h3>
              <p className="text-charcoal/70">
                You can donate online through our secure donation portal or contact us for other donation methods.
                All donations are tax-deductible and go directly toward our programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-nunito font-bold text-charcoal mb-2">Can organizations partner with Nirmaan?</h3>
              <p className="text-charcoal/70">
                Absolutely! We welcome partnerships with corporations, educational institutions, and other NGOs.
                Contact us to discuss how we can collaborate for greater social impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;