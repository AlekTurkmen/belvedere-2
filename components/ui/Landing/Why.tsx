export default function Why() {
  return (
    <div className="flex flex-col w-[100%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Title */}
      <h1 className="text-5xl font-bold text-white text-center mb-8">
        Why Am I Doing This?
      </h1>

      {/* Subtitle text */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <h3 className="text-2xl text-zinc-400 text-center">
          I was in the <span className="underline">same spot</span> you were, three years ago trying to get internships.
        </h3>
        <h3 className="text-2xl text-zinc-400 text-center">
          I want to help Cooper students out, and maximize your chances at <span className="underline">landing a job</span>.
        </h3>
      </div>

      {/* Video placeholder */}
      <div className="relative w-full aspect-video bg-zinc-900 rounded-lg flex flex-col items-center justify-center p-8">
        <h3 className="text-xl text-zinc-400 text-center mb-4">
          YouTube video coming soon. In the meantime, you can click this link to understand my recruiting history.
        </h3>
        <a 
          href="https://www.alekturkmen.com/project-belvedere/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#438361] hover:text-zinc-200 transition-colors flex items-center gap-2"
        >
          View My Offer Letter ↗
        </a>
      </div>
    </div>
  )
}
