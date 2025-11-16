// app/about/page.tsx
import Link from "next/link";

const AboutPage = () => {
  const stats = [
    {
      number: "500+",
      label: "Schools Empowered",
      description: "Educational institutions across Africa",
    },
    {
      number: "1M+",
      label: "Students Impacted",
      description: "Young minds reached through our solutions",
    },
    {
      number: "25K+",
      label: "Teachers Supported",
      description: "Educators equipped with digital tools",
    },
    {
      number: "15+",
      label: "African Countries",
      description: "Nations where we're making a difference",
    },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "We constantly push boundaries to create cutting-edge solutions that address real educational challenges across Africa.",
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description:
        "We believe quality education should be accessible to every African child, regardless of location or socioeconomic status.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We work closely with educators, students, and parents to build solutions that truly meet their needs.",
    },
    {
      icon: "🎯",
      title: "Impact-Driven",
      description:
        "We measure our success by the positive impact we create in classrooms and communities across Africa.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "Hypasoftware was born from a vision to bridge educational gaps through technology",
    },
    {
      year: "2021",
      title: "First Product Launch",
      description:
        "Launched our School Management System, serving schools in 3 African countries",
    },
    {
      year: "2022",
      title: "Regional Expansion",
      description:
        "Expanded to 8 African countries, impacting over 100,000 students",
    },
    {
      year: "2023",
      title: "Innovation Recognition",
      description:
        "Received African EdTech Innovation Award for our comprehensive learning platform",
    },
    {
      year: "2024",
      title: "Continental Reach",
      description:
        "Now serving 15+ African countries with plans to reach every corner of the continent",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Hypasoftware
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 mb-8">
              Transforming African Education Through Innovative Technology
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We are a passionate team of educators, technologists, and
              innovators committed to making quality education accessible and
              effective for every African learner.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link
              href="/about/who-we-are"
              className="group p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Who We Are
              </h3>
              <p className="text-gray-600 text-sm">
                Our mission, vision, and values
              </p>
            </Link>

            <Link
              href="/about/our-team"
              className="group p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Our Team
              </h3>
              <p className="text-gray-600 text-sm">
                Meet the people behind our mission
              </p>
            </Link>

            <Link
              href="/projects"
              className="group p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Our Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Explore our educational solutions
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To democratize quality education across Africa by developing
                  innovative, accessible, and affordable technology solutions
                  that empower educators, engage students, and connect parents
                  in the learning journey.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that every African child deserves access to
                  world-class educational tools, regardless of their
                  geographical location or economic background.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <svg
                    className="w-10 h-10 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To create a future where technology seamlessly enhances
                  education across Africa, breaking down barriers and creating
                  equal opportunities for all learners to reach their full
                  potential.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We envision an Africa where every classroom is equipped with
                  smart learning tools, every teacher is empowered with digital
                  resources, and every parent is actively involved in their
                  child&apos;s education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Making an Impact Across Africa
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Our numbers tell the story of our commitment to transforming
              education
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-blue-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Hypasoftware
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a bold vision to a growing movement transforming education
              across Africa
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 last:mb-0 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg ${
                        index % 2 === 0 ? "ml-auto" : "mr-auto"
                      } max-w-md`}
                    >
                      <div className="text-sm font-semibold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Africa Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why We Focus on Africa
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Africa has the world&apos;s youngest population, with over 60% of
              its people under the age of 25. This demographic dividend presents
              both an incredible opportunity and a profound responsibility to
              provide quality education that prepares the next generation for
              the future.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              We understand the unique challenges facing African education
              systems – from infrastructure limitations to curriculum relevance
              – and we&apos;re building solutions specifically designed for this
              context.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Local Context
                </h3>
                <p className="text-gray-600 text-sm">
                  Solutions built with deep understanding of African educational
                  systems
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Offline Capabilities
                </h3>
                <p className="text-gray-600 text-sm">
                  Designed to work reliably in low-bandwidth environments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Affordable Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Cost-effective pricing accessible to all educational
                  institutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join Us in Transforming African Education
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an educator, school administrator, technology
            enthusiast, or someone who believes in the power of education,
            there&apos;s a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/our-team"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Meet Our Team
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
