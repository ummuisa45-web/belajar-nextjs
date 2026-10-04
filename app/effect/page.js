'use client';
import React, { useState, useEffect } from 'react';

export default function UserList() {
  // 1. Deklarasi semua state yang dibutuhkan
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 2. useEffect untuk mengambil data dari API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Cek apakah response dari server gagal (misal 404 atau 500)
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
      })
      .then((data) => {
        // Jika sukses: simpan data dan matikan loading
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        // Jika gagal (network error/response tidak ok): simpan pesan error dan matikan loading
        setError(error.message);
        setLoading(false);
      });
  }, []); // Array kosong agar fetch hanya berjalan sekali saat pertama dimuat

  // 3. Tampilkan UI Loading jika state loading masih true
  if (loading) {
    return <p>Loading...</p>;
  }

  // 4. Tampilkan UI Error jika terdapat pesan error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // 5. Tampilan utama jika data sukses diambil (tidak loading & tidak error)
  return (
    <div>
      <h1>Daftar Pengguna</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}