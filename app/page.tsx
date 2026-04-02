import React from 'react';
import Link from "next/link";

const HomePage = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6 px-6">
            <h1 className="text-5xl font-bold text-gray-900">Hello World 👋</h1>
            <p className="text-gray-500 text-lg text-center max-w-md">
                Agentic frontend setup with Next.js, TailwindCSS, ShadCN and Playwright.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Link
                    href="/about"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
                >
                    Meet the Team →
                </Link>
                <Link
                    href="/contact"
                    className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                >
                    Contact Us →
                </Link>
                <Link
                    href="/new-page"
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                >
                    New Page →
                </Link>
            </div>
        </main>
    );
};

export default HomePage;