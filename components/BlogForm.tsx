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
    setLoading(true);
    onResult("Loading...");

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
      className="flex flex-col gap-4 w-full max-w-lg"
    >
      <textarea
        className="border p-2 rounded"
        rows={4}
        placeholder="Write blog ideas here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition disabled:opacity-60 cursor-pointer"
        disabled={loading}
      >
        {loading ? "Processing..." : "Generate"}
      </button>
    </form>
  );
}
