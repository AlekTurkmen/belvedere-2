export default function Process() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-4 mt-[-4rem]">
      {/* Main Title */}
      <h1 className="text-5xl font-bold text-white text-center mb-16">
        How Does <span className="text-[#438361]">Project Belvedere</span> Work?
      </h1>

      {/* Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
          1. We Interview You
          </h3>
          <img 
            src="/interview-svgrepo-com.svg"
            alt="Connect"
            className="w-48 h-48 m-5"
          />
          <p className="text-zinc-400">
          Tell us your ideal career path post graduation.<br></br><br></br>
          Where do you want to be in 5 years? 10 years?<br></br><br></br>
          What is the best thing on your resume?
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            2. We Prep You
          </h3>
          <img 
            src="/homework-svgrepo-com.svg"
            alt="Discover"
            className="w-48 h-48 m-5"
          />
          <p className="text-zinc-400">
          How to create your own nepotism.<br></br><br></br>
          Step by step instructions on from start to finish.<br></br><br></br>
          How to conduct yourself socially and professionally.<br></br><br></br>
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
          3. You Get The Job
          </h3>
          <img 
            src="/trophy-svgrepo-com.svg"
            alt="Succeed"
            className="w-48 h-48 m-5"
          />
          <p className="text-zinc-400">
          Get the dream job your mom always wanted for you.<br></br><br></br>
          We connect you with the right people.<br></br><br></br>
          You build your professional network.  
          </p>
        </div>
      </div>
    </div>
  )
}
