"use client";

import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <HomeIcon className="h-5 w-5" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <InformationCircleIcon className="h-5 w-5" />
                About
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <UserIcon className="h-5 w-5" />
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/salman-faris-alhaitami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SalmanFrs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/slmnfrs03/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaInstagram className="h-5 w-5" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Mini Blog IBM
          </h3>
          <p className="text-sm leading-relaxed">
            A simple mini blog application built as part of the IBM SkillsBuild
            capstone project. Share your thoughts and explore new ideas.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Mini Blog IBM. All rights reserved.
        </p>
        <p className="mt-2 text-xs">
          This project is a capstone assignment for the IBM SkillsBuild program.
          It is not an official IBM product.
        </p>
      </div>
    </footer>
  );
}
