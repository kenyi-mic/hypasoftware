// components/home/CTASection.tsx
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-linear-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join thousands of schools already using Hypasoftware to create
            better learning experiences, streamline operations, and build
            stronger educational communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/demo"
              className="group relative px-8 py-4 bg-white text-blue-600 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-linear-to-r from-white to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="text-blue-200 text-sm">
            <p>
              ✅ No credit card required • ✅ 21-days free trial • ✅ Setup in
              minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
