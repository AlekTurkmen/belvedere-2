export default function Offer() {
  const offers = [
    {
      title: "Resume Review",
      description: "Get your resume reviewed by industry professionals who know what recruiters are looking for.",
      href: "/",
      delay: "1s"
    },
    {
      title: "LinkedIn Review",
      description: "Get your LinkedIn profile reviewed by a professional recruiter.",
      href: "/",
      delay: "2s"
    },
    {
      title: "Social Coaching",
      description: "Learn how to build and maintain professional relationships that last.",
      href: "/",
      delay: "3s"
    },
    {
      title: "Step-by-Step Instructions",
      description: "Develop a personalized roadmap to reach your dream job.",
      href: "/",
      delay: "4s"
    },
    {
      title: "Alumni Network",
      description: "Connect with Cooper Union alumni in your desired industry.",
      href: "/",
      delay: "5s"
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      <h1 className="text-5xl font-bold text-white text-center mb-16">
        What We <span className="text-[#438361]">Offer</span>
      </h1>

      {/* Infinite scroll container */}
      <div className="relative w-full">
        <div className="flex gap-4 animate-[slideBoxes_10s_linear_infinite]">
          {/* Double the offers array to create seamless loop */}
          {[...offers, ...offers].map((offer, index) => (
            <a
              key={index}
              href={offer.href}
              style={{ animationDelay: offer.delay }}
              className="flex-none w-[300px] p-6 bg-[#43836115] hover:bg-[#43836130] 
                rounded-lg transition-all duration-3000 transform hover:scale-105
                border border-[#438361] group animate-[bobbing_6s_ease-in-out_infinite]"
            >
              <h2 className="text-2xl font-bold text-white mb-4 transition-colors duration-3000" 
                  style={{ animationDelay: offer.delay }}>
                {offer.title}
              </h2>
              <p className="text-white transition-colors duration-3000"
                 style={{ animationDelay: offer.delay }}>
                {offer.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
