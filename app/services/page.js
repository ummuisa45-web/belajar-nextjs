export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
      <p className="text-gray-400 max-w-2xl mb-12 text-lg">
        We help individuals and businesses build modern, simple, and useful digital experiences.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Service 1 */}
        <div className="p-8 border border-gray-800 rounded-xl bg-neutral-950 hover:border-gray-600 transition-colors">
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Building fast, responsive, and modern websites using Next.js and Tailwind CSS to establish your digital presence.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-8 border border-gray-800 rounded-xl bg-neutral-950 hover:border-gray-600 transition-colors">
          <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Crafting intuitive, beautiful, and user-friendly interfaces focusing on simplicity and utility.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-8 border border-gray-800 rounded-xl bg-neutral-950 hover:border-gray-600 transition-colors">
          <h3 className="text-xl font-semibold mb-3">Digital Strategy</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Providing expert advice to help scale your business and optimize your digital workflows.
          </p>
        </div>
      </div>
    </main>
  );
}