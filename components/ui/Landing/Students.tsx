export default function Students() {
  const testimonials = [
    {
      name: "Mekhi Vazquez CHE '26",
      image: "/students/mekhi.jpg",
      review: "\"Quote Coming Soon\"",
    },
    {
      name: "Rudis Jatnieks ME '28",
      image: "/students/rudis.jpg",
      review: "\"Quote Coming Soon\"",
    },
    {
      name: "Another Student EE '27",
      image: "/students/another.png",
      review: "\"Quote Coming Soon\"",
    },
    {
      name: <span className="text-zinc-400">And This</span>,
      isQuestionMark: true,
      review: <span className="text-zinc-400">Can Be <a href="/apply" className="text-[#438361] underline hover:text-[#438361]/80 transition-colors">You</a></span>,
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold text-white text-center mb-16">
        Students that I've <span className="text-[#438361]">Worked With</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Image or Question Mark */}
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[#438361] flex items-center justify-center bg-[#43836115]">
              {testimonial.isQuestionMark ? (
                <span className="text-[#438361] text-8xl font-bold">?</span>
              ) : (
                <img
                  src={testimonial.image}
                  alt={typeof testimonial.name === 'string' ? testimonial.name : ''}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            {/* Name */}
            <h3 className="text-2xl font-bold text-[#438361] mb-2">
              {testimonial.name}
            </h3>
            
            {/* Review */}
            <p className="text-zinc-400 text-lg">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
