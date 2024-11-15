import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className={s.root}>
      <div className="bg-zinc-900 text-white px-6">
        <Navlinks />
      </div>
    </nav>
  );
}