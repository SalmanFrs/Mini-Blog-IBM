import React from "react";
import ReactMarkdown from "react-markdown";

export default function BlogResult({ result }: { result: string }) {
  if (!result) {
    return null; // jangan render apa-apa kalau belum ada hasil
  }

  return (
    <div className="mt-6 w-full max-w-lg p-4 border rounded bg-gray-50">
      <h2 className="font-semibold mb-2">Result :</h2>
      <ReactMarkdown
        components={{
          p: (props) => <p className="mb-2 leading-relaxed" {...props} />,
          li: (props) => <li className="ml-5 list-disc mb-1" {...props} />,
        }}
      >
        {String(result)}
      </ReactMarkdown>
    </div>
  );
}
