export default function Intro() {
  return (
    <div className="flex flex-col w-full md:w-[calc(100%-200px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32 md:ml-[200px]">
      {/* Title and Penguin section */}
      <h3 className="text-2xl md:text-4xl font-bold text-white self-start">
          This is
      </h3>
      <div className="relative flex items-center justify-start gap-4 mb-12">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#438361] z-10">
          Project Belvedere
        </h1>
        <img 
          className="absolute -right-[70px] md:-right-[140px] top-[-100px] md:top-[-200px] w-[300px] md:w-[600px] h-[300px] md:h-[600px] brightness-0 invert transform scale-x-[-1] z-0" 
          src="https://www.svgrepo.com/show/322951/penguin.svg" 
          loading="lazy" 
          alt="belvedere penguin"
        />
      </div>

      {/* Cascading text boxes with image */}
      <div className="relative w-full">
        {/* Left side image - hidden on mobile */}
        <div className="hidden md:block absolute left-[-200px] top-[-40px]">
          <img 
            src="/suitcase1-svgrepo-com.svg" 
            alt="Decorative"
            className="h-[150px] object-contain animate-[float_6s_ease-in-out_infinite]"
          />
        </div>
        <div className="hidden md:block absolute left-[-350px] top-[0px]">
          <img 
            src="/hand-holding-svgrepo-com.svg" 
            alt="Decorative"
            className="h-[400px] object-contain"
          />
        </div>

        {/* Cascading text */}
        <div className="flex flex-col gap-2 ml-0 md:ml-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white animate-[slide_5s_ease-in-out_infinite]">
            Hack The Hiring Process.
          </h3>
          
          <h3 className="text-xl md:text-2xl font-bold text-white ml-8 md:ml-32 animate-[slide_5s_ease-in-out_infinite_1000ms]">
            Create Your Own Nepotism.
          </h3>
          
          <h3 className="text-xl md:text-2xl font-bold text-white ml-16 md:ml-64 animate-[slide_5s_ease-in-out_infinite_2000ms]">
            Get Your Dream Job.
          </h3>
        </div>
      </div>
    </div>
  )
}
