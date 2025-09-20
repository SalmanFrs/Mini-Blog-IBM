import React from "react";

type CardAboutProps = {
  title: string;
  children: React.ReactNode;
};

export default function CardAbout({ title, children }: CardAboutProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 border">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
