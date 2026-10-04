// Contoh perbaikan di app/users/[id]/page.js

// 1. Fungsi untuk mengambil data user berdasarkan ID
async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    return null; // Return null jika gagal atau user tidak ditemukan
  }
  return res.json();
}

export default async function UserDetailPage({ params }) {
  // 2. Gunakan 'await' pada params (wajib di Next.js App Router versi baru)
  const resolvedParams = await params;
  const userId = resolvedParams.id;

  // 3. Ambil data user
  const user = await getUser(userId);

  // 4. Tangani jika data user tidak ada / undefined
  if (!user) {
    return (
      <div className="p-6 max-w-xl mx-auto text-white">
        <h2 className="text-xl font-bold text-red-500">User tidak ditemukan</h2>
        <p className="text-gray-400 mt-2">Data untuk ID {userId} tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">Detail Profil User</h2>
      
      {/* 5. Komponen UserCard atau Tampilan Detail */}
      <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col gap-4">
        <div>
          {/* Gunakan optional chaining (?.) untuk keamanan tambahan */}
          <h3 className="text-xl font-bold text-white">{user?.name}</h3>
          <p className="text-sm text-gray-400">Email: {user?.email}</p>
          <p className="text-sm text-gray-400">Telepon: {user?.phone}</p>
          <p className="text-sm text-gray-400">Website: {user?.website}</p>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <p className="text-sm text-gray-400">
            Perusahaan: <span className="text-gray-200">{user?.company?.name}</span>
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Kota: <span className="text-gray-200">{user?.address?.city}</span>
          </p>
        </div>
      </div>
    </div>
  );
}