"use client";
import Image from "next/image";
import PageTransition from "../../components/PageTransition";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <PageTransition>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-6 py-12">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border max-w-2xl w-full text-center transition hover:shadow-lg">
          {/* Profile */}
          <div className="flex flex-col items-center">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full border-4 border-gray-200 shadow-md"
            />
            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              Salman Faris Alhaitami
            </h1>
            <p className="text-gray-600">Fullstack Developer & AI Enthusiast</p>
          </div>

          {/* My Journey */}
          <div className="mt-8 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              My Journey
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Hello! I am a developer who loves creating tech solutions to
              improve health and lifestyle. For my Capstone Project at the
              Hacktiv8 x IBM program, I built a{" "}
              <span className="font-medium">Smart BMI Advisor</span>, a
              full-stack application I developed completely from start to
              finish. This project proves my skills in building a comprehensive
              solution that can make a positive impact.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              My goal with this project was not just to create a simple blogging
              application, but to explore how modern technologies and AI can be
              used to enhance creativity and make sharing ideas easier. This
              project reflects my learning journey in applying both full-stack
              development skills and AI integration to build something practical
              and meaningful.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Tech Stack
            </h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-600">
              <li>
                <strong>Frontend:</strong> Next.js, React, Tailwind CSS,
                TypeScript
              </li>
              <li>
                <strong>Backend:</strong> Next.js API Routes
              </li>
              <li>
                <strong>AI Integration:</strong> Replicate API (IBM Granite)
              </li>
              <li>
                <strong>Tools:</strong> Git, Vercel, VS Code
              </li>
            </ul>
          </div>

          {/* Let's Connect */}
          <div className="mt-8 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-600 mb-4">
              Feel free to connect with me on my social media and check out my
              projects:
            </p>
            <div className="flex justify-center gap-6 text-2xl text-gray-700">
              <a
                href="https://github.com/SalmanFrs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
