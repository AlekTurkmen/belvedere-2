'use client';

import Link from 'next/link';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  return (
    <div className="text-white px-6 py-6">
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        <div className="flex-1">
          <Link href="/" className="hover:text-zinc-200 transition">
            Services
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