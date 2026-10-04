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

  // 3. Fitur Auth Guard (Proteksi Halaman /favorites)
  if (url.pathname.startsWith("/favorites")) {
    const token = request.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

// Konfigurasi matcher tunggal untuk mencakup seluruh kebutuhan di atas
export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};