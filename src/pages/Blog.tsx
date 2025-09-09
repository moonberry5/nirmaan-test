import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "Transforming Lives Through Digital Literacy: A Village's Journey",
    excerpt: "How introducing computers and internet access changed everything for the people of Khejroli village.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: "Priya Sharma",
    date: "March 20, 2024",
    readTime: "8 min read",
    category: "Impact Stories"
  };

  const posts = [
    {
      title: "The Power of Education: Success Stories from Our Learning Centers",
      excerpt: "Meet five students whose lives were transformed through our education support programs.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Rajesh Kumar",
      date: "March 15, 2024",
      readTime: "6 min read",
      category: "Education"
    },
    {
      title: "Women Entrepreneurs: Building Economic Independence",
      excerpt: "How our skill development programs are creating women business leaders in rural Rajasthan.",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Meera Singh",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Women Empowerment"
    },
    {
      title: "Healthcare Awareness: Preventive Care in Rural Communities",
      excerpt: "The impact of our health education programs on community wellness and disease prevention.",
      image: "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Dr. Amit Sharma",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Healthcare"
    },
    {
      title: "Volunteer Spotlight: Stories from the Field",
      excerpt: "Our volunteers share their experiences and the profound impact of community service.",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sunita Devi",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Volunteer Stories"
    },
    {
      title: "Partnership Success: Collaborating for Greater Impact",
      excerpt: "How strategic partnerships have amplified our reach and effectiveness in rural development.",
      image: "https://images.pexels.com/photos/3182804/pexels-photo-3182804.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Amit Singh",
      date: "February 25, 2024",
      readTime: "6 min read",
      category: "Partnerships"
    },
    {
      title: "Sustainability in Development: Our Long-term Approach",
      excerpt: "Exploring how we ensure our programs create lasting change that continues beyond our involvement.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Ravi Patel",
      date: "February 20, 2024",
      readTime: "8 min read",
      category: "Methodology"
    }
  ];

  const categories = [
    "All Posts",
    "Impact Stories",
    "Education",
    "Women Empowerment",
    "Healthcare",
    "Volunteer Stories",
    "Partnerships",
    "Methodology"
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
          <h1 className="text-4xl md:text-5xl font-nunito font-bold mb-6">
            Stories from the Field
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Insights, updates, and stories from our work in rural communities across India.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-maroon text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="bg-rust/20 text-rust px-3 py-1 rounded-full text-sm font-semibold ml-2">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-nunito font-bold text-charcoal mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-charcoal/70 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-charcoal/60 text-sm mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="btn-primary inline-flex items-center">
                  Read Full Story <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-paper-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  index === 0 
                    ? 'bg-maroon text-white' 
                    : 'bg-white text-charcoal hover:bg-maroon/10 hover:text-maroon'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-nunito font-bold text-charcoal mb-4">
              Latest Posts
            </h2>
            <p className="text-lg text-charcoal/70">
              Stay updated with our latest activities, insights, and impact stories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="h-4 w-4 text-rust mr-2" />
                    <span className="text-rust text-sm font-semibold">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-nunito font-bold text-charcoal mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-charcoal/60 text-sm mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-maroon font-semibold hover:text-maroon-dark transition-colors inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-forest/90 to-maroon/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-nunito font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive monthly updates about our programs, impact stories, and volunteer opportunities.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-maroon px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-80 mt-3">
              We respect your privacy and never spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;