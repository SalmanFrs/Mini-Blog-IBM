# Mini Blog IBM

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)](https://vercel.com)
[![Replicate](https://img.shields.io/badge/Replicate-FF6B6B?logo=replicate&logoColor=white&style=for-the-badge)](https://replicate.com)

## 📖 Description

Mini Blog IBM is a simple web application that allows users to generate short blog posts automatically using AI.  
By entering a topic or idea, users can instantly get a well-structured mini blog, view previous results in history, and learn more about the app through additional pages.  
This project is part of the Student Development Initiative Hacktiv8 x IBM Skillsbuild Student Initiative Course.

---

## ⚙️ Technologies Used

### 🖥️ 1. Frontend

- [![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org) **Next.js (React Framework)** → build a modern, fast, and responsive interface.
- [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org) **TypeScript** → improve code reliability and readability with static typing.
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com) **Tailwind CSS** → provide consistent, responsive, and fast styling.

---

### 🔗 2. Backend & API

- ⚡ **Next.js API Routes** → handle requests from frontend and interact with the AI model.
- 🌐 **Fetch API** → communication between client and server.
- 💾 **LocalStorage** → manage and store blog history on the client side.

---

### 🤖 3. AI & Platform

- 🧠 **AI Model (IBM Granite)** → generate blog content based on user-provided topics.
- [![Replicate](https://img.shields.io/badge/Replicate-FF6B6B?logo=replicate&logoColor=white)](https://replicate.com) **Replicate** → AI platform used to run the IBM Granite model (`granite-3.3-8b-instruct`).
- 🔑 **Replicate API Token** → used for authentication and secure communication with the model.

---

### 🚀 4. Deployment

- [![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com) **Vercel** → deploy the Next.js app quickly, easily, and directly integrated with GitHub.

---

## 🛠️ Features

### Main Features

- ✨ **Blog Generator** → users can input a topic, and the system will generate a mini blog automatically using AI.
- 📝 **Generated Result Display** → generated text is rendered in Markdown format for better readability.
- 🗂 **History Page** → saves previously generated blogs so users can revisit old content.

### Other Features

- ℹ️ **About Page** → explains the purpose of the app, the technologies used, and the AI model behind it.
- 👤 **Profile Page** → showcases the developer’s personal information, learning journey, tech stack, and social links.

---

## 🔌 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/SalmanFrs/Mini-Blog-IBM.git
   cd Mini-Blog-IBM
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a file named .env.local in the root of the project.
   - Add your Replicate API token to this file:

   ```bash
   REPLICATE_API_TOKEN=r8_*************************************
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser.

---

## 🤖 AI Support Explanation

This project integrates **IBM Granite**, a family of foundation models designed and optimized for enterprise AI use cases, through the **Replicate API**. Granite provides advanced natural language understanding and text generation capabilities, which power the core feature of this application: generating coherent, contextually relevant, and easy-to-read blog posts from simple user inputs.

When a user enters a topic or idea, the application sends this prompt to the Granite model via **Replicate**. The AI model processes the input, applies contextual reasoning, and generates a mini blog with structured content that is concise yet informative.

To ensure security and maintain best practices, AI requests are managed through **Next.js API routes**. This setup ensures that sensitive credentials such as the **REPLICATE_API_TOKEN** are stored securely in the **.env.local** file and never exposed to the client side. By doing so, the communication between the application and the AI model remains protected, while still providing real-time responses to the user.

The integration of AI not only accelerates the content creation process but also adds significant value by:

- Reducing the effort required to draft initial ideas.

- Allowing users to explore diverse perspectives and writing styles.

- Making blog creation faster, more efficient, and accessible to anyone, even without writing expertise.

Ultimately, **IBM Granite** empowers this project to deliver an AI-driven blogging experience that transforms raw ideas into polished content, showcasing how modern AI can bridge the gap between creativity and productivity.

---

## 🔍 Deployment

This application is deployed on Vercel.

**Live Site**: https://mini-blog-ibm.vercel.app/
