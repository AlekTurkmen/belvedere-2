import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-6">
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="hover:text-zinc-200 transition">
          Home
        </Link>
        <Link href="/" className="hover:text-zinc-200 transition">
          Privacy Policy
        </Link>
        <Link href="/" className="hover:text-zinc-200 transition">
          Terms of Use
        </Link>
        <div>
          &copy; {new Date().getFullYear()} Alek Turkmen All rights reserved.
        </div>
      </div>
    </footer>
  );
}