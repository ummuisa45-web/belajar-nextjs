'use client';
import { Heart } from 'lucide-react';
import { useFavorite } from '@/context/FavoriteContext';

export default function UserCard({ user }) {
  const { favorites, toggleFavorite } = useFavorite();

  // Cek apakah user ini sedang difavoritkan
  const isFavorite = favorites.some((fav) => fav.id === user.id);

  return (
    <div className="bg-red-950/40 border border-red-900/50 rounded-2xl p-6 relative shadow-md flex flex-col justify-between">
      
      {/* Tombol Favorit */}
      <button
        onClick={() => toggleFavorite(user)}
        className="absolute top-4 right-4 p-2 rounded-full bg-red-900/40 hover:bg-red-800 transition-colors border border-red-800/60"
        aria-label="Favorite button"
      >
        <Heart
          className={`w-5 h-5 transition-colors ${
            isFavorite ? 'fill-red-500 text-red-500' : 'text-white'
          }`}
        />
      </button>

      {/* Informasi User */}
      <div>
        <h3 className="text-xl font-bold mb-1">{user.name}</h3>
        <p className="text-red-200/70 text-sm mb-4">{user.role || 'Member'}</p>
        <p className="text-sm text-gray-300">{user.bio || 'Tidak ada deskripsi.'}</p>
      </div>

    </div>
  );
}