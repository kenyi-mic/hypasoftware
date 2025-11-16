// components/contact/OfficeMap.tsx
"use client";

const OfficeMap = () => {
  // Static map image as fallback - in production, you'd use Google Maps Embed API or similar
  const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Tongping,Juba,South+Sudan&zoom=15&size=600x400&markers=color:blue%7Clabel:H%7CTongping,Juba,South+Sudan&key=${
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY"
  }`;

  const handleMapClick = () => {
    // Open in Google Maps
    window.open(
      "https://maps.google.com/?q=Tongping,Juba,South+Sudan",
      "_blank"
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h2>
        <p className="text-gray-600 mb-6">
          Visit our office in Juba, South Sudan
        </p>

        {/* Map Container */}
        <div
          className="relative rounded-lg overflow-hidden border border-gray-200 cursor-pointer group"
          onClick={handleMapClick}
        >
          {/* Fallback map image */}
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-700 font-semibold">Tongping, Juba</p>
              <p className="text-gray-500 text-sm">Near American Residence</p>
              <p className="text-blue-600 text-sm mt-2 group-hover:text-blue-700 transition-colors">
                Click to open in Google Maps →
              </p>
            </div>
          </div>

          {/* Interactive overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 flex items-center justify-center">
            <div className="bg-white rounded-lg px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium text-gray-900">
                View on Google Maps
              </span>
            </div>
          </div>
        </div>

        {/* Address Details */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
            <p className="text-gray-600">
              Tongping Area
              <br />
              Near American Residence
              <br />
              Juba, Central Equatoria
              <br />
              South Sudan
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeMap;
