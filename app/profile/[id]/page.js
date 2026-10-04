export default async function UserProfilePage({ params }) {
  // 1. Tambahkan await sebelum mengambil id
  const { id } = await params;

  // 2. Fetch data menggunakan id yang sudah didapatkan
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  
  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2>User tidak ditemukan.</h2>
      </div>
    );
  }

  const user = await res.json();

  return (
    <div className="min-h-screen pt-24 px-6 max-w-3xl mx-auto">
      <div className="border border-zinc-800 rounded-xl p-8 bg-zinc-950 text-white">
        <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
        <p className="text-zinc-400 mb-8">@{user.username}</p>

        <div className="space-y-4">
          <div>
            <span className="text-zinc-500 text-sm">Email</span>
            <p className="text-lg">{user.email}</p>
          </div>
          <div>
            <span className="text-zinc-500 text-sm">Phone</span>
            <p className="text-lg">{user.phone}</p>
          </div>
          <div>
            <span className="text-zinc-500 text-sm">Website</span>
            <p className="text-lg">{user.website}</p>
          </div>
          <div>
            <span className="text-zinc-500 text-sm">Company</span>
            <p className="text-lg">{user.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
