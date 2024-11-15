'use client'

import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import { useAuth } from '@/components/AuthProvider';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className={s.root}>
      <div className="bg-zinc-900 text-white px-6">
        <Navlinks user={user} />
      </div>
    </nav>
  );
}