"use client";
import { useState } from "react";

export default function BlogForm({
  onResult,
}: {
  onResult: (text: string) => void;
}) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    onResult("⏳ Generating blog...");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    onResult(data.result || data.error);
    setLoading(false);

    const history = JSON.parse(localStorage.getItem("blogHistory") || "[]");
    history.unshift({ input: prompt, result: data.result });
    localStorage.setItem("blogHistory", JSON.stringify(history));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-xl p-4 sm:p-6 bg-white border rounded-lg shadow-md"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
        ✍️ Generate Your Blog
      </h2>

      <textarea
        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent resize-none transition text-sm sm:text-base"
        rows={5}
        placeholder="Write your blog idea or topic here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        type="submit"
        className="bg-gray-900 text-white font-medium py-2.5 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-800 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-sm sm:text-base"
        disabled={loading}
      >
        {loading ? "⏳ Processing..." : "🚀 Generate Blog"}
      </button>
    </form>
  );
}
