'use client';

import Link from 'next/link';
import Image from 'next/image';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  return (
    <div className="text-white px-6 py-6">
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        <div className="flex-1 flex items-center">
        <Link href="/" className="hover:text-zinc-200 transition flex items-center gap-2">
          Belvedere
          <img 
            className="w-6 h-6 brightness-0 invert" 
            src="https://www.svgrepo.com/show/322951/penguin.svg" 
            loading="lazy" 
            alt="belvedere penguin"
          />
        </Link>
        </div>
        <div className="flex justify-end flex-1">
          <Link href="/login" className="hover:text-zinc-200 transition">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}