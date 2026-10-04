export async function GET() {
  const myProfile = {
    name: "Lia Mulyani", // Ganti dengan nama aslimu
    role: "peserta bootcamp",
    favoriteTech: ["Next.js", "React"] // Boleh diganti/ditambah sesuai teknologi favoritmu
  };

  return Response.json(myProfile);
}