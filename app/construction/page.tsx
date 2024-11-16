import FAQ from '@/components/ui/Landing/FAQ';
import Intro from '@/components/ui/Landing/Intro';
import Stats from '@/components/ui/Landing/Stats';
import Process from '@/components/ui/Landing/Process';

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pt-2 pb-20 gap-5 sm:p-20 sm:pt-4 font-[family-name:var(--font-geist-sans)] bg-black text-white">
          <main className="flex flex-col gap-8 row-start-2 items-center">    
            <Intro />
            <Stats />
            <Process />
            <FAQ />
          </main>
      </div>
    </div>
  );
}