"use client";
import CardAbout from "../../components/CardAbout";
import Image from "next/image";
import PageTransition from "../../components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          About Mini Blog IBM
        </h1>

        <CardAbout title="About the Application">
          <p>
            <strong>Mini Blog IBM</strong> is a simple web application created
            as part of the{" "}
            <span className="font-semibold">
              IBM SkillsBuild Capstone Project
            </span>
            . The purpose of this app is to help users quickly and efficiently
            generate mini blogs with the assistance of AI technology,
            specifically <strong>IBM Granite</strong>, a foundation model
            designed to support natural language processing and code generation
            tasks.
          </p>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a
              href="https://github.com/SalmanFrs/Mini-Blog-IBM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow transition"
            >
              <Image
                src="/github-logo.svg"
                alt="Github Logo"
                width={40}
                height={40}
              />
              <span className="text-sm font-medium text-gray-700">
                Mini-Blog-IBM
              </span>
            </a>
          </div>
        </CardAbout>

        <CardAbout title="Goals">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Practice integrating <strong>Next.js</strong> with AI APIs for
              content generation.
            </li>
            <li>
              Manage <strong>blog history</strong> so users can revisit their
              previously generated results.
            </li>
            <li>
              Implement a simple, modern, and user-friendly interface design.
            </li>
          </ul>
        </CardAbout>

        <CardAbout title="Key Features">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Generate <strong>mini blogs</strong> based on user-input topics.
            </li>
            <li>
              Save <strong>history</strong> so users can access past results.
            </li>
            <li>
              Responsive design powered by <strong>Tailwind CSS</strong>.
            </li>
            <li>Navigation to Home, About, Profile, and History pages.</li>
          </ul>
        </CardAbout>

        <CardAbout title="Technology Used">
          <p>
            This application leverages modern web technologies combined with AI
            integration to deliver a smooth user experience. It uses{" "}
            <strong>Next.js</strong> for the framework,{" "}
            <strong>Tailwind CSS</strong> for styling, and{" "}
            <strong>TypeScript</strong> for type safety. For AI, it integrates{" "}
            <code>ibm-granite/granite-3.3-8b-instruct</code> via{" "}
            <strong>Replicate API</strong>.
          </p>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow transition"
            >
              <Image
                src="/nextjs-logo.svg"
                alt="Next.js Logo"
                width={40}
                height={40}
              />
              <span className="text-sm font-medium text-gray-700">Next.js</span>
            </a>

            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow transition"
            >
              <Image
                src="/tailwind-logo.svg"
                alt="Tailwind Logo"
                width={40}
                height={40}
              />
              <span className="text-sm font-medium text-gray-700">
                Tailwind CSS
              </span>
            </a>

            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow transition"
            >
              <Image
                src="/typescript-logo.svg"
                alt="TypeScript Logo"
                width={40}
                height={40}
              />
              <span className="text-sm font-medium text-gray-700">
                TypeScript
              </span>
            </a>

            <a
              href="https://replicate.com/ibm-granite/granite-3.3-8b-instruct"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow transition"
            >
              <Image
                src="/replicate-logo.svg"
                alt="Replicate Logo"
                width={40}
                height={40}
              />
              <span className="text-sm font-medium text-gray-700">
                IBM Granite
              </span>
            </a>
          </div>
        </CardAbout>

        <CardAbout title="Disclaimer">
          <p>
            This application was built solely for learning and development
            purposes as part of the capstone project.{" "}
            <strong>Mini Blog IBM is not an official IBM product.</strong>
          </p>
        </CardAbout>
      </div>
    </PageTransition>
  );
}
