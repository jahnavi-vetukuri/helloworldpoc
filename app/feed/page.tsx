"use client";

import React, { useState } from "react";
import Link from "next/link";

type PostCategory = "Holiday" | "Product Update" | "Launch" | "Promotion" | "Anniversary";
type ReactionKey = "kudos" | "cheer" | "heart";

type Post = {
  id: number;
  category: PostCategory;
  title: string;
  body: string;
  author: string;
  role: string;
  avatar: string;
  timestamp: string;
  reactions: Record<ReactionKey, number>;
  comments: number;
};

const posts: Post[] = [
  {
    id: 1,
    category: "Holiday",
    title: "Office Closed — Spring Break 🌸",
    body: "Just a heads-up: the office will be closed from 14–18 April for Spring Break. Remote work continues as usual — enjoy the long weekend if you're taking one!",
    author: "Alice Chen",
    role: "Lead Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    timestamp: "Today at 9:00 AM",
    reactions: { kudos: 18, cheer: 22, heart: 9 },
    comments: 5,
  },
  {
    id: 2,
    category: "Product Update",
    title: "Dark Mode is Live ✨",
    body: "We shipped dark mode to all users this morning. Big thanks to the frontend team for three weeks of solid work. Toggle it from the top-right settings icon — we'd love to hear your thoughts.",
    author: "Bob Martinez",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    timestamp: "Yesterday at 2:15 PM",
    reactions: { kudos: 41, cheer: 33, heart: 27 },
    comments: 14,
  },
  {
    id: 3,
    category: "Launch",
    title: "Project Orbit v2.0 — We're Live 🚀",
    body: "After six months of building, testing, and refining, Project Orbit v2.0 is officially launched. New AI-assisted workflows, a redesigned dashboard, and 40% faster load times. This is a huge milestone — thank you to every single person who made it happen.",
    author: "Carol Smith",
    role: "UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
    timestamp: "2 days ago",
    reactions: { kudos: 87, cheer: 64, heart: 51 },
    comments: 29,
  },
  {
    id: 4,
    category: "Promotion",
    title: "Congratulations David Kim — Senior DevOps Engineer 🎖️",
    body: "We're thrilled to announce that David Kim has been promoted to Senior DevOps Engineer, effective immediately. David has been instrumental in our zero-downtime deployment pipeline and mentored three engineers this year. Join us in celebrating!",
    author: "Alice Chen",
    role: "Lead Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    timestamp: "3 days ago",
    reactions: { kudos: 56, cheer: 48, heart: 39 },
    comments: 22,
  },
  {
    id: 5,
    category: "Anniversary",
    title: "Happy 3-Year Work Anniversary, Bob! 🎂",
    body: "Three years ago today, Bob Martinez joined the team as a junior dev and has since become the cornerstone of our frontend guild. Three years, dozens of shipped features, and countless late-night deploys. Here's to many more, Bob!",
    author: "Carol Smith",
    role: "UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
    timestamp: "4 days ago",
    reactions: { kudos: 34, cheer: 29, heart: 44 },
    comments: 17,
  },
];

const categoryConfig: Record<
  PostCategory,
  { badge: string; accent: string; label: string }
> = {
  Holiday: {
    badge: "bg-emerald-100 text-emerald-700",
    accent: "bg-emerald-500",
    label: "🌿 Holiday",
  },
  "Product Update": {
    badge: "bg-indigo-100 text-indigo-700",
    accent: "bg-indigo-500",
    label: "⚡ Product Update",
  },
  Launch: {
    badge: "bg-violet-100 text-violet-700",
    accent: "bg-violet-500",
    label: "🚀 Launch",
  },
  Promotion: {
    badge: "bg-amber-100 text-amber-700",
    accent: "bg-amber-500",
    label: "⭐ Promotion",
  },
  Anniversary: {
    badge: "bg-rose-100 text-rose-700",
    accent: "bg-rose-500",
    label: "🎂 Anniversary",
  },
};

const reactionConfig: Record<ReactionKey, { emoji: string; label: string }> = {
  kudos: { emoji: "👏", label: "Kudos" },
  cheer: { emoji: "🎉", label: "Cheer" },
  heart: { emoji: "❤️", label: "Heart" },
};

export default function FeedPage() {
  const [reacted, setReacted] = useState<Record<number, Set<ReactionKey>>>({});

  const toggle = (postId: number, key: ReactionKey) => {
    setReacted((prev) => {
      const set = new Set(prev[postId] ?? []);
      if (set.has(key)) {
        set.delete(key);
      } else {
        set.add(key);
      }
      return { ...prev, [postId]: set };
    });
  };

  const count = (post: Post, key: ReactionKey) =>
    post.reactions[key] + (reacted[post.id]?.has(key) ? 1 : 0);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4" data-testid="feed-page">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-1" data-testid="feed-heading">
            The Pulse
          </h1>
          <p className="text-gray-500 text-base">
            What's happening inside the organisation.
          </p>
        </div>

        {/* Feed */}
        <div className="flex flex-col gap-5" data-testid="feed-list">
          {posts.map((post) => {
            const config = categoryConfig[post.category];
            return (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                data-testid={`feed-post-${post.id}`}
              >
                {/* Accent bar */}
                <div className={`h-1 w-full ${config.accent}`} />

                <div className="p-6">
                  {/* Category badge + timestamp */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${config.badge}`}
                      data-testid={`post-category-${post.id}`}
                    >
                      {config.label}
                    </span>
                    <span className="text-xs text-gray-400">{post.timestamp}</span>
                  </div>

                  {/* Post title */}
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                    {post.title}
                  </h2>

                  {/* Post body */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {post.body}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-5">
                    <img
                      src={post.avatar}
                      alt={`${post.author} avatar`}
                      className="w-9 h-9 rounded-full border-2 border-gray-100"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{post.author}</p>
                      <p className="text-xs text-gray-400">{post.role}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 mb-4" />

                  {/* Reactions + comments */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {(Object.keys(reactionConfig) as ReactionKey[]).map((key) => {
                      const isActive = reacted[post.id]?.has(key) ?? false;
                      const { emoji, label } = reactionConfig[key];
                      return (
                        <button
                          key={key}
                          onClick={() => toggle(post.id, key)}
                          data-testid={`reaction-${post.id}-${key}`}
                          className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition-colors ${
                            isActive
                              ? "border-indigo-300 bg-indigo-50 text-indigo-700 font-semibold"
                              : "border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300 hover:bg-gray-100"
                          }`}
                          aria-pressed={isActive}
                          aria-label={`${label} — ${count(post, key)}`}
                        >
                          <span>{emoji}</span>
                          <span>{count(post, key)}</span>
                        </button>
                      );
                    })}

                    <span className="ml-auto text-xs text-gray-400">
                      {post.comments} {post.comments === 1 ? "comment" : "comments"}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
