import { ProgressDemo } from '@/components/ProgressDemo';
import FAQ from '@/components/ui/Landing/FAQ';
import Intro from '@/components/ui/Landing/Intro';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
          <main className="flex flex-col gap-8 row-start-2 items-center">    
            <div className="text-4xl font-bold">
              🚧<span style={{ color: '#438361' }}>Project Belvedere</span> Is Under{' '}
              <Link href="/construction" className="no-underline text-white hover:text-white">
                Construction
              </Link>{' '}
              🚧
            </div>  
            <ProgressDemo />
            <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
                <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-[#438361] hover:text-white dark:hover:bg-[#438361] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="https://alekturkmen.com/project-belvedere"
                target="_blank"
                rel="noopener noreferrer"
                >
                Our Offer
                </a>
              <a
                className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#438361] dark:hover:bg-[#438361] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="https://app.formbricks.com/s/cm37zuhz0000bc4b4132dinci?suId=c9d73699e949b625e9ff29f839129202:cd2a9f994e4cec124bb69dd81af88cc7cc19f03776dd7335fee7387b06336260"
                target="_blank"
                rel="noopener noreferrer"
              >
                Early Access Sign Up
              </a>
            </div>
          </main>
      </div>
    </div>
  );
}
