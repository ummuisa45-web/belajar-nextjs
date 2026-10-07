'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';
import { useFavorite } from '@/context/FavoriteContext';

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorite();

  // Helper untuk menentukan status aktif menu
  const isActive = (path) => pathname === path;

  return (
    <header className="w-full flex justify-center py-4 fixed top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-3 bg-red-950/80 backdrop-blur-md border border-red-900/50 rounded-full shadow-lg max-w-4xl w-full mx-4">
        
        {/* Logo / Brand */}
        <Link href="/" className="font-bold text-white tracking-wider">
          TAHFIDZ.AI
        </Link>

        {/* Menu Navigasi Utama */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-red-200">
          <Link 
            href="/" 
            className={`transition-colors ${isActive('/') ? 'text-white font-medium' : 'hover:text-white'}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-white font-medium' : 'hover:text-white'}`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`transition-colors ${isActive('/services') ? 'text-white font-medium' : 'hover:text-white'}`}
          >
            Services
          </Link>
          <Link 
            href="/profile" 
            className={`transition-colors ${isActive('/profile') ? 'text-white font-medium' : 'hover:text-white'}`}
          >
            Profile
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors ${isActive('/contact') ? 'text-white font-medium' : 'hover:text-white'}`}
          >
            Contact
          </Link>
          <Link 
            href="/favorites" 
            className={`transition-colors ${isActive('/favorites') ? 'text-white font-medium' : 'hover:text-white'}`}
          >
            Favorites
          </Link>
        </div>

        {/* Tombol Aksi Kanan (Favorites + Get in Touch) */}
        <div className="flex items-center space-x-3">

          {/* Tombol CTA */}
          <Link
            href="/contact"
            className="bg-red-900 hover:bg-red-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors border border-red-700/50"
          >
            Get in touch
          </Link>
        </div>

      </nav>
    </header>
  );
}