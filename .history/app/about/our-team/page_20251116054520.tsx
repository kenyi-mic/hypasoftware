// app/about/our-team/page.tsx
import Link from "next/link";
import { TeamMember } from "@/types/about";

const OurTeam = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "chidi",
      name: "Chidi Okonkwo",
      role: "Founder & CEO",
      bio: "Passionate educator and technologist with 10+ years experience in African educational systems. Founded Hypasoftware to bridge the technology gap in African education.",
      image: "/team/chidi-okonkwo.jpg",
      social: {
        linkedin: "https://linkedin.com/in/chidi-okonkwo",
        twitter: "https://twitter.com/chidi_okonkwo",
        email: "chidi@hypasoftware.com",
      },
      expertise: [
        "Educational Technology",
        "Strategic Leadership",
        "African EdTech",
      ],
    },
    {
      id: "amina",
      name: "Amina Mohammed",
      role: "Chief Technology Officer",
      bio: "Software engineer with expertise in building scalable solutions for emerging markets. Leads our technical vision and product development.",
      image: "/team/amina-mohammed.jpg",
      social: {
        linkedin: "https://linkedin.com/in/amina-mohammed",
        twitter: "https://twitter.com/amina_mohammed",
        email: "amina@hypasoftware.com",
      },
      expertise: [
        "Software Architecture",
        "Cloud Infrastructure",
        "Mobile Development",
      ],
    },
    {
      id: "kwame",
      name: "Kwame Asante",
      role: "Head of Education",
      bio: "Former school principal with 15 years of teaching experience. Ensures our solutions meet real classroom needs and educational standards.",
      image: "/team/kwame-asante.jpg",
      social: {
        linkedin: "https://linkedin.com/in/kwame-asante",
        email: "kwame@hypasoftware.com",
      },
      expertise: [
        "Curriculum Development",
        "Teacher Training",
        "Educational Psychology",
      ],
    },
    {
      id: "zara",
      name: "Zara Nkosi",
      role: "Product Manager",
      bio: "User experience expert focused on creating intuitive educational tools that work seamlessly in African contexts.",
      image: "/team/zara-nkosi.jpg",
      social: {
        linkedin: "https://linkedin.com/in/zara-nkosi",
        twitter: "https://twitter.com/zara_nkosi",
        email: "zara@hypasoftware.com",
      },
      expertise: ["Product Strategy", "User Research", "UX Design"],
    },
    {
      id: "david",
      name: "David Okafor",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating robust, offline-first applications for schools with limited internet access.",
      image: "/team/david-okafor.jpg",
      social: {
        linkedin: "https://linkedin.com/in/david-okafor",
        email: "david@hypasoftware.com",
      },
      expertise: ["React/Next.js", "Node.js", "Offline-First Design"],
    },
    {
      id: "faith",
      name: "Faith Adebayo",
      role: "Community Manager",
      bio: "Builds and nurtures relationships with schools, teachers, and parents across our African markets.",
      image: "/team/faith-adebayo.jpg",
      social: {
        linkedin: "https://linkedin.com/in/faith-adebayo",
        email: "faith@hypasoftware.com",
      },
      expertise: [
        "Community Engagement",
        "Customer Success",
        "Partnership Development",
      ],
    },
  ];

  const advisoryBoard = [
    {
      id: "prof-adebayo",
      name: "Prof. Adebayo Johnson",
      role: "Educational Advisor",
      affiliation: "University of Lagos",
      bio: "Renowned education specialist with 30+ years experience in African educational policy and reform.",
    },
    {
      id: "dr-kamau",
      name: "Dr. Wanjiku Kamau",
      role: "Technology Advisor",
      affiliation: "African Tech Innovation Hub",
      bio: "Pioneer in African technology innovation and digital transformation across the continent.",
    },
    {
      id: "ms-bello",
      name: "Ms. Fatima Bello",
      role: "Business Advisor",
      affiliation: "Pan-African Ventures",
      bio: "Seasoned entrepreneur and investor focused on sustainable business models in emerging markets.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 mb-8">
              Passionate innovators dedicated to transforming African education
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Meet the diverse team of educators, technologists, and visionaries
              working together to make quality education accessible across
              Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              United by a Common Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team brings together diverse expertise from education,
              technology, and business, all united by a shared passion for
              transforming learning experiences across Africa. We understand the
              unique challenges facing African education and are committed to
              building solutions that make a real difference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">African Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">
                  Dedicated to African Education
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The driving force behind our mission to revolutionize education
              through technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-center font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-center mb-6">{member.bio}</p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seasoned experts guiding our strategic direction and ensuring we
              stay true to our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advisoryBoard.map((advisor) => (
              <div
                key={advisor.id}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                  {advisor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {advisor.name}
                </h3>
                <p className="text-green-600 font-semibold mb-2">
                  {advisor.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {advisor.affiliation}
                </p>
                <p className="text-gray-600 text-sm">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Want to Join Our Mission?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals who want to
            make a difference in African education through technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
