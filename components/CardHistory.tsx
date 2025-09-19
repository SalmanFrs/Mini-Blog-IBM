import React from "react";
import ReactMarkdown from "react-markdown";

type CardHistoryProps = {
  input: string;
  result: string;
  expanded: boolean;
  onClick: () => void;
  onDelete: () => void;
};

export default function CardHistory({
  input,
  result,
  expanded,
  onClick,
  onDelete,
}: CardHistoryProps) {
  const cleanedResult = (result ?? "")
    .replace(/\n{3,}/g, "\n\n") // lebih dari 3 newline jadi 2
    .replace(/[ \t]+\n/g, "\n") // hapus spasi/tab sebelum newline
    .trim(); // hapus whitespace di awal/akhir

  return (
    <div
      className="border rounded p-4 cursor-pointer bg-white shadow hover:bg-gray-100 relative"
      onClick={onClick}
    >
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 z-10"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        aria-label="Hapus"
      >
        &#10005;
      </button>
      <div className="font-semibold text-gray-700">{input}</div>
      {expanded && (
        <ReactMarkdown
          components={{
            p: (props) => <p className="mb-2 leading-relaxed" {...props} />,
            li: (props) => <li className="ml-5 list-disc mb-1" {...props} />,
            h1: (props) => (
              <h1 className="text-2xl font-bold mt-4 mb-2" {...props} />
            ),
            h2: (props) => (
              <h2 className="text-xl font-semibold mt-3 mb-2" {...props} />
            ),
            h3: (props) => (
              <h3 className="text-lg font-semibold mt-2 mb-1" {...props} />
            ),
          }}
        >
          {cleanedResult}
        </ReactMarkdown>
      )}
    </div>
  );
}
