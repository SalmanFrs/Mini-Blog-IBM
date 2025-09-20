import React from "react";
import ReactMarkdown from "react-markdown";

export default function BlogResult({ result }: { result: string }) {
  if (!result) {
    return null;
  }

  return (
    <div className="mt-6 w-full max-w-lg p-3 sm:p-4 border rounded bg-gray-50 overflow-x-auto">
      <h2 className="font-semibold mb-2 text-base sm:text-lg">Result :</h2>
      <ReactMarkdown
        components={{
          p: (props) => (
            <p
              className="mb-2 leading-relaxed text-sm sm:text-base"
              {...props}
            />
          ),
          li: (props) => (
            <li
              className="ml-5 list-disc mb-1 text-sm sm:text-base"
              {...props}
            />
          ),
        }}
      >
        {String(result)}
      </ReactMarkdown>
    </div>
  );
}
