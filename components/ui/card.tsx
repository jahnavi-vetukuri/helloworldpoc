type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export function TeamCard({ name, role, bio, avatar }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 gap-4 hover:shadow-lg transition-shadow">
      <img
        src={avatar}
        alt={`${name} avatar`}
        className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-indigo-600 font-medium">{role}</p>
      </div>
      <p className="text-sm text-gray-500 text-center leading-relaxed">{bio}</p>
    </div>
  );
}