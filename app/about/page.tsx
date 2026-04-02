import Link from "next/link";
import { TeamCard } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alice Chen",
    role: "Lead Engineer",
    bio: "Passionate about building scalable systems and clean architecture.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
  },
  {
    name: "Bob Martinez",
    role: "Frontend Developer",
    bio: "Loves crafting pixel-perfect UIs with React and TailwindCSS.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
  },
  {
    name: "Carol Smith",
    role: "UX Designer",
    bio: "Designs intuitive experiences that users love to interact with.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    bio: "Keeps the infrastructure running smooth and deployments fast.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We are a small but mighty team building the future of agentic frontend
            development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}