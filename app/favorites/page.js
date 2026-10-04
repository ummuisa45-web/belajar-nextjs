"use client";
import { useFavorite } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  // Ambil daftar favorit dari Context
  const { favorites } = useFavorite();

  return (
    <div className="max-w-5xl mx-auto py-10 px-6 text-white">
      <p className="text-sm text-gray-400 mb-1">Favorite</p>
      <h1 className="text-4xl font-bold mb-2">My Favorite Users</h1>
      <p className="text-gray-400 mb-8">Data ini diambil langsung dari FavoriteContext.</p>
      
      {/* Render ulang data favorit */}
      {favorites.length === 0 ? (
        <p>Belum ada user yang difavoritkan.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}