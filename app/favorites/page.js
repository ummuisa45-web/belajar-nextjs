"use client";
import { useFavorite } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    // Tambahkan pt-28 atau pt-32 di sini untuk memberikan jarak dari navbar fixed
    <div className="max-w-5xl mx-auto pt-28 pb-16 px-6 text-white min-h-screen">
      <p className="text-sm text-red-300 mb-1">Favorite</p>
      <h1 className="text-4xl font-bold mb-2">My Favorite Users</h1>
      <p className="text-red-200/70 mb-8">Data ini diambil langsung dari FavoriteContext.</p>
      
      {favorites.length === 0 ? (
        <div className="p-8 rounded-2xl bg-red-950/40 border border-red-900/50 text-center">
          <p className="text-red-200">Belum ada user yang difavoritkan.</p>
        </div>
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