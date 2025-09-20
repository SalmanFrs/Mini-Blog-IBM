import React from "react";

type EmptyStateProps = {
  icon?: string;
  title: string;
  description: string;
};

export default function EmptyState({
  icon = "📜",
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-gray-500 mt-16">
      <div className="text-6xl mb-4">{icon}</div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-400 text-center max-w-sm">
        {description}
      </p>
    </div>
  );
}
