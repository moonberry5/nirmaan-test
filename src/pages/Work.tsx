import React, { useState } from "react";

type Program = {
  title: string;
  description: string;
  category: "Education" | "Community Development" | "Women Empowerment";
};

const programs: Program[] = [
  {
    title: "School Adoption Program",
    description:
      "SAP aims to improve the learning environment of government schools by providing resources, infrastructure upgrades, and to enhance the overall education standard. Our ultimate goal is to provide enough comprehensive support to the schools so that they can eventually become selfreliant and sustain the improvements on their own.",
    category: "Education",
  },
  {
    title: "Utkarsh",
    description:
      "Volunteers identify and support underprivileged students with exceptional academic potential who are forced to discontinue education due to financial constraints. Scholarships are raised and collaborations are done with other projects.",
    category: "Education",
  },
  {
    title: "Disha",
    description:
      "Career counseling program for Grade 9 students of Hemant Academy, focused on long-term goals. Volunteers visit daily to guide 3-4 students at a time.",
    category: "Education",
  },
  {
    title: "Shiksha Ki Ore",
    description:
      "Focuses on providing quality education to children in Natt Basti, preventing child marriage, and fostering community development.",
    category: "Education",
  },
  {
    title: "Gyan Bodh Baas",
    description:
      "Revamps education systems and expands access to learning opportunities in underserved areas.",
    category: "Education",
  },
  {
    title: "Pilani ki Pathshala",
    description:
      "Tutoring and mentoring children of Mungda Basti, fostering educational growth and emotional support.",
    category: "Education",
  },
  {
    title: "Participatory Community Development",
    description:
      "Works with residents of bastis in and around Pilani to improve quality of life and equip them with day-to-day necessities through sustainable projects.",
    category: "Community Development",
  },
  {
    title: "Udaan",
    description:
      "Youth empowerment program offering employment opportunities and upskilling. Includes career counseling, motivational talks, and database creation.",
    category: "Community Development",
  },
  {
    title: "Unnati",
    description:
      "Women are guided to establish sustainable businesses through skills like stitching, jewelry making, and eco-friendly products.",
    category: "Women Empowerment",
  },
  {
    title: "Swayamshakti",
    description:
      "Supports rural women by teaching stitching, weaving, and embroidery to make scrunchies, cushions, and tote bags sold at fests.",
    category: "Women Empowerment",
  },
  {
    title: "Pragati",
    description:
      "Empowers rural women by teaching embroidery, painting, and other vocational skills to create salable products and generate income.",
    category: "Women Empowerment",
  },
];

const categories = ["All", "Education", "Community Development", "Women Empowerment"];

const partnerships = [
  "BITS Pilani",
  "Local NGOs",
  "Corporate Partners",
  "Alumni Network",
  "Educational Institutions",
  "Community Groups",
];

const Work: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredPrograms =
    filter === "All"
      ? programs
      : programs.filter((program) => program.category === filter);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rust/90 to-forest/90 text-white section-padding">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-nunito font-bold mb-6">
            Our Work & Domains
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive initiatives designed to create lasting change in rural communities across multiple domains.
          </p>
        </div>
      </section>
      {/* Key Programs */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Projects</h2>

        {/* Filter Bar */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg transition ${filter === cat ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div
                key={program.title}
                className="text-center p-8 bg-white rounded-xl shadow-lg card-hover transition transform hover:-translate-y-1"
              >
                {/* Placeholder Image */}
                <div className="h-56 w-full bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-gray-500">
                  [ Image ]
                </div>

                <h3 className="text-2xl font-nunito font-bold text-charcoal mb-4">
                  {program.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Approach */}
      <section className="section-padding bg-paper-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-nunito font-bold text-charcoal mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-charcoal/80 mb-6">
                We believe in a community-driven approach that ensures sustainability and local ownership of development initiatives.
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Community Assessment",
                    text: "We work closely with communities to understand their specific needs and challenges.",
                    color: "bg-maroon",
                  },
                  {
                    step: 2,
                    title: "Collaborative Planning",
                    text: "Local stakeholders participate in designing solutions that work for their context.",
                    color: "bg-forest",
                  },
                  {
                    step: 3,
                    title: "Implementation & Support",
                    text: "We provide resources, training, and ongoing support throughout the implementation phase.",
                    color: "bg-rust",
                  },
                  {
                    step: 4,
                    title: "Monitoring & Evaluation",
                    text: "Regular assessment ensures programs are effective and making the intended impact.",
                    color: "bg-maroon",
                  },
                ].map(({ step, title, text, color }) => (
                  <div className="flex items-start" key={step}>
                    <div
                      className={`w-8 h-8 ${color} text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1`}
                    >
                      {step}
                    </div>
                    <div>
                      <h4 className="font-nunito font-bold text-charcoal mb-2">
                        {title}
                      </h4>
                      <p className="text-charcoal/70">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Community work"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Digital literacy"
                className="rounded-lg shadow-md mt-8"
              />
              <img
                src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Education"
                className="rounded-lg shadow-md -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Healthcare"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-nunito font-bold text-charcoal mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Working together with various stakeholders to maximize our impact and reach.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
              >
                <div className="text-charcoal font-semibold text-sm">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gradient-to-r from-forest/90 to-maroon/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-nunito font-bold mb-6">
            Stories of Impact
          </h2>
          <p className="text-xl mb-8">
            Every program creates ripple effects of positive change that extend far beyond our direct intervention.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-nunito font-bold mb-2">95%</div>
              <div className="text-lg">Program Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-nunito font-bold mb-2">85%</div>
              <div className="text-lg">Employment Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-nunito font-bold mb-2">90%</div>
              <div className="text-lg">Community Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Work;