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
          <Link href="/" className="hover:text-zinc-200 transition">
            Belvedere
          </Link>
          <div className="relative -right-2 -top-1">
            {/* <Image
              src="/public/BelvederePenguin.png"
              alt=""
              width={16}
              height={16}
              className="inline-block"
            /> */}
          </div>
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