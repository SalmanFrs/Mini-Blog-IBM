"use client";
import { useEffect, useState } from "react";
import CardHistory from "../../components/CardHistory";
import EmptyState from "../../components/EmptyState";
import PageTransition from "../../components/PageTransition";

type BlogHistory = { input: string; result: string };

export default function HistoryPage() {
  const [history, setHistory] = useState<BlogHistory[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("blogHistory") || "[]");
    setHistory(data);
  }, []);

  const handleDelete = (idx: number) => {
    const newHistory = history.filter((_, i) => i !== idx);
    setHistory(newHistory);
    localStorage.setItem("blogHistory", JSON.stringify(newHistory));
    if (expandedIndex === idx) setExpandedIndex(null);
  };

  return (
    <PageTransition>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">History</h1>

        {history.length === 0 ? (
          <EmptyState
            icon="📝"
            title="No history yet"
            description="Start generating mini blogs, and your history will appear here."
          />
        ) : (
          <div className="flex flex-wrap gap-4">
            {history.map((item, idx) => (
              <CardHistory
                key={idx}
                input={item.input}
                result={item.result}
                expanded={expandedIndex === idx}
                onClick={() =>
                  setExpandedIndex(expandedIndex === idx ? null : idx)
                }
                onDelete={() => handleDelete(idx)}
              />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
