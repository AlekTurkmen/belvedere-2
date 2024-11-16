import FAQ from '@/components/ui/Landing/FAQ';
import Intro from '@/components/ui/Landing/Intro';
import Stats from '@/components/ui/Landing/Stats';
import Process from '@/components/ui/Landing/Process';
import Why from '@/components/ui/Landing/Why';
import Offer from '@/components/ui/Landing/Offer';
import Students from '@/components/ui/Landing/Students';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col gap-8 w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Intro />
        <Stats />
        <Process />
        <Why /> 
        <Offer />
        <Students />
        <FAQ />
      </div>
    </div>
  );
}