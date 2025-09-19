"use client";
import { useEffect, useState } from "react";
import CardHistory from "../../components/CardHistory";

type BlogHistory = { input: string; result: string };

export default function HistoryPage() {
  const [history, setHistory] = useState<BlogHistory[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("blogHistory") || "[]");
    setHistory(data);
  }, []);

  const handleDelete = (idx: number) => {
    const newHistory = history.filter((_, i) => i !== idx);
    setHistory(newHistory);
    localStorage.setItem("blogHistory", JSON.stringify(newHistory));
    if (selected === idx) setSelected(null);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">History</h1>
      <div className="flex flex-col gap-4">
        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-12">
            <div className="text-5xl mb-4">📜</div>
            <p className="text-lg font-medium">No history yet</p>
            <p className="text-sm text-gray-400">
              Generate some results and they’ll appear here.
            </p>
          </div>
        ) : (
          history.map((item, idx) => (
            <CardHistory
              key={idx}
              input={item.input}
              result={item.result}
              expanded={selected === idx}
              onClick={() => setSelected(selected === idx ? null : idx)}
              onDelete={() => handleDelete(idx)}
            />
          ))
        )}
      </div>
    </div>
  );
}
