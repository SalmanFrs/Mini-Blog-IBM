"use client";

import { useState } from "react";
import BlogForm from "../components/BlogForm";
import BlogResult from "../components/BlogResult";

export default function Home() {
  const [result, setResult] = useState("");

  return (
    <main className="flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold mb-4">Mini Blog Generator ✨</h1>
      <BlogForm onResult={setResult} />
      <BlogResult result={result} />
    </main>
  );
}
