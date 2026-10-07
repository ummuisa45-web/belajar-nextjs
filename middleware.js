// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const waktu = new Date().toISOString();

  // 1. Fitur Logger: Mencatat setiap request API atau halaman ke console terminal
  console.log(`[${waktu}] ${request.method} ${url.pathname}`);

  // 2. Fitur Maintenance Mode
  const isMaintenance = process.env.MAINTENANCE_MODE === "true";
  const isMaintenancePage = url.pathname === "/maintenance";

  if (isMaintenance && !isMaintenancePage) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  // Proteksi /favorites sudah dihilangkan, sehingga halaman bisa diakses secara bebas

  return NextResponse.next();
}

// Konfigurasi matcher tunggal untuk mencakup seluruh kebutuhan di atas
export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};