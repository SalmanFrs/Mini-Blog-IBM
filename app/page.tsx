"use client";

import { useState } from "react";
import BlogForm from "../components/BlogForm";
import BlogResult from "../components/BlogResult";
import PageTransition from "../components/PageTransition";

export default function Home() {
  const [result, setResult] = useState("");

  return (
    <PageTransition>
      <main className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-6 w-full max-w-3xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          Mini Blog Generator ✨
        </h1>
        <div className="w-full">
          <BlogForm onResult={setResult} />
        </div>
        <div className="w-full mt-6">
          <BlogResult result={result} />
        </div>
      </main>
    </PageTransition>
  );
}
