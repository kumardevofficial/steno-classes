import { Star } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "NetApp",
    logo: "https://1000logos.net/wp-content/uploads/2021/08/NetApp-logo.png",
    rating: 3.7,
    reviews: "401 reviews",
    tags: ["Software Product", "IT Services & Consulting"],
  },
  {
    id: 2,
    name: "Tata Technologies",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Tata_Technologies_Logo.svg/512px-Tata_Technologies_Logo.svg.png",
    rating: 3.5,
    reviews: "2.9K+ reviews",
    tags: ["IT Services & Consulting", "Conglomerate", "Foreign MNC"],
  },
  {
    id: 3,
    name: "IQor",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/IQor_logo.png",
    rating: 3.4,
    reviews: "943 reviews",
    tags: ["IT Services & Consulting", "BPM / BPO", "Foreign MNC", "B2B"],
  },
  {
    id: 4,
    name: "Collins Aerospace",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Collins_Aerospace_logo.svg/512px-Collins_Aerospace_logo.svg.png",
    rating: 3.8,
    reviews: "894 reviews",
    tags: ["Defence & Aerospace", "Foreign MNC", "B2B", "Private"],
  },
];

const JobCard = () => {
  return (
    <div className="w-full bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col items-center hover:shadow-lg transition"
          >
            {/* Logo */}
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img
                src={company.logo}
                alt={company.name}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Name */}
            <h3 className="font-semibold text-gray-900 text-lg mb-2">
              {company.name}
            </h3>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="font-medium">{company.rating}</span>
              <span>| {company.reviews}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {company.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm border rounded-full text-gray-600 border-gray-300 bg-gray-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
