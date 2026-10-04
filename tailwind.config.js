export default function UserCard({ user }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">
        {user.name}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {user.email}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        {user.company.name}
      </p>
    </div>
  );
}