'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State untuk search bar

  // 1. Ambil data dari API dan localStorage
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Gagal memuat data:', err));

    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // 2. Fungsi untuk menambah atau menghapus status favorit
  const toggleFavorite = (user) => {
    let updatedFavorites;
    const isAlreadyFavorite = favorites.some((fav) => fav.id === user.id);

    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== user.id);
    } else {
      updatedFavorites = [...favorites, user];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // 3. Filter user berdasarkan kata kunci pencarian (nama atau email)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header & Counter Favorit */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white">Daftar User API</h2>
        <span className="text-sm text-gray-300 bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
          Favorite ({favorites.length})
        </span>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari user berdasarkan nama atau email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition"
        />
      </div>

      {/* Grid Kartu User */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => {
            const isFavorite = favorites.some((fav) => fav.id === user.id);

            return (
              <div key={user.id} className="p-4 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{user.name}</h3>
                  <p className="text-sm text-gray-400">{user.email}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Perusahaan: <span className="text-gray-200">{user.company?.name}</span>
                  </p>
                </div>

                {/* Tombol Aksi */}
                <div className="flex gap-2 mt-4">
                  <Link
                    href={`/users/${user.id}`}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition"
                  >
                    View Profile
                  </Link>

                  <button
                    onClick={() => toggleFavorite(user)}
                    className={`px-3 py-1.5 text-sm rounded-lg transition ${
                      isFavorite
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                    }`}
                  >
                    {isFavorite ? '❤️ Favorited' : '❤ Favourite'}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-400 col-span-2 text-center py-8">User tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}