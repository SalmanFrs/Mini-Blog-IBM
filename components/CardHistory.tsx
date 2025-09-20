import React from "react";
import ReactMarkdown from "react-markdown";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

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
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition relative">
      {/* Header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <h3 className="font-semibold text-gray-800 line-clamp-1">{input}</h3>
        <div className="flex items-center gap-2">
          {/* Expand/Collapse icon */}
          {expanded ? (
            <ChevronUpIcon className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-600" />
          )}

          {/* Delete button */}
          <button
            className="p-1 rounded-full hover:bg-red-100 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            aria-label="Delete"
          >
            <TrashIcon className="w-5 h-5 text-red-500 hover:text-red-700" />
          </button>
        </div>
      </div>

      {/* Content */}
      {expanded && (
        <div className="mt-3 text-gray-700 animate-fadeIn">
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
        </div>
      )}
    </div>
  );
}
