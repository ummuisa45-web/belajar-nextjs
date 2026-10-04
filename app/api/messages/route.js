import { NextResponse } from 'next/server';
import { messages } from '@/lib/db';

// 1. Method GET: Mengambil semua data pesan
export async function GET() {
  try {
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Gagal mengambil data pesan' },
      { status: 500 }
    );
  }
}

// 2. Method POST: Menambahkan pesan baru (opsional, jika diuji lewat Postman/Thunder Client)
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validasi sederhana
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Nama, email, dan pesan harus diisi!' },
        { status: 400 }
      );
    }

    // Membuat objek pesan baru
    const newMessage = {
      id: Date.now(), // ID unik berdasarkan timestamp
      name: body.name,
      email: body.email,
      message: body.message,
    };

    // Menambahkan ke array messages (Catatan: jika @/lib/db menggunakan array in-memory, 
    // data akan reset jika server direstart)
    messages.push(newMessage);

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Gagal memproses data' },
      { status: 400 }
    );
  }
}