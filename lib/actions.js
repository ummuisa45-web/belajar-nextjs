"use server";

export async function submitContactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log({ name, email, message });
  return { success: true, message: "Pesan berhasil terkirim!" };
}